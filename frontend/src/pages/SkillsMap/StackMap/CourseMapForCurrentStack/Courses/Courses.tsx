import { FC, BaseSyntheticEvent } from 'react';

import Avatar from 'components/Avatar';
import { PATHS } from 'constants/routes';
import { NO_COURSES } from 'constants/messages';
import { Size } from 'enums/sizes';
import { ICoursesProps } from 'pages/SkillsMap/types';
import transformRoute from 'utils/helpers/paths/transformRoute';

import { CourseWrapper, ImageWrapper, CourseTitle, NoCoursesText } from './styled';

const Courses: FC<ICoursesProps> = ({ courses }) => {
  return (
    <>
      {courses.length ? (
        <>
          {courses.map(({ _id: courseId, avatar, title, isCompleted }) => {
            const handleCourseClick = ({ preventDefault }: BaseSyntheticEvent) => {
              if (isCompleted) {
                preventDefault();
              }
            };

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
          })}
        </>
      ) : (
        <NoCoursesText>{NO_COURSES}</NoCoursesText>
      )}
    </>
  );
};

export default Courses;
