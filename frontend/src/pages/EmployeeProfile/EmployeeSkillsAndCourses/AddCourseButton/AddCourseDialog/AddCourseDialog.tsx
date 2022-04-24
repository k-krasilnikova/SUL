import { FC, BaseSyntheticEvent } from 'react';

import { Dialog } from 'components/Dialogs';
import { Size } from 'enums/sizes';
import { TCheckedCourse, CoursesListType, ICourse } from 'types/course';

import { CoursesList } from './CoursesList';
import { SearchInput } from './SearchInput';
import { ActionButton } from './ActionButton';
import { ContentWrapper } from './styled';

interface IProps {
  selectedCoursesList: TCheckedCourse[];
  foundedCoursesList: ICourse[];
  isOpened: boolean;
  isNoSearchResult: boolean;
  isCoursesLoading: boolean;
  isAddCourseToEmployeeLoading: boolean;
  searchInputValue: string;
  handleAddCourse: () => void;
  handleClose: () => void;
  handleSearchInputChange: (event: BaseSyntheticEvent) => void;
  handleCheckboxChange: (event: BaseSyntheticEvent) => void;
  lastCourseRef: (node?: Element | null) => void;
}

const AddCourseDialog: FC<IProps> = ({
  selectedCoursesList,
  foundedCoursesList,
  isNoSearchResult,
  isCoursesLoading,
  isAddCourseToEmployeeLoading,
  isOpened,
  searchInputValue,
  handleAddCourse,
  handleClose,
  handleSearchInputChange,
  handleCheckboxChange,
  lastCourseRef,
}) => (
  <Dialog open={isOpened} onClose={handleClose} size={Size.large}>
    <ContentWrapper>
      <SearchInput
        isNoResult={isNoSearchResult}
        value={searchInputValue}
        handleChange={handleSearchInputChange}
      />
      <CoursesList
        type={CoursesListType.COURSES}
        courses={foundedCoursesList}
        checkedCourses={selectedCoursesList}
        isCoursesLoading={isCoursesLoading}
        lastCourseRef={lastCourseRef}
        handleCheckboxChange={handleCheckboxChange}
      />
      <CoursesList
        withUpperLine
        type={CoursesListType.CHECKED_COURSES}
        courses={selectedCoursesList}
        checkedCourses={selectedCoursesList}
        handleCheckboxChange={handleCheckboxChange}
      />
    </ContentWrapper>
    <ActionButton
      isDisabled={!selectedCoursesList.length || isAddCourseToEmployeeLoading}
      isLoading={isAddCourseToEmployeeLoading}
      handleClick={handleAddCourse}
    />
  </Dialog>
);

export default AddCourseDialog;
