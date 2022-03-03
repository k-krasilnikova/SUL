import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

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
import MobileSearch from 'components/Layout/MobileSearch';
import { PAGES } from 'constants/pages';

import {
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
  isFilterOpen: boolean;
  handleFilterOpen: () => void;
  handleFilterClose: () => void;
  windowWidth: string;
}

type CoursesProps = ResponseDataType & Props;

const CoursesList: React.FC<CoursesProps> = ({
  courses,
  isLoading,
  handleApplyCourse,
  targetLoading,
  targetId,
  disableLink,
  isFilterOpen,
  handleFilterOpen,
  handleFilterClose,
  windowWidth,
}) => (
  <AuthorizedLayout pageName="Courses List">
    {isLoading ? (
      <Loader color="primary" type={LOADER.content} />
    ) : courses ? (
      <Grid container>
        <MobileSearchWrapper>
          <MobileSearch
            isFilterOpen={isFilterOpen}
            handleFilterOpen={handleFilterOpen}
            handleFilterClose={handleFilterClose}
          />
        </MobileSearchWrapper>
        {courses.map((course) => (
          <Suspense
            key={`${course._id}_item`}
            fallback={<Loader color="primary" type={LOADER.content} />}
          >
            <GridItem key={course._id} item xl={6} lg={12} md={12} sm={12}>
              <MobileLink to={`${PATHS.coursesList}/${course._id}`} onClick={disableLink}>
                <CourseItem
                  title={course?.title}
                  description={course?.description}
                  duration={course?.duration}
                  lessons={course?.lessons}
                  windowWidth={windowWidth}
                  pageName={PAGES.coursesList}
                  imageUrl={course?.avatar}
                >
                  <CourseActionsBox key={`${course._id}_box`}>
                    <CourseActions key={`${course._id}_actions`}>
                      <DetailsButton color="primary" variant="mediumOutlined">
                        <Link to={`${PATHS.coursesList}/${course._id}`}>Details</Link>
                      </DetailsButton>

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
                          Start the course
                        </StartCourseButton>
                      )}
                    </CourseActions>
                  </CourseActionsBox>
                </CourseItem>
              </MobileLink>
            </GridItem>
          </Suspense>
        ))}
      </Grid>
    ) : (
      <NoContent message={NO_COURSES} />
    )}
  </AuthorizedLayout>
);

export default CoursesList;
