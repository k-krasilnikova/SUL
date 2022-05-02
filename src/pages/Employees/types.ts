import { ReactNode, BaseSyntheticEvent } from 'react';

import { COLUMNS_SIZE_CONFIGURATION, TABLE_CONFIGURATION } from 'constants/employeesPage';
import { EmployeeContentType } from 'enums/employee';
import { IEmployee } from 'types/employee';

export type TColumnLabel = keyof typeof COLUMNS_SIZE_CONFIGURATION;
export type TWindowSize = keyof typeof TABLE_CONFIGURATION;
export type TTableConfig = Record<'visibleColumnLabels' | 'hiddenColumnLabels', TColumnLabel[]>;

export interface IEmployeesProps {
  employees?: IEmployee[];
  isLoading?: boolean;
}
export interface IEmployeeItemContainerProps {
  employee: IEmployee;
  visibleColumnLabels: TColumnLabel[];
  hiddenColumnLabels: TColumnLabel[];
}
export interface IEmployeeItemProps extends IEmployeeItemContainerProps {
  isVisibleContent: boolean;
  handleShowButtonClick: (event: BaseSyntheticEvent) => void;
}

export interface IEmployeeContentContainerProps {
  employee: IEmployee;
  config: TColumnLabel[];
  type?: EmployeeContentType;
  isVisible?: IEmployeeItemProps['isVisibleContent'];
  handleShowButtonClick?: IEmployeeItemProps['handleShowButtonClick'];
}
export interface IEmployeeContentProps extends IEmployeeContentContainerProps {
  handleUserInfoClick: () => void;
}
export interface IEmployeesListContainerProps {
  employees?: IEmployee[];
}
export interface IEmployeesListProps extends IEmployeesListContainerProps {
  windowSize: TWindowSize;
}

export interface IContentGridContainerProps {
  children: ReactNode;
  contentType?: EmployeeContentType;
  isVisible?: boolean;
}
export interface IContentGridProps extends IContentGridContainerProps {
  contentHeight?: number;
}
export interface IContentColumnProps {
  columnName: TColumnLabel;
}

export interface IStyledGridProps {
  isVisible?: IContentGridContainerProps['isVisible'];
  contentHeight?: IContentGridProps['contentHeight'];
  contentType?: EmployeeContentType;
}
export interface IStyledExpandMoreIconProps {
  isVisible: IContentGridContainerProps['isVisible'];
}
