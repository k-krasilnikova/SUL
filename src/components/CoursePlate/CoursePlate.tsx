import * as React from 'react';

import { Size } from 'enums/sizes';
import Avatar from 'components/Avatar';

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
        <Avatar size={Size.xsmall} avatar={course.avatar} />
      </ImageWrapper>
      {course.title}
    </CourseWrapper>
  );
};

export default CoursePlate;
