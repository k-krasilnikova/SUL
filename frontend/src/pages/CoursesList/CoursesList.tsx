import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';

import { AuthorizedLayout } from 'components/Layout';
import { CourseItem } from 'components/Course';
import { NoContent } from 'components/NoContent';
import { NO_COURSES } from 'constants/messages';
import { ResponseDataType } from 'types/responseData';
import { PATHS } from 'constants/routes';
import Loader from 'components/Loader';
import { LOADER } from 'constants/loaderTypes';

import {
  PageContainer,
  CourseActions,
  GridItem,
  CourseActionsBox,
  DetailsButton,
  StartCourseButton,
} from './styled';

const CoursesList: React.FC<ResponseDataType> = ({ data, isLoading, handleApplyCourse }) => (
  <AuthorizedLayout pageName="Courses List">
    {isLoading ? (
      <Loader color="primary" type={LOADER.content} />
    ) : data?.length ? (
      <PageContainer container rowSpacing="24px" columnSpacing="30px">
        {data?.map((course) => (
          <Suspense fallback={<Loader color="primary" type={LOADER.content} />}>
            <GridItem key={course._id} item xl={6} lg={12} md={12} sm={12} container>
              <CourseItem
                key={course._id}
                title={course?.title}
                description={course?.description}
                duration={course?.duration}
                lessons={course?.lessons}
              >
                <CourseActionsBox>
                  <CourseActions>
                    <Link to={`${PATHS.coursesList}/${course._id}`}>
                      <DetailsButton color="primary" variant="mediumOutlined">
                        Details
                      </DetailsButton>
                    </Link>
                    <StartCourseButton onClick={handleApplyCourse} variant="mediumContained">
                      Start the course
                    </StartCourseButton>
                  </CourseActions>
                </CourseActionsBox>
              </CourseItem>
            </GridItem>
          </Suspense>
        ))}
      </PageContainer>
    ) : (
      <NoContent message={NO_COURSES} />
    )}
  </AuthorizedLayout>
);

export default CoursesList;
