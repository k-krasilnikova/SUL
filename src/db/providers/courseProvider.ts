import mongoose, { Types } from 'mongoose';
import { isEmpty, isNull } from 'lodash';

import {
  DEFAULT_N_PER_PAGE,
  DEFAULT_ORDER_FIELD,
  ESTIMATE_TIME_PER_LESSON,
  FIRST_PAGE,
  NOTHING,
  NO_FILTER,
} from 'config/constants';
import CourseModel from 'db/models/Course';
import ClientCourseModel from 'db/models/ClientCourses';
import { ICourse } from 'interfaces/entities/courses';
import { TCourseFields } from 'interfaces/entities/clientCourses';
import { ICoursePopulated, ICourseWithStatus } from 'interfaces/courses/query';
import { IPreparedCourseDataPayload } from 'interfaces/requests/common/payloads';
import { TGetCoursesParams } from 'interfaces/requests/common/queries';
import { SortOrder } from 'enums/common';
import decodeAndFormatSearchParams from 'utils/decode/decodeSearchParams';
import { convertToCourseDuration } from 'utils/typeConversion/datetimeTypeConversions';
import { convertToTypeUnsafe } from 'utils/typeConversion/common';
import { BadRequestError, NotFoundError } from 'classes/errors/clientErrors';

import { TResponsePayload as TMaterialsPayload } from 'interfaces/requests/courses/getMaterials';
import { getTestById } from './testProvider';

const generateCourseStatusLookup = (userId: Types.ObjectId | string) => ({
  $lookup: {
    from: 'clientCourses',
    localField: '_id',
    foreignField: 'course',
    pipeline: [
      {
        $match: {
          $expr: {
            $and: [{ $eq: ['$user', new mongoose.Types.ObjectId(String(userId))] }],
          },
        },
      },
      {
        $project: {
          status: 1,
          _id: 0,
        },
      },
    ],
    as: 'status',
  },
});

interface ICourseWithStatusDb extends ICourse {
  status: [{ status?: string }];
}

const normalizeAgregatedCourse = (agregatedCourse: ICourseWithStatusDb): ICourseWithStatus => {
  const course: ICourseWithStatus = { ...agregatedCourse, status: 'not set' };
  if (!isEmpty(agregatedCourse.status)) {
    const [{ status: courseStatus }]: [{ status?: string }] = agregatedCourse.status;
    course.status = courseStatus;
  } else {
    delete course.status;
  }
  return course;
};

const normalizeAgregatedCourses = (aggregation: ICourseWithStatusDb[]): ICourseWithStatus[] =>
  aggregation.map(normalizeAgregatedCourse);

const populateCourses = async (courses: ICourseWithStatus[]): Promise<ICourseWithStatus[]> => {
  const populated = await CourseModel.populate(courses, [
    { path: 'technologies', model: 'Skill', select: 'name image maxScore -_id' },
    { path: 'requiredSkills', model: 'Skill', select: 'name image maxScore -_id' },
  ]);

  return populated;
};

const populateCourse = async (course: ICourseWithStatus): Promise<ICourseWithStatus> => {
  const populated = await CourseModel.populate(course, [
    {
      path: 'technologies',
      populate: { path: 'skill', model: 'Skill', select: 'name image maxScore -_id' },
    },
    { path: 'similarCourses' },
  ]);

  return populated;
};

const getCoursesProvider = async (
  {
    pageN,
    title,
    technologies,
    complexity,
    orderField = DEFAULT_ORDER_FIELD,
    order = SortOrder.asc,
    nPerPage = DEFAULT_N_PER_PAGE,
  }: TGetCoursesParams,
  userId: string,
): Promise<ICourseWithStatus[]> => {
  try {
    const sortingField = { [orderField]: order };
    const aggregation: ICourseWithStatusDb[] = await CourseModel.aggregate([
      {
        $lookup: {
          from: 'skills',
          localField: 'technologies.skill',
          foreignField: '_id',
          pipeline: [{ $project: { name: 1 } }],
          as: 'techsMapSkills',
        },
      },
      {
        $match: {
          $and: [
            title
              ? {
                  title: {
                    $regex: new RegExp(decodeAndFormatSearchParams(title)),
                    $options: 'i',
                  },
                }
              : NO_FILTER,
            complexity && complexity.length ? { complexity: { $in: complexity } } : NO_FILTER,
            technologies && technologies.length
              ? { 'techsMapSkills.name': { $in: technologies } }
              : NO_FILTER,
          ],
        },
      },
      generateCourseStatusLookup(userId),
      {
        $sort: {
          'status.0.status': SortOrder.asc,
          ...sortingField,
        },
      },
      {
        $skip: pageN ? (pageN - FIRST_PAGE) * nPerPage : NOTHING,
      },
      {
        $limit: Number(nPerPage),
      },
      {
        $project: {
          techsMapSkills: 0,
        },
      },
    ]);

    const courses: ICourseWithStatus[] = normalizeAgregatedCourses(aggregation);

    const populated = await populateCourses(courses);

    return populated;
  } catch (error) {
    throw new BadRequestError('Invalid query. Check the data being sent.');
  }
};

const getCourseProvider = async (
  courseId: string | Types.ObjectId,
  userId: string | Types.ObjectId,
): Promise<ICourseWithStatus> => {
  const aggregation: ICourseWithStatusDb[] = await CourseModel.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(courseId.toString()),
      },
    },
    generateCourseStatusLookup(userId),
  ]);

  const [agregatedCourse] = aggregation;
  if (!agregatedCourse) {
    throw new NotFoundError('Course not found.');
  }

  const course: ICourseWithStatus = normalizeAgregatedCourse(agregatedCourse);

  const populated = await populateCourse(course);

  return populated;
};

