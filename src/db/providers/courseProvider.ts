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
import { IQueryCourses } from 'interfaces/ICourses/IQueryCourses';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';

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
    if (!courses.length) {
      throw new NotFoundError('Course not found.');
    }
    return courses;
  } catch (error) {
    throw new BadRequestError('Invalid query.');
  }
};

const getCourseProvider = async (courseId: string) => {
  const course = await CourseModel.findOne({ _id: courseId }, { materials: 0 }).lean();
  if (!course) {
    throw new NotFoundError('Course not found.');
  }
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
  return materialsCount;
};

export { getCoursesProvider, getCourseProvider, materialsCounterProvider, getMaterialsProvider };
