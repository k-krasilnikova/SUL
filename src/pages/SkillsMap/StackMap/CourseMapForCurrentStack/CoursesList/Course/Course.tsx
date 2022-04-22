import { FC } from 'react';

import Avatar from 'components/Avatar';
import { PATHS } from 'constants/routes';
import { Size } from 'enums/sizes';
import { ICourseProps } from 'pages/SkillsMap/types';
import transformRoute from 'utils/helpers/paths/transformRoute';

import { CourseWrapper, ImageWrapper, CourseTitle } from './styled';

const Course: FC<ICourseProps> = ({ course, handleCourseClick }) => {
  const { _id: courseId, avatar, title, isCompleted } = course;

  return (
    <CourseWrapper
      to={transformRoute(PATHS.courseDetails, courseId)}
      isCompleted={isCompleted}
      onClick={handleCourseClick}
    >
      <ImageWrapper>
        <Avatar size={Size.xsmall} avatar={avatar} />
      </ImageWrapper>
      <CourseTitle>{title}</CourseTitle>
    </CourseWrapper>
  );
};

export default Course;
