import mongoose from 'mongoose';

import { mockedCourses } from '__mock__/mockedCourses';
import { ICourseWithStatus } from 'interfaces/ICourses/IQueryCourses';
import { ICourseShortInfo } from 'interfaces/IResponse/IResponse';
import CourseStatus from 'enums/coursesEnums';
import {
  filterOnlyAvailableCourses,
  mapAvailableCoursesInfo,
} from 'controllers/manager/getEmployeeAvailableCourses/utils/mappers';
import { mapCourse } from 'controllers/courses/getCourse/utils/mappers';
import {
  shortifyCourseInfo,
  shortifyCourses,
} from 'controllers/courses/getCoursesMap/utils/mappers';

describe('Normalize courses tests', () => {
  const createObjectId = () => new mongoose.Types.ObjectId();

  const coursesObjectIds = mockedCourses.map(() => createObjectId());
  const courses = mockedCourses.map((course, index) => ({
    ...course,
    _id: coursesObjectIds[index],
  }));
  it('Returns courses without status', () => {
    const coursesWithStatus = [...mockedCourses, { ...mockedCourses[0], status: 'started' }];
    const onlyAvailableCourses = filterOnlyAvailableCourses(
      coursesWithStatus as unknown as ICourseWithStatus[],
    );

    onlyAvailableCourses.forEach((course) => {
      expect(course).not.toHaveProperty('status');
    });
  });

  it('Normalize available course info', () => {
    const normalizedCourseInfo = mapAvailableCoursesInfo(courses as unknown as ICourseWithStatus[]);

    normalizedCourseInfo.forEach((course, index) => {
      expect(course).toEqual({ _id: courses[index]._id, title: courses[index].title });
    });
  });

  it('Shortify  course info', () => {
    const course = { ...courses[0] } as unknown as ICourseWithStatus;
    const shortenedCourseInfo: ICourseShortInfo = shortifyCourseInfo(course);

    expect(shortenedCourseInfo).toEqual({
      _id: course._id,
      title: course.title,
      avatar: course.avatar,
      isCompleted: course.status === CourseStatus.completed,
    });
  });

  it('Shortify courses', () => {
    const coursesForCurrentTest = courses.map((course) => ({
      ...course,
    })) as unknown as ICourseWithStatus[];

    const shortenedCourses = shortifyCourses(coursesForCurrentTest);

    shortenedCourses.forEach((course, index) => {
      expect(course).toEqual({
        _id: course._id,
        title: course.title,
        avatar: course.avatar,
        isCompleted: coursesForCurrentTest[index].status === CourseStatus.completed,
      });
    });
  });

  it('Map course', () => {
    const course = { ...mockedCourses[0] } as unknown as ICourseWithStatus;
    const similarCourses = ['a', 'b', 'c'] as unknown as never[];

    const mappedCourse = mapCourse(course, similarCourses);

    expect(mappedCourse).toEqual({ ...course, similarCourses });
  });
});
