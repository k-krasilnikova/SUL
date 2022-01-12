import React from 'react';
import { useState } from 'react';

import { Course } from 'types/course';

import UserCourses from './UserCourses';

interface CoursesProps {
  courses?: Array<Course>;
}

const UserCoursesContainer: React.FC<CoursesProps> = ({ courses }) => {
  const [searchCourse, setSearchCourse] = useState('');
  const userCourses = courses?.filter((course) => {
    if (!searchCourse) {
      return course;
    } else if (course.title.toLowerCase().includes(searchCourse.toLowerCase())) {
      return course;
    }
  });
  return <UserCourses userCourses={userCourses} setSearchCourse={setSearchCourse} />;
};

export default UserCoursesContainer;
