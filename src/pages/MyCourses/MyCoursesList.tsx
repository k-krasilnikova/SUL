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
import { COURSE_STATUSES } from 'constants/statuses';
import { countProgress } from 'utils/helpers/countCourseProgress';
import { PAGES } from 'constants/pages';

import {
  PageContainer,
  CourseActions,
  GridItem,
  CourseActionsBox,
  DetailsButton,
  StartCourseButton,
  MobileLink,
  ContinueTestButton,
} from './styled';

interface Props {
  disableLink: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

type MyCoursesProps = ResponseDataMyCourses & Props;

const MyCoursesList: React.FC<MyCoursesProps> = ({ clientCourses, isLoading, disableLink }) => (
  <AuthorizedLayout pageName="My Courses">
    {isLoading ? (
      <Loader color="primary" type={LOADER.content} />
    ) : clientCourses?.length ? (
      <PageContainer container>
        {clientCourses?.map((clientCourse) => (
          <Suspense
            key={clientCourse._id}
            fallback={<Loader color="primary" type={LOADER.content} key={clientCourse._id} />}
          >
            <GridItem item xl={6} lg={12} md={12} sm={12}>
              <MobileLink
                to={`${PATHS.myCourses}/${clientCourse._id}`}
                onClick={(event) => {
                  disableLink(event);
                }}
              >
                <CourseItem
                  key={clientCourse.course._id}
                  title={clientCourse.course.title}
                  description={clientCourse.course.description}
                  duration={clientCourse.course.duration}
                  lessons={clientCourse.course.lessons}
                  pageName={PAGES.myCourses}
                  status={clientCourse.status}
                  progress={countProgress(clientCourse.progress)}
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
                        <StartCourseButton disabled color="primary" variant="mediumContained">
                          Pending
                        </StartCourseButton>
                      ) : (
                        <Link to={`${PATHS.learnCourse}/${clientCourse._id}`}>
                          <StartCourseButton color="primary" variant="mediumContained">
                            Start the course
                          </StartCourseButton>
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