const getCourseByIdProvider = async (
  courseId: string | Types.ObjectId,
): Promise<ICoursePopulated> => {
  const course = await CourseModel.findById(courseId)
    .populate('test')
    .populate({ path: 'technologies', populate: { path: 'skill' } })
    .lean();

  if (isNull(course)) {
    throw new NotFoundError('Course not found.');
  }

  return convertToTypeUnsafe<ICoursePopulated>(course);
};

const getMaterialsProvider = async (courseId: string): Promise<TMaterialsPayload> => {
  const material = await CourseModel.findById(courseId).select('materials').lean();
  if (!material) {
    throw new NotFoundError('Materials not found.');
  }
  return material;
};

const materialsCounterProvider = async (
  courseId: string | Types.ObjectId,
): Promise<
  {
    _id: string;
    total: number;
  }[]
> => {
  const materialsCount: { _id: string; total: number }[] = await CourseModel.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(courseId) } },
    {
      $project: {
        total: { $size: '$materials' },
      },
    },
  ]);
  if (!materialsCount.length) {
    throw new NotFoundError('Course not found.');
  }
  return materialsCount;
};

const deleteCourseProvider = async (courseId: string): Promise<void> => {
  await CourseModel.findOneAndDelete({ _id: courseId });
  await ClientCourseModel.deleteMany({ course: courseId });
};

const updateCourseField = async (
  courseId: string,
  field: TCourseFields,
  value: unknown,
): Promise<ICourse> => {
  const updatedCourse = await CourseModel.findOneAndUpdate(
    { _id: courseId },
    { $set: { [field]: value } },
    { returnDocument: 'after' },
  ).lean();
  if (!updatedCourse) {
    throw new BadRequestError('Bad request. Check the data being sent.');
  }
  return updatedCourse;
};

const getAllCoursesProvider = async (
  userId: string,
  title?: string,
): Promise<ICourseWithStatus[]> => {
  try {
    const aggregation: ICourseWithStatusDb[] = await CourseModel.aggregate([
      {
        $match: title
          ? { title: { $regex: new RegExp(decodeAndFormatSearchParams(title)), $options: 'i' } }
          : NO_FILTER,
      },
      {
        $lookup: {
          from: 'clientCourses',
          localField: '_id',
          foreignField: 'course',
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [{ $eq: ['$user', new mongoose.Types.ObjectId(userId)] }],
                },
              },
            },
            {
              $project: {
                status: 1,
                _id: 0,
              },
            },
          ],
          as: 'status',
        },
      },
    ]);

    const courses: ICourseWithStatus[] = aggregation.map((agregatedCourse) => {
      const course: ICourseWithStatus = { ...agregatedCourse, status: 'not set' };

      if (agregatedCourse.status.length) {
        const [{ status: courseStatus }]: [{ status?: string }] = agregatedCourse.status;
        course.status = courseStatus;
      } else {
        delete course.status;
      }

      return course;
    });

    return courses;
  } catch (error) {
    throw new BadRequestError('Invalid query. Check the data being sent.');
  }
};

const getCourseStatusProvider = async (
  courseId: string | Types.ObjectId,
  userId: string | Types.ObjectId,
): Promise<ICourseWithStatus['status']> => {
  const relateClientCourse = await ClientCourseModel.findOne({
    course: courseId,
    user: userId,
  }).lean();

  return relateClientCourse?.status;
};

const addCourseProvider = async (newCourse: IPreparedCourseDataPayload): Promise<ICourse> =>
  CourseModel.create(newCourse);

const addSimilarCoursesProvider = async (course: ICourse): Promise<void> => {
  await CourseModel.findOneAndUpdate({ _id: course._id }, { $set: { similarCourses: [] } });
  await Promise.all(
    course.technologies.map(async (currentSkill) => {
      const similarCourses = await CourseModel.find({
        'technologies.skill': currentSkill.skill,
      }).lean();

      similarCourses.map(async (similarCourse) => {
        await CourseModel.updateMany(
          {
            'technologies.skill': currentSkill.skill,
            similarCourses: { $nin: [similarCourse._id] },
            _id: { $ne: similarCourse._id },
          },
          { $push: { similarCourses: similarCourse._id } },
        );
      });
    }),
  );
};

const refreshCourseLessonsAndDuration = async (courseId: string): Promise<void> => {
  const course = await CourseModel.findById(courseId).lean();
  if (!course) {
    throw new BadRequestError('Course not found.');
  }
  const test = await getTestById(course.test);
  await CourseModel.findByIdAndUpdate(courseId, {
    $set: {
      lessons: course.materials.length,
      duration: convertToCourseDuration(
        course.materials.length * ESTIMATE_TIME_PER_LESSON + test.timeout,
      ),
    },
  });
};

const getPlainCourseAchievements = async (
  courseId?: string | Types.ObjectId,
): Promise<ICourse['technologies']> => {
  const course = await CourseModel.findById(courseId).lean();

  if (!course) {
    throw new NotFoundError('Course was not found.');
  }

  const { technologies } = course;

  return technologies;
};

export {
  getCoursesProvider,
  getCourseProvider,
  getAllCoursesProvider,
  materialsCounterProvider,
  getMaterialsProvider,
  deleteCourseProvider,
  updateCourseField,
  getCourseStatusProvider,
  addCourseProvider,
  addSimilarCoursesProvider,
  refreshCourseLessonsAndDuration,
  getCourseByIdProvider,
  getPlainCourseAchievements,
};
