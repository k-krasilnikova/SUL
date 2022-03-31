import { FC, useState, BaseSyntheticEvent } from 'react';

import { useGetPaginatedCourses } from 'api/courses';
import { useAddCourseToEmployee } from 'api/manager';
import { useDebounce, useFetchNextPage } from 'hooks';
import { Course, ICheckedCourse } from 'types/course';

import AddCourseDialog from './AddCourseDialog';

export interface IProps {
  isOpened: boolean;
  handleClose: () => void;
}

const TEST_EMPLOYEE_ID = '624563549f71553a7b7f17d2';

const AddCourseDialogContainer: FC<IProps> = ({ handleClose, ...otherProps }) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [checkedCoursesList, setCheckedCoursesList] = useState<ICheckedCourse[]>([]);

  const debouncedSearchInputValue = useDebounce(searchInputValue);

  const {
    data: coursesListResponce,
    hasNextPage,
    fetchNextPage,
    isLoading: isCoursesLoading,
  } = useGetPaginatedCourses(debouncedSearchInputValue);

  const handleDialogClose = () => {
    setSearchInputValue('');
    setCheckedCoursesList([]);
    handleClose();
  };

  const { mutate: addCourseToEmployee, isLoading: isAddCourseToEmployeeLoading } =
    useAddCourseToEmployee({
      courseId: checkedCoursesList[0]?._id,
      onSuccess: handleDialogClose,
    });

  const lastCourseRef = useFetchNextPage({ hasNextPage, fetchNextPage });

  const foundedCoursesList =
    coursesListResponce?.pages?.reduce(
      (list, currentPage) => [...list, ...currentPage?.courses],
      [] as Course[],
    ) || [];

  const isNoSearchResult =
    !foundedCoursesList.length && !!debouncedSearchInputValue.length && !isCoursesLoading;

  const handleSearchInputChange = ({ target }: BaseSyntheticEvent) => {
    setSearchInputValue(target.value.replace(/\s\s+/g, ' ').trimStart());
  };

  const handleCheckboxChange = ({ target }: BaseSyntheticEvent) => {
    if (!target.checked) {
      setCheckedCoursesList(
        checkedCoursesList.filter(
          ({ _id: checkedCourseId }) => checkedCourseId !== JSON.parse(target.value)._id,
        ),
      );
    } else {
      setCheckedCoursesList([JSON.parse(target.value)]);
    }
  };

  const handleAddCourse = () => {
    addCourseToEmployee(TEST_EMPLOYEE_ID);
  };

  return (
    <AddCourseDialog
      checkedCoursesList={checkedCoursesList}
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
