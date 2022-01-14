import React from 'react';
import { Typography } from '@mui/material';

import { AuthorizedLayout } from 'components/Layout';
import { CourseItem } from 'components/Course';
import { Course } from 'types/course';

import { useGetCourses } from 'api/courses';

import { PageContainer, CourseButton, CourseActions, GridItem } from './styled';

const CoursesList: React.FC = () => {
  const { data, isLoading } = useGetCourses();

  return (
    <AuthorizedLayout pageName="Courses List">
      <PageContainer container>
        {isLoading ? (
          <Typography>...Loading</Typography>
        ) : (
          data instanceof Array &&
          data?.map((course: Course) => (
            <GridItem key={course._id} item xl={6} lg={6} md={12} sm={12}>
              <CourseItem
                key={course._id}
                title={course?.title}
                description={course?.description}
                duration={course?.duration}
                lessons={course?.lessons}
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
            </GridItem>
          ))
        )}
      </PageContainer>
    </AuthorizedLayout>
  );
};

export default CoursesList;
