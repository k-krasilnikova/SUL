import { FC } from 'react';

// import { MobileSearch } from 'components/Layout';
import PageTitle from 'components/PageTitle';
import Course from 'components/Course';
import MobileLink from 'components/MobileLink';
import NoContent from 'components/NoContent';
import CoursesFilter from 'components/CoursesFilter';
import { NO_COURSES } from 'constants/messages';
import Loader from 'components/Loader';
import { convertDurationToString } from 'utils/helpers/convertDurationToString';
import getCurrentPageName from 'utils/helpers/getCurentPageName';
import { chooseListPath } from 'utils/helpers/paths/choosePath';
import isLastElem from 'utils/helpers/arrays/isLastElem';
import { ICourse } from 'types/course';
import { Loaders } from 'enums/loader';

import { GridItem, CoursesContainer } from './styled';
import AddCourseButton from './AddCourseButton';
import CourseActions from './CourseActions';
import { ICourseProps } from './types';

const CoursesList: FC<ICourseProps> = ({
  courses,
  clientCourses,
  targetId,
  isAdmin,
  windowWidth,
  isEmptyFilters,
  isLoading,
  isFetching,
  isFetchingNextPage,
  targetLoading,
  withStatusSelect,
  lastCourseRef,
  handleApplyCourse,
}) => (
  <PageTitle title="Courses List">
    {isLoading ? (
      <Loader type={Loaders.content} />
    ) : courses?.length || !isEmptyFilters ? (
      <>
        {isAdmin && <AddCourseButton />}
        <CoursesFilter withStatusSelect={withStatusSelect} haveCourses={Boolean(courses?.length)} />
        {isFetching && !isFetchingNextPage ? (
          <Loader type={Loaders.component} />
        ) : courses?.length ? (
          <>
            <CoursesContainer container>
              {courses.map((course, index) => (
                <GridItem key={course._id} item xl={6} lg={6} md={12} sm={12}>
                  <MobileLink to={chooseListPath(course, index, clientCourses)}>
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
              ))}
            </CoursesContainer>
          </>
        ) : (
          <NoContent message={NO_COURSES} />
        )}
      </>
    ) : (
      <NoContent message={NO_COURSES} />
    )}
  </PageTitle>
);

export default CoursesList;
