import React, { Suspense } from 'react';

import { AuthorizedLayout, MobileSearch } from 'components/Layout';
import Course from 'components/Course';
import NoContent from 'components/NoContent';
import { NO_COURSES } from 'constants/messages';
import Loader from 'components/Loader';
import { convertDurationToString } from 'utils/helpers/convertDurationToString';
import getCurrentPageName from 'utils/helpers/getCurentPageName';
import { chooseListPath } from 'utils/helpers/paths/choosePath';
import isLastElem from 'utils/helpers/arrays/isLastElem';
import { ICourse } from 'types/course';
import { ELoader } from 'enums/loader';

import { PageContainer, GridItem, MobileLink, MobileSearchWrapper } from './styled';
import AddCourseButton from './AddCourseButton';
import CourseActions from './CourseActions';
import { ICourseProps } from './types';

const CoursesList: React.FC<ICourseProps> = ({
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
      <Loader color="primary" type={ELoader.content} />
    ) : courses?.length ? (
      <PageContainer container>
        <MobileSearchWrapper>
          <MobileSearch />
        </MobileSearchWrapper>
        {isAdmin && <AddCourseButton />}
        {courses.map((course, index) => (
          <Suspense
            key={`${course._id}_item`}
            fallback={<Loader color="primary" type={ELoader.content} />}
          >
            <GridItem key={course._id} item xl={6} lg={6} md={12} sm={12}>
              <MobileLink to={chooseListPath(course, index, clientCourses)} onClick={disableLink}>
                <Course
                  title={course?.title}
                  description={course?.description}
                  duration={convertDurationToString(course?.duration)}
                  lessons={course?.lessons}
                  windowWidth={windowWidth}
                  pageName={getCurrentPageName()}
                  imageUrl={course?.avatar}
                  status={clientCourses && clientCourses[index].status}
                  courseRef={isLastElem<ICourse>(courses, index) ? lastCourseRef : undefined}
                >
                  <CourseActions
                    course={course}
                    clientCourses={clientCourses}
                    isAdmin={isAdmin}
                    index={index}
                    targetLoading={targetLoading}
                    targetId={targetId}
                    handleApplyCourse={handleApplyCourse}
                  />
                </Course>
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
