import { FC, BaseSyntheticEvent } from 'react';

import { ICourse, CoursesListType, TCheckedCourse } from 'types/course';
import Loader from 'components/Loader';
import { Loaders } from 'enums/loader';

import { CourseItem } from './CourseItem';
import { StyledList, StyledHorizontalLine } from './styled';

interface IProps {
  courses: ICourse[] | TCheckedCourse[];
  checkedCourses: TCheckedCourse[];
  type: CoursesListType;
  handleCheckboxChange: (event: BaseSyntheticEvent) => void;
  isCoursesLoading?: boolean;
  withUpperLine?: boolean;
  lastCourseRef?: (node?: Element | null) => void;
}

const CoursesList: FC<IProps> = ({
  courses,
  checkedCourses,
  type,
  handleCheckboxChange,
  isCoursesLoading,
  withUpperLine,
  lastCourseRef,
}) => (
  <>
    {withUpperLine && !!checkedCourses.length && <StyledHorizontalLine />}
    <StyledList type={type}>
      {isCoursesLoading ? (
        <Loader color="primary" type={Loaders.component} />
      ) : (
        <>
          {courses.map(({ _id: courseId, title }, courseIndex) => {
            const courseRef = courses.length - 1 === courseIndex ? lastCourseRef : undefined;

            const isChecked = Boolean(
              checkedCourses.find(({ _id: checkedCourseId }) => checkedCourseId === courseId),
            );
            const checkboxValue = JSON.stringify({ _id: courseId, title });

            return (
              <CourseItem
                key={courseId}
                checkboxValue={checkboxValue}
                isChecked={isChecked}
                title={title}
                courseRef={courseRef}
                handleCheckboxChange={handleCheckboxChange}
              />
            );
          })}
        </>
      )}
    </StyledList>
  </>
);

export default CoursesList;
