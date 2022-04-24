import { IEmployee } from 'types/employee';

export interface IEmployeesProps {
  handleNavigate: (_id: string) => void;
  employees?: IEmployee[];
  isLoading?: boolean;
}
