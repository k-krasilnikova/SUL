export interface ITechnology {
  group: string;
  achievedSkills: string[];
  isPrimary: boolean;
  _id: string;
}
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
  employees?: IEmployee[];
  isLoading?: boolean;
}

export interface IEmployeeItemProps {
  employee: IEmployee;
}
