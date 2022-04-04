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
import { convertDurationToString } from 'utils/helpers/convertDurationToString';
import { CustomButton } from 'components/Button/styled';
import { ButtonLabels } from 'components/Button/ButtonsEnums';
import { countProgress } from 'utils/helpers/countCourseProgress';
import { COURSE_LABELS } from 'constants/statuses';
import ActionButton from 'components/Button/ActionButton';
import { COURSE_DISABLE_DAYS } from 'constants/time';
import getCurrentPageName from 'utils/helpers/getCurentPageName';
import transformRoute from 'utils/helpers/paths/transformRoute';
import { chooseListPath } from 'utils/helpers/paths/choosePath';
import isLastElem from 'utils/helpers/arrays/isLastElem';
import { Course } from 'types/course';

import {
  PageContainer,
  CourseActions,
  GridItem,
  CourseActionsBox,
  MobileLink,
  MobileSearchWrapper,
  AddButtonWrapper,
  AddButton,
} from './styled';

interface Props {
  disableLink: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  windowWidth: string;
  lastCourseRef: (node?: Element | null) => void;
  isAdmin?: boolean;
}

type CoursesProps = ResponseDataType & Props;

const CoursesList: React.FC<CoursesProps> = ({
  courses,
  clientCourses,
  isLoading,
  handleApplyCourse,
  targetLoading,
  targetId,
  disableLink,
  windowWidth,
  lastCourseRef,
  isAdmin,
}) => (
  <AuthorizedLayout pageName="Courses List">
    {isLoading ? (
      <Loader color="primary" type={LOADER.content} />
    ) : courses?.length ? (
      <PageContainer container>
        <MobileSearchWrapper>
          <MobileSearch />
        </MobileSearchWrapper>
        {isAdmin && (
          <AddButtonWrapper>
            <Link to={PATHS.coursesList}>
              <AddButton disableElevation variant="mediumContained">
                {ButtonLabels.addWithPlus}
              </AddButton>
            </Link>
          </AddButtonWrapper>
        )}
        {courses.map((course, index) => (
          <Suspense
            key={`${course._id}_item`}
            fallback={<Loader color="primary" type={LOADER.content} />}
          >
            <GridItem key={course._id} item xl={6} lg={6} md={12} sm={12}>
              <MobileLink
                to={transformRoute(PATHS.courseDetails, course._id)}
                onClick={disableLink}
              >
                <CourseItem
                  title={course?.title}
                  description={course?.description}
                  duration={convertDurationToString(course?.duration)}
                  lessons={course?.lessons}
                  windowWidth={windowWidth}
                  pageName={getCurrentPageName()}
                  imageUrl={course?.avatar}
                  status={clientCourses && clientCourses[index].status}
                  progress={clientCourses && countProgress(clientCourses[index].progress)}
                  courseRef={isLastElem<Course>(courses, index) ? lastCourseRef : undefined}
                >
                  <CourseActionsBox key={`${course._id}_box`}>
                    <CourseActions key={`${course._id}_actions`}>
                      <Link to={chooseListPath(course, index, clientCourses)}>
                        <CustomButton color="primary" variant="mediumOutlined">
                          Details
                        </CustomButton>
                      </Link>
                      {!isAdmin &&
                        (targetLoading && targetId === course._id ? (
                          <CustomButton variant="mediumOutlined" disabled>
                            <ButtonLoader buttonSpinner={buttonSpinner} />
                          </CustomButton>
                        ) : clientCourses ? (
                          <ActionButton
                            label={COURSE_LABELS[clientCourses[index].status]}
                            status={clientCourses[index].status}
                            progress={clientCourses[index].progress}
                            applyDate={clientCourses[index].applyDate}
                            courseId={clientCourses[index]._id}
                            timeout={COURSE_DISABLE_DAYS}
                          />
                        ) : (
                          <CustomButton
                            id={course._id}
                            onClick={handleApplyCourse}
                            variant="mediumContained"
                          >
                            Apply the course
                          </CustomButton>
                        ))}
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
