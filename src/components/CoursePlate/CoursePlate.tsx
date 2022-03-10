import * as React from 'react';

import { UserAvatar } from 'components/Avatar';
import { SIZE } from 'constants/sizes';

import { CourseWrapper, ImageWrapper } from './styled';

interface Course {
  course: {
    title: string;
    avatar: string;
  };
}

const CoursePlate: React.FC<Course> = ({ course }) => {
  return (
    <CourseWrapper>
      <ImageWrapper>
        <UserAvatar size={SIZE.small} avatar={course.avatar} />
      </ImageWrapper>
      {course.title}
    </CourseWrapper>
  );
};

export default CoursePlate;
