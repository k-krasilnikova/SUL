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
import { LOADER } from 'constants/loaderTypes';
import { MobileSearch } from 'components/Layout/MobileSearch';
import { PAGES } from 'constants/pages';

import {
  PageContainer,
  CourseActions,
  GridItem,
  CourseActionsBox,
  DetailsButton,
  StartCourseButton,
  MobileLink,
  MobileSearchWrapper,
} from './styled';

interface Props {
  disableLink: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  windowWidth: string;
  lastCourseRef: (node?: Element | null) => void;
}

type CoursesProps = ResponseDataType & Props;

const CoursesList: React.FC<CoursesProps> = ({
  courses,
  isLoading,
  handleApplyCourse,
  targetLoading,
  targetId,
  disableLink,
  windowWidth,
  lastCourseRef,
}) => (
  <AuthorizedLayout pageName="Courses List">
    {isLoading ? (
      <Loader color="primary" type={LOADER.content} />
    ) : courses?.length ? (
      <PageContainer container>
        <MobileSearchWrapper>
          <MobileSearch />
        </MobileSearchWrapper>
        {courses.map((course, index) => (
          <Suspense
            key={`${course._id}_item`}
            fallback={<Loader color="primary" type={LOADER.content} />}
          >
            <GridItem key={course._id} item xl={6} lg={6} md={12} sm={12}>
              <MobileLink to={`${PATHS.coursesList}/${course._id}`} onClick={disableLink}>
                <CourseItem
                  title={course?.title}
                  description={course?.description}
                  duration={course?.duration}
                  lessons={course?.lessons}
                  windowWidth={windowWidth}
                  pageName={PAGES.coursesList}
                  imageUrl={course?.avatar}
                  courseRef={courses.length - 1 === index ? lastCourseRef : undefined}
                >
                  <CourseActionsBox key={`${course._id}_box`}>
                    <CourseActions key={`${course._id}_actions`}>
                      <Link to={`${PATHS.coursesList}/${course._id}`}>
                        <DetailsButton color="primary" variant="mediumOutlined">
                          Details
                        </DetailsButton>
                      </Link>
                      {targetLoading && targetId === course._id ? (
                        <StartCourseButton variant="mediumOutlined" disabled>
                          <ButtonLoader buttonSpinner={buttonSpinner} />
                        </StartCourseButton>
                      ) : (
                        <StartCourseButton
                          id={course._id}
                          onClick={handleApplyCourse}
                          variant="mediumContained"
                        >
                          Apply the course
                        </StartCourseButton>
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

export default CoursesList;
