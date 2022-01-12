import React from 'react';
import { Typography } from '@mui/material';

import { AuthorizedLayout } from 'components/Layout';
import { CourseItem } from 'components/Course';
<<<<<<< HEAD
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
=======
import { Course } from 'types/course';
import { useGetCourses } from 'api/courses';
import { Link } from 'react-router-dom';
import { PATHS } from 'constants/routes';

import { PageContainer, CourseButton, CourseActions } from './styled';

const CoursesList: React.FC = () => {
  const { data, isLoading } = useGetCourses();
  return (
    <AuthorizedLayout pageName="Courses List">
      <PageContainer container spacing={2}>
        {isLoading ? (
          <Typography>...Loading</Typography>
        ) : (
          data instanceof Array &&
          data.map((course: Course) => (
            <Grid key={course._id} item xl={6} lg={6} md={12} sm={12}>
              <CourseItem
                key={course._id}
                title={course?.title}
                description={course?.description}
                duration={course?.duration}
                lessons={course?.lessons}
              >
                <CourseActions>
                  <Link to={`${PATHS.coursesList}/${course._id}`}>
                    <CourseButton color="primary" variant="contained">
                      Details
                    </CourseButton>
                  </Link>
                  <CourseButton color="primary" variant="contained">
                    Start the course
                  </CourseButton>
                </CourseActions>
              </CourseItem>
            </Grid>
          ))
        )}
>>>>>>> 9edf4c2 (WIP)
      </PageContainer>
    ) : (
      <NoContent message={NO_COURSES} />
    )}
  </AuthorizedLayout>
);

export default CoursesList;
