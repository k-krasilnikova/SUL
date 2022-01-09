import React from 'react';
import { Typography } from '@mui/material';

import { AuthorizedLayout } from 'components/Layout';
import { CourseItem } from 'components/Course';
import { SIZE } from 'constants/sizes';
import { Course } from 'types/course';

import { PageContainer, CourseButton, CourseActions } from './styled';

import { useGetCourses } from 'api/courses';

const CoursesList: React.FC = () => {
  const { data, isLoading, isFetching } = useGetCourses();
  return (
    <AuthorizedLayout pageName="Courses List">
      <PageContainer>
        {isLoading || isFetching ? (
          <Typography>...Loading</Typography>
        ) : (
          data instanceof Array &&
          data.map((course: Course, id: number) => (
            <CourseItem
              key={id}
              title={course?.title}
              description={course?.description}
              duration={course?.duration}
              lessons={course?.lessons}
              size={SIZE.medium}
            >
              <CourseActions>
                <CourseButton color="primary" variant="contained">
                  Details
                </CourseButton>
                <CourseButton color="primary" variant="contained">
                  Start the course
                </CourseButton>
              </CourseActions>
            </CourseItem>
          ))
        )}
      </PageContainer>
    </AuthorizedLayout>
  );
};

export default CoursesList;
