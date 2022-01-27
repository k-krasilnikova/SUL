import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';

import { AuthorizedLayout } from 'components/Layout';
import { CourseItem } from 'components/Course';
import { NoContent } from 'components/NoContent';
import { NO_COURSES } from 'constants/messages';
import { ResponseDataType } from 'types/responseData';
import { PATHS } from 'constants/routes';
import Loader from 'components/Loader';

import { PageContainer, CourseButton, CourseActions, GridItem } from './styled';

const CoursesList: React.FC<ResponseDataType> = ({ data, isLoading, handleApplyCourse }) => (
  <AuthorizedLayout pageName="Courses List">
    {isLoading ? (
      <Loader color="primary" />
    ) : data?.length ? (
      <PageContainer container>
        {data?.map((course) => (
          <GridItem key={course._id} item xl={6} lg={6} md={12} sm={12}>
            <Suspense fallback={<Loader color="primary" />}>
              <CourseItem
                key={course._id}
                title={course?.title}
                description={course?.description}
                duration={course?.duration}
                lessons={course?.lessons}
              >
                <CourseActions>
                  <Link to={`${PATHS.coursesList}/61f2c1de34177dc43970ead7`}>
                    <CourseButton color="primary" variant="contained">
                      Details
                    </CourseButton>
                  </Link>
                  <CourseButton onClick={handleApplyCourse} color="primary" variant="contained">
                    Start the course
                  </CourseButton>
                </CourseActions>
              </CourseItem>
            </Suspense>
          </GridItem>
        ))}
      </PageContainer>
    ) : (
      <NoContent message={NO_COURSES} />
    )}
  </AuthorizedLayout>
);

export default CoursesList;
