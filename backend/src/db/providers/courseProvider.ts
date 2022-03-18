import mongoose, { ObjectId } from 'mongoose';

import {
  DEFAULT_N_PER_PAGE,
  DEFAULT_ORDER_FIELD,
  FIRST_PAGE,
  NOTHING,
  NO_FILTER,
} from 'config/constants';
import CourseModel from 'db/models/Course';
import { ICourse } from 'interfaces/Ientities/Icourses';
import { ICourseStatus, IQueryCourses } from 'interfaces/ICourses/IQueryCourses';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import { SortOrder } from 'enums/common';

interface ICourseWithStatusDb extends ICourse {
  status: [{ status?: string }];
}

const populateCourses = async (courses: ICourseStatus[]): Promise<ICourseStatus[]> => {
  const populated = await CourseModel.populate(courses, [
    { path: 'technologies', model: 'Skill', select: 'name image maxScore -_id' },
    { path: 'requiredSkills', model: 'Skill', select: 'name image maxScore -_id' },
  ]);

  return populated;
};

const populateCourse = async (course: ICourseStatus): Promise<ICourseStatus> => {
  const populated = await CourseModel.populate(course, [
    { path: 'technologies', model: 'Skill', select: 'name image maxScore -_id' },
    { path: 'requiredSkills', model: 'Skill', select: 'name image maxScore -_id' },
  ]);

  return populated;
};

const getCoursesProvider = async (
  {
    pageN,
    title,
    orderField = DEFAULT_ORDER_FIELD,
    order = SortOrder.asc,
    nPerPage = DEFAULT_N_PER_PAGE,
  }: IQueryCourses,
  userId: string,
) => {
  try {
    const sortingField = { [orderField]: order };
    const aggregation: ICourseWithStatusDb[] = await CourseModel.aggregate([
      {
        $match: title ? { title: { $regex: new RegExp(title), $options: 'i' } } : NO_FILTER,
      },
      {
        $sort: sortingField,
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
      {
        $sort: {
          'status.0.status': SortOrder.asc,
        },
      },
      {
        $skip: pageN ? (pageN - FIRST_PAGE) * nPerPage : NOTHING,
      },
      {
        $limit: nPerPage,
      },
    ]);

    const courses: ICourseStatus[] = aggregation.map((agregatedCourse) => {
      const course: ICourseStatus = { ...agregatedCourse, status: 'not set' };

      if (agregatedCourse.status.length) {
        const [{ status: courseStatus }]: [{ status?: string }] = agregatedCourse.status;
        course.status = courseStatus;
      } else {
        delete course.status;
      }

      return course;
    });

    const populated = await populateCourses(courses);

    return populated;
  } catch (error) {
    throw new BadRequestError('Invalid query.');
  }
};

const getCourseProvider = async (courseId: string | ObjectId, userId: string | ObjectId) => {
  const aggregation: ICourseWithStatusDb[] = await CourseModel.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(courseId.toString()),
      },
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
                $and: [{ $eq: ['$user', new mongoose.Types.ObjectId(userId.toString())] }],
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

  const [agregatedCourse] = aggregation;
  if (!agregatedCourse) {
    throw new NotFoundError('Course not found.');
  }

  const course: ICourseStatus = { ...agregatedCourse, status: 'not set' };

  if (agregatedCourse.status.length) {
    const [{ status: courseStatus }]: [{ status?: string }] = agregatedCourse.status;
    course.status = courseStatus;
  } else {
    delete course.status;
  }

  const populated = await populateCourse(course);

  return populated;
};

const getMaterialsProvider = async ({ courseId, stage }: { courseId: string; stage?: string }) => {
  const material = await CourseModel.findOne(
    {
      $and: [{ _id: courseId }, stage?.length ? { 'materials.stage': Number(stage) } : {}],
    },
    stage?.length ? { 'materials.$': 1 } : { materials: 1 },
  ).lean();
  if (!material) {
    throw new NotFoundError('Materials not found.');
  }
  return material;
};

const materialsCounterProvider = async (courseId: string) => {
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

export { getCoursesProvider, getCourseProvider, materialsCounterProvider, getMaterialsProvider };
