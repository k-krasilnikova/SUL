import { FC, useState, BaseSyntheticEvent } from 'react';
import { useParams } from 'react-router';

import { useGetAvailableCourses } from 'api/courses';
import { useAddCourseToEmployee } from 'api/manager';
import { useDebounce } from 'hooks';
import { IShortCourseInfo } from 'types/course';
import { formatInputValue } from 'utils/helpers/searchHelpers';
import { IAddCourseDialogContainerProps } from 'pages/EmployeeProfile/types';

import AddCourseDialog from './AddCourseDialog';

const AddCourseDialogContainer: FC<IAddCourseDialogContainerProps> = ({
  handleClose,
  ...props
}) => {
  const { employeeId } = useParams();

  const [searchInputValue, setSearchInputValue] = useState('');
  const [selectedCoursesList, setSelectedCoursesList] = useState<IShortCourseInfo[]>([]);

  const debouncedSearchInputValue = useDebounce(searchInputValue);

  const {
    data: coursesListResponse,
    isLoading: isCoursesLoading,
    isFetching: isCoursesFetching,
  } = useGetAvailableCourses(employeeId, debouncedSearchInputValue);

  const handleDialogClose = () => {
    setSearchInputValue('');
    setSelectedCoursesList([]);
    handleClose();
  };

  const { mutate: addCoursesToEmployeeMutate, isLoading: isAddCoursesToEmployeeLoading } =
    useAddCourseToEmployee({
      courseIdsList: selectedCoursesList.map(({ _id }) => ({
        courseId: _id,
      })),
      employeeId,
      onSuccess: handleDialogClose,
    });

  const isNoSearchResult =
    !coursesListResponse?.length &&
    !!debouncedSearchInputValue.length &&
    !isCoursesLoading &&
    !isCoursesFetching;

  const handleSearchInputChange = ({ target }: BaseSyntheticEvent) => {
    setSearchInputValue(formatInputValue(target.value));
  };

  const handleCheckboxChange = ({ target }: BaseSyntheticEvent) => {
    if (!target.checked) {
      setSelectedCoursesList(
        selectedCoursesList.filter(
          ({ _id: checkedCourseId }) => checkedCourseId !== JSON.parse(target.value)._id,
        ),
      );
    } else {
      setSelectedCoursesList([...selectedCoursesList, JSON.parse(target.value)]);
    }
  };

  return (
    <AddCourseDialog
      selectedCoursesList={selectedCoursesList}
      foundedCoursesList={coursesListResponse}
      isAddCourseToEmployeeLoading={isAddCoursesToEmployeeLoading}
      isCoursesLoading={isCoursesLoading || isCoursesFetching}
      isNoSearchResult={isNoSearchResult}
      searchInputValue={searchInputValue}
      addCoursesToEmployeeMutate={addCoursesToEmployeeMutate}
      handleClose={handleDialogClose}
      handleCheckboxChange={handleCheckboxChange}
      handleSearchInputChange={handleSearchInputChange}
      {...props}
    />
  );
};

export default AddCourseDialogContainer;
