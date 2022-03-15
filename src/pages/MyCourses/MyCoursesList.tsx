import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';

import { AuthorizedLayout } from 'components/Layout';
import { CourseItem } from 'components/Course';
import { NoContent } from 'components/NoContent';
import { NO_COURSES } from 'constants/messages';
import { PATHS } from 'constants/routes';
import { ResponseDataMyCourses } from 'types/responseDataMyCourses';
import Loader from 'components/Loader';
import { LOADER } from 'constants/loaderTypes';
import { COURSE_LABELS, COURSE_STATUSES } from 'constants/statuses';
import { countProgress } from 'utils/helpers/countCourseProgress';
import { convertDurationToString } from 'utils/helpers/convertDurationToString';
import { PAGES } from 'constants/pages';
import { MobileSearch } from 'components/Layout/MobileSearch';
import DeclinedButton from 'components/Button/DeclinedButton';

import {
  PageContainer,
  CourseActions,
  GridItem,
  CourseActionsBox,
  DetailsButton,
  MobileLink,
  ContinueTestButton,
  MobileSearchWrapper,
  CompletedButton,
} from './styled';

interface Props {
  disableLink: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  windowWidth: string;
}

type MyCoursesProps = ResponseDataMyCourses & Props;

const MyCoursesList: React.FC<MyCoursesProps> = ({
  clientCourses,
  isLoading,
  disableLink,
  windowWidth,
}) => (
  <AuthorizedLayout pageName="My Courses">
    {isLoading ? (
      <Loader color="primary" type={LOADER.content} />
    ) : clientCourses?.length ? (
      <PageContainer container>
        <MobileSearchWrapper>
          <MobileSearch />
        </MobileSearchWrapper>
        {clientCourses?.map((clientCourse) => (
          <Suspense
            key={clientCourse._id}
            fallback={<Loader color="primary" type={LOADER.content} key={clientCourse._id} />}
          >
            <GridItem item xl={6} lg={6} md={12} sm={12}>
              <MobileLink to={`${PATHS.myCourses}/${clientCourse._id}`} onClick={disableLink}>
                <CourseItem
                  key={clientCourse.course._id}
                  title={clientCourse.course.title}
                  description={clientCourse.course.description}
                  duration={convertDurationToString(clientCourse.course.duration)}
                  lessons={clientCourse.course.lessons}
                  pageName={PAGES.myCourses}
                  status={clientCourse.status}
                  progress={countProgress(clientCourse.progress)}
                  windowWidth={windowWidth}
                  imageUrl={clientCourse.course.avatar}
                >
                  <CourseActionsBox>
                    <CourseActions>
                      <Link to={`${PATHS.myCourses}/${clientCourse._id}`}>
                        <DetailsButton variant="mediumOutlined">Details</DetailsButton>
                      </Link>
                      {clientCourse.status === COURSE_STATUSES.testing ? (
                        <Link to={`${PATHS.learnCourse}/${clientCourse._id}/test`}>
                          <ContinueTestButton color="primary" variant="mediumContained">
                            Continue the test
                          </ContinueTestButton>
                        </Link>
                      ) : clientCourse.status === COURSE_STATUSES.pending ? (
                        <ContinueTestButton disabled color="primary" variant="mediumContained">
                          Pending
                        </ContinueTestButton>
                      ) : [COURSE_STATUSES.completed, COURSE_STATUSES.successful].includes(
                          clientCourse.status,
                        ) ? (
                        <CompletedButton variant="completed" disabled>
                          Completed
                        </CompletedButton>
                      ) : clientCourse.status === COURSE_STATUSES.rejected ? (
                        <DeclinedButton clientCourse={clientCourse} />
                      ) : (
                        <Link to={`${PATHS.learnCourse}/${clientCourse._id}`}>
                          <ContinueTestButton color="primary" variant="mediumContained">
                            {COURSE_LABELS[clientCourse.status]}
                          </ContinueTestButton>
                        </Link>
                      )}
                    </CourseActions>
                  </CourseActionsBox>
                </CourseItem>
              </MobileLink>
            </GridItem>
          </Suspense>
        ))}
      </PageContainer>
    ) : (
      <NoContent message={NO_COURSES} />
    )}
  </AuthorizedLayout>
);
export default MyCoursesList;
