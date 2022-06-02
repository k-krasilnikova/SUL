import { FC } from 'react';

import { Dialog } from 'components/Dialogs';
import { Size } from 'enums/sizes';
import { CoursesListType } from 'types/course';
import { IAddCourseDialogProps } from 'pages/EmployeeProfile/types';

import CoursesList from './CoursesList';
import SearchInput from './SearchInput';
import ActionButtons from './ActionButtons';
import { ContentWrapper } from './styled';

const AddCourseDialog: FC<IAddCourseDialogProps> = ({
  selectedCoursesList,
  foundedCoursesList,
  isNoSearchResult,
  isCoursesLoading,
  isAddCourseToEmployeeLoading,
  isOpened,
  searchInputValue,
  addCoursesToEmployeeMutate,
  handleClose,
  handleSearchInputChange,
  handleCheckboxChange,
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
    <ActionButtons
      isDisabled={!selectedCoursesList.length || isAddCourseToEmployeeLoading}
      isLoading={isAddCourseToEmployeeLoading}
      addCoursesToEmployeeMutate={addCoursesToEmployeeMutate}
    />
  </Dialog>
);

export default AddCourseDialog;
