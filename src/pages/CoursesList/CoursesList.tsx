import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';

import { AuthorizedLayout } from 'components/Layout';
import { CourseItem } from 'components/Course';
import { NoContent } from 'components/NoContent';
import { NO_COURSES } from 'constants/messages';
import { ResponseDataType } from 'types/responseData';
import { PATHS } from 'constants/routes';
import Loader from 'components/Loader';
import ButtonLoader from 'components/ButtonLoader';
import { buttonSpinner } from 'animations';

import {
  PageContainer,
  CourseActions,
  GridItem,
  CourseActionsBox,
  DetailsButton,
  StartCourseButton,
} from './styled';

const CoursesList: React.FC<ResponseDataType> = ({
  data,
  isLoading,
  handleApplyCourse,
  status,
  targetId,
}) => (
  <AuthorizedLayout pageName="Courses List">
    {isLoading ? (
      <Loader color="primary" />
    ) : data?.length ? (
      <PageContainer container rowSpacing="24px" columnSpacing="30px">
        {data?.map((course) => (
          <GridItem key={course._id} item xl={6} lg={6} md={12} sm={12} container>
            <Suspense fallback={<Loader color="primary" />}>
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
                    {status === 'loading' && targetId === course._id ? (
                      <StartCourseButton variant="mediumOutlined" disabled>
                        <ButtonLoader buttonSpinner={buttonSpinner} />
                      </StartCourseButton>
                    ) : (
                      <StartCourseButton
                        id={course._id}
                        onClick={handleApplyCourse}
                        variant="mediumContained"
                      >
                        Start the course
                      </StartCourseButton>
                    )}
                  </CourseActions>
                </CourseActionsBox>
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