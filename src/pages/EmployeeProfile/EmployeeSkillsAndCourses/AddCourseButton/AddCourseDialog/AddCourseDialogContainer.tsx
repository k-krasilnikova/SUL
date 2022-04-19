import { FC, useState, BaseSyntheticEvent } from 'react';
import { useParams } from 'react-router';

import { useGetPaginatedCourses } from 'api/courses';
import { useAddCourseToEmployee } from 'api/manager';
import { useDebounce, useFetchNextPage } from 'hooks';
import { ICourse, ICheckedCourse } from 'types/course';
import { formatInputValue } from 'utils/helpers/searchHelpers';

import AddCourseDialog from './AddCourseDialog';

export interface IProps {
  isOpened: boolean;
  handleClose: () => void;
}

const AddCourseDialogContainer: FC<IProps> = ({ handleClose, ...otherProps }) => {
  const { employeeId } = useParams();

  const [searchInputValue, setSearchInputValue] = useState('');
  const [selectedCoursesList, setSelectedCoursesList] = useState<ICheckedCourse[]>([]);

  const debouncedSearchInputValue = useDebounce(searchInputValue);

  const {
    data: coursesListResponse,
    hasNextPage,
    fetchNextPage,
    isLoading: isCoursesLoading,
  } = useGetPaginatedCourses(debouncedSearchInputValue);

  const handleDialogClose = () => {
    setSearchInputValue('');
    setSelectedCoursesList([]);
    handleClose();
  };

  const { mutate: addCourseToEmployee, isLoading: isAddCourseToEmployeeLoading } =
    useAddCourseToEmployee({
      courseIdsList: selectedCoursesList.map(({ _id }) => ({
        courseId: _id,
      })),
      onSuccess: handleDialogClose,
    });

  const lastCourseRef = useFetchNextPage({ hasNextPage, fetchNextPage });

  const foundedCoursesList =
    coursesListResponse?.pages?.reduce(
      (list, currentPage) => [...list, ...currentPage?.courses],
      [] as ICourse[],
    ) || [];

  const isNoSearchResult =
    !foundedCoursesList.length && !!debouncedSearchInputValue.length && !isCoursesLoading;

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

  const handleAddCourse = () => {
    addCourseToEmployee(employeeId);
  };

  return (
    <AddCourseDialog
      selectedCoursesList={selectedCoursesList}
      foundedCoursesList={foundedCoursesList}
      isAddCourseToEmployeeLoading={isAddCourseToEmployeeLoading}
      isCoursesLoading={isCoursesLoading}
      isNoSearchResult={isNoSearchResult}
      searchInputValue={searchInputValue}
      lastCourseRef={lastCourseRef}
      handleAddCourse={handleAddCourse}
      handleClose={handleDialogClose}
      handleCheckboxChange={handleCheckboxChange}
      handleSearchInputChange={handleSearchInputChange}
      {...otherProps}
    />
  );
};

export default AddCourseDialogContainer;
