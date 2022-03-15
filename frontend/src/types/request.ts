interface Course {
  _id?: string;
  title: string;
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
}

export interface IRequests {
  requestsResponse: Request[];
}
