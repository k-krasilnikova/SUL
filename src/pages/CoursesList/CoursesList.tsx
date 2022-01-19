import React from 'react';
import { Typography } from '@mui/material';

import { AuthorizedLayout } from 'components/Layout';
import { CourseItem } from 'components/Course';
import NoContent from 'components/NoContent';
import { NO_COURSES } from 'constants/messages';
import { ResponeDataType } from '../../types/responseData';

import { PageContainer, CourseButton, CourseActions, GridItem } from './styled';

const CoursesList: React.FC<ResponeDataType> = ({ data, isLoading }) => (
  <AuthorizedLayout pageName="Courses List">
    {isLoading ? (
      <Typography>...Loading</Typography>
    ) : data?.length ? (
      <PageContainer container>
        {data?.map((course) => (
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
        ))}
      </PageContainer>
    ) : (
      <NoContent message={NO_COURSES} />
    )}
  </AuthorizedLayout>
);

export default CoursesList;
