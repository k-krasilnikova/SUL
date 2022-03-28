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
  lastClientCourseRef: (node?: Element | null) => void;
}

type MyCoursesProps = ResponseDataMyCourses & Props;

const MyCoursesList: React.FC<MyCoursesProps> = ({
  clientCourses,
  isLoading,
  disableLink,
  windowWidth,
  lastClientCourseRef,
}) => (
  <AuthorizedLayout pageName="My Courses">
    {isLoading ? (
      <Loader color="primary" type={LOADER.content} />
    ) : clientCourses?.length ? (
      <PageContainer container>
        <MobileSearchWrapper>
          <MobileSearch />
        </MobileSearchWrapper>
        {clientCourses?.map((clientCourse, index) => (
          <Suspense
            key={`${clientCourse.course._id}_item`}
            fallback={<Loader color="primary" type={LOADER.content} />}
          >
            <GridItem key={clientCourse._id} item xl={6} lg={6} md={12} sm={12}>
              <MobileLink to={`${PATHS.myCourses}/${clientCourse._id}`} onClick={disableLink}>
                <CourseItem
                  title={clientCourse.course.title}
                  description={clientCourse.course.description}
                  duration={convertDurationToString(clientCourse.course.duration)}
                  lessons={clientCourse.course.lessons}
                  pageName={PAGES.myCourses}
                  status={clientCourse.status}
                  windowWidth={windowWidth}
                  imageUrl={clientCourse.course.avatar}
                  courseRef={clientCourses.length - 1 === index ? lastClientCourseRef : undefined}
                >
                  <CourseActionsBox key={`${clientCourse._id}_box`}>
                    <CourseActions key={`${clientCourse._id}_actions`}>
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
                      ) : clientCourse.status === COURSE_STATUSES.assessment ? (
                        <ContinueTestButton disabled color="primary" variant="mediumContained">
                          Assessment
                        </ContinueTestButton>
                      ) : clientCourse.status === COURSE_STATUSES.failed ? (
                        <ContinueTestButton disabled color="primary" variant="mediumContained">
                          Failed
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
