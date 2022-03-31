export interface IEmployee {
  _id: string;
  firstName: string;
  lastName: string;
  position: string;
  group: string;
  rank: number;
  stack: { name: string }[];
  avatar: string;
  skype: string;
  phone: string;
}

export interface IEmployees {
  employeesResponse: IEmployee[];
}

export interface IEmployeesProps {
  handleNavigate: (_id: string) => void;
  employees?: IEmployee[];
  isLoading?: boolean;
}
