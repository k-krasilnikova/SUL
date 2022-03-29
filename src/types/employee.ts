export interface ITechnology {
  group: string;
  achievedSkills: string[];
  isPrimary: boolean;
  _id: string;
}

export interface IEmployee {
  _id: string;
  username: string;
  passwordHash: string;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  position: string;
  technologies: ITechnology[];
  group: string;
  employees: IEmployee[];
  pendingCourses: [];
  avatar: string;
  birthday: string;
  skype: string;
  phone: string;
  managerId: string;
  refreshToken: string;
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
