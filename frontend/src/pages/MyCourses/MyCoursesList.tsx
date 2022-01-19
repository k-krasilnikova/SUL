import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

import { AuthorizedLayout } from 'components/Layout';
import { CourseItem } from 'components/Course';
import NoContent from 'components/NoContent';
import { NO_COURSES } from 'constants/messages';
import { ClientCourse } from 'types/clientCourse';
import { PATHS } from 'constants/routes';

import { PageContainer, CourseButton, CourseActions, GridItem } from './styled';

export interface ResponeDataType {
  data?: Array<ClientCourse>;
  isLoading?: boolean;
  isError?: boolean;
  isFetching?: boolean;
  isFetched?: boolean;
  error?: string | unknown;
}

const MyCoursesList: React.FC<ResponeDataType> = ({ data, isLoading }) => (
  <AuthorizedLayout pageName="My Courses">
    {isLoading ? (
      <Typography>...Loading</Typography>
    ) : data?.length ? (
      <PageContainer container>
        {data?.map((object) => (
          <GridItem key={object._id} item xl={6} lg={6} md={12} sm={12}>
            <CourseItem
              key={object.course._id}
              title={object.course.title}
              description={object.course.description}
              duration={object.course.duration}
              lessons={object.course.lessons}
            >
              <CourseActions>
                <CourseButton color="primary" variant="contained">
                  Details
                </CourseButton>
                <Link to={`${PATHS.myCourses}/${object.course._id}`}>
                  <CourseButton color="primary" variant="contained">
                    Start the course
                  </CourseButton>
                </Link>
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

export default MyCoursesList;
