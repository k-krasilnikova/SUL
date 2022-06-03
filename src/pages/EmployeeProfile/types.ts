import { BaseSyntheticEvent } from 'react';
import { UseMutateFunction } from 'react-query';
import { AxiosError } from 'axios';
import { ButtonProps as IMuiButtonProps } from '@mui/material';

import { ButtonLabels } from 'constants/ButtonLabels';
import { EmployeeInfo } from 'enums/employee';
import { IShortCourseInfo } from 'types/course';
import { IClientCourse } from 'types/clientCourse';
import { IEmployee } from 'types/employee';

export interface IEmployeeProfileProps {
  employeeInfo: EmployeeInfo;
  toggleEmployeeInfo: (infoToOpen: EmployeeInfo) => void;
  toggleHover: (buttonHovered: string) => void;
  isSkillOpened: boolean;
  isCourseOpened: boolean;
  employeeCourses?: IClientCourse[];
  employee?: IEmployee;
}

export interface IAddCourseButtonProps {
  isAddCourseDialogOpen: boolean;
  toggleAddCourseDiaologOpen: () => void;
}

export interface IAddCourseDialogContainerProps {
  isOpened: IAddCourseButtonProps['isAddCourseDialogOpen'];
  handleClose: IAddCourseButtonProps['toggleAddCourseDiaologOpen'];
}

export interface IAddCourseDialogProps extends IAddCourseDialogContainerProps {
  selectedCoursesList: IShortCourseInfo[];
  isNoSearchResult: boolean;
  isCoursesLoading: boolean;
  isAddCourseToEmployeeLoading: boolean;
  searchInputValue: string;
  addCoursesToEmployeeMutate: UseMutateFunction<unknown, AxiosError, boolean>;
  handleSearchInputChange: (event: BaseSyntheticEvent) => void;
  handleCheckboxChange: (event: BaseSyntheticEvent) => void;
  foundedCoursesList?: IShortCourseInfo[];
}

export interface IActionButtonsContainerProps {
  isDisabled: boolean;
  isLoading: IAddCourseDialogProps['isAddCourseToEmployeeLoading'];
  addCoursesToEmployeeMutate: IAddCourseDialogProps['addCoursesToEmployeeMutate'];
}

type TButtonProps = Pick<IActionButtonsContainerProps, 'isDisabled' | 'isLoading'>;

export interface IActionButtonsProps extends TButtonProps {
  handleAddCoursesWithAssessment: () => void;
  handleAddCourses: () => void;
}

export interface IActionButtonProps extends TButtonProps, IMuiButtonProps {
  label: ButtonLabels;
}
