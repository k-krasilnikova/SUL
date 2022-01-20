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
import mongoose from 'mongoose';
import ClientCourseModel from '../models/ClientCourses';

const getCoursesProvider = async ({
  pageN,
  title,
  orderField = DEFAULT_ORDER_FIELD,
  order = ORDER_TYPE.asc,
  nPerPage = DEFAULT_N_PER_PAGE,
}: IQueryCourses) => {
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
};

const getCourseProvider = async (courseId: string) => {
  const course = await CourseModel.find({ _id: courseId }, { materials: 0 }).lean();
  if (!course) {
    throw new Error('course not found');
  }
  return course;
};

export { getCoursesProvider, getCourseProvider };
