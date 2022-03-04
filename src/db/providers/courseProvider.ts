import mongoose from 'mongoose';

import {
  DEFAULT_N_PER_PAGE,
  DEFAULT_ORDER_FIELD,
  FIRST_PAGE,
  NOTHING,
  NO_FILTER,
} from 'config/constants';
import CourseModel from 'db/models/Course';
import { ICourseStatus, IQueryCourses } from 'interfaces/ICourses/IQueryCourses';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import { ICourse } from 'interfaces/Ientities/Icourses';
import { SortOrder } from 'enums/common';

interface ICourseWithStatusDb extends ICourse {
  status: [{ status?: string }];
}

const getCoursesProvider = async (
  {
    pageN,
    title,
    orderField = DEFAULT_ORDER_FIELD,
    order = SortOrder.asc,
    nPerPage = DEFAULT_N_PER_PAGE,
  }: IQueryCourses,
  userId: string,
): Promise<ICourseStatus[]> => {
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
        $skip: pageN ? (pageN - FIRST_PAGE) * nPerPage : NOTHING,
      },
      {
        $limit: nPerPage,
      },
      {
        $project: {
          materials: 0,
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

    const populated = await CourseModel.populate(courses, [
      { path: 'technology', model: 'Skill', select: 'name image maxScore -_id' },
      { path: 'requiredSkills', model: 'Skill', select: 'name image maxScore -_id' },
    ]);

    return populated;
  } catch (error) {
    throw new BadRequestError('Invalid query.');
  }
};

const getCourseProvider = async (courseId: string, userId: string): Promise<ICourseStatus> => {
  const aggregation: ICourseWithStatusDb[] = await CourseModel.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(courseId),
      },
    },
    {
      $project: {
        materials: 0,
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

  const populated = await CourseModel.populate(course, [
    { path: 'technology', model: 'Skill', select: 'name image maxScore -_id' },
    { path: 'requiredSkills', model: 'Skill', select: 'name image maxScore -_id' },
  ]);

  return populated;
};

const getMaterialsProvider = async ({ courseId, stage }: { courseId: string; stage?: string }) => {
  const material = await CourseModel.find(
    {
      $and: [{ _id: courseId }, stage?.length ? { 'materials.stage': Number(stage) } : {}],
    },
    stage?.length ? { 'materials.$': 1 } : { materials: 1 },
  ).lean();
  if (!material.length) {
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
