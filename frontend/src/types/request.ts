interface Course {
  title: string;
  avatar: string;
  _id?: string;
}

interface User {
  _id?: string;
  avatar: string;
  firstName: string;
  lastName: string;
  position: string;
}

export interface Request {
  _id: string;
  status: string;
  course: Course;
  user: User;
  elapsed: {
    days: number;
    hours: number;
    minutes: number;
  };
}

export interface IRequests {
  requestsResponse: Request[];
}
