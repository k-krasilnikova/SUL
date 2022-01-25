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
    if (!courses) {
      throw new Error('courses not found');
    }
    return courses;
  } catch (error) {
    throw new Error('invalid query');
  }
};

const getCourseProvider = async (courseId: string) => {
  const course = await CourseModel.find({ _id: courseId }, { materials: 0 }).lean();
  if (!course) {
    throw new Error('course not found');
  }
  return course;
};

const getMaterialsProvider = async ({ courseId, stage }: { courseId: string; stage?: string }) => {
  const material = await CourseModel.find(
    {
      $and: [{ _id: courseId }, stage?.length ? { 'materials.stage': Number(stage) } : {}],
    },
    stage?.length ? { 'materials.$': 1 } : { materials: 1 },
  ).lean();
  if (!material) {
    throw new Error('materials not found');
  }
  return material;
};

const materialsCounterProvider = async (courseId: string) => {
  const materialsCount = await CourseModel.aggregate([
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
