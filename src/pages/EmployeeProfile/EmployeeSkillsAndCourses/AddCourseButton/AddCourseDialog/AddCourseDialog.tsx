import { FC, BaseSyntheticEvent } from 'react';

import ConfirmDialog from 'components/ConfirmDialog';
import { SIZE } from 'constants/sizes';
import { IShortCourseInfo, CoursesListType } from 'types/course';

import { CoursesList } from './CoursesList';
import { SearchInput } from './SearchInput';
import { ActionButton } from './ActionButton';
import { ContentWrapper } from './styled';

interface IProps {
  selectedCoursesList: IShortCourseInfo[];
  isOpened: boolean;
  isNoSearchResult: boolean;
  isCoursesLoading: boolean;
  isAddCourseToEmployeeLoading: boolean;
  searchInputValue: string;
  handleAddCourse: () => void;
  handleClose: () => void;
  handleSearchInputChange: (event: BaseSyntheticEvent) => void;
  handleCheckboxChange: (event: BaseSyntheticEvent) => void;
  foundedCoursesList?: IShortCourseInfo[];
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
}) => (
  <ConfirmDialog open={isOpened} onClose={handleClose} size={SIZE.large}>
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
    <ActionButton
      isDisabled={!selectedCoursesList.length || isAddCourseToEmployeeLoading}
      isLoading={isAddCourseToEmployeeLoading}
      handleClick={handleAddCourse}
    />
  </ConfirmDialog>
);

export default AddCourseDialog;
