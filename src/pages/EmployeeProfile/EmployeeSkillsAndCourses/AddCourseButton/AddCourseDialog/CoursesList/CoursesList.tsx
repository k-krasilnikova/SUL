import { FC, BaseSyntheticEvent } from 'react';

import { LOADER } from 'constants/loaderTypes';
import { IShortCourseInfo, CoursesListType } from 'types/course';
import Loader from 'components/Loader';

import { CourseItem } from './CourseItem';
import { StyledList, StyledHorizontalLine } from './styled';

interface IProps {
  checkedCourses: IShortCourseInfo[];
  type: CoursesListType;
  handleCheckboxChange: (event: BaseSyntheticEvent) => void;
  courses?: IShortCourseInfo[];
  isCoursesLoading?: boolean;
  withUpperLine?: boolean;
}

const CoursesList: FC<IProps> = ({
  courses,
  checkedCourses,
  type,
  handleCheckboxChange,
  isCoursesLoading,
  withUpperLine,
}) => (
  <>
    {withUpperLine && !!checkedCourses.length && <StyledHorizontalLine />}
    <StyledList type={type}>
      {isCoursesLoading ? (
        <Loader color="primary" type={LOADER.component} />
      ) : (
        <>
          {courses?.map(({ _id: courseId, title }) => {
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
