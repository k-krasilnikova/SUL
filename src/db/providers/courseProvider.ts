import mongoose from 'mongoose';

import {
  DEFAULT_N_PER_PAGE,
  DEFAULT_ORDER_FIELD,
  FIRST_PAGE,
  NOTHING,
  NO_FILTER,
  ORDER_TYPE,
} from 'config/constants';
import CourseModel from 'db/models/Course';
import { ICourseStatus, IQueryCourses } from 'interfaces/ICourses/IQueryCourses';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import { ICourse } from 'interfaces/Ientities/Icourses';

const getCoursesProvider = async ({
  pageN,
  title,
  orderField = DEFAULT_ORDER_FIELD,
  order = ORDER_TYPE.asc,
  nPerPage = DEFAULT_N_PER_PAGE,
}: IQueryCourses) => {
  try {
    const sortingField = { [orderField]: order };
    const courses = await CourseModel.find(
      title ? { title: { $regex: new RegExp(title), $options: 'i' } } : NO_FILTER,
      { materials: 0 },
    )
      .sort(sortingField)
      .skip(pageN ? (pageN - FIRST_PAGE) * nPerPage : NOTHING)
      .limit(nPerPage)
      .lean();
    return courses;
  } catch (error) {
    throw new BadRequestError('Invalid query.');
  }
};

interface ICourseWithStatusDb extends ICourse {
  status: [{ status: string }];
}

const getCourseProvider = async (courseId: string, userId: string) => {
  const aggregation: ICourseWithStatusDb[] = await CourseModel.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(courseId),
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
    {
      $project: {
        materials: 0,
      },
    },
  ]);

  const [agregatedCourse] = aggregation;
  if (!agregatedCourse) {
    throw new NotFoundError('Course not found.');
  }

  const [{ status: courseStatus }] = agregatedCourse.status;

  const course: ICourseStatus = { ...agregatedCourse, status: courseStatus };

  return course;
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
