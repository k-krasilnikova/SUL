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

export interface IRequestsProps {
  approveRequest: (requestId: string) => void;
  approveLoading: boolean;
  declineRequest: (requestId: string) => void;
  declineLoading: boolean;
  requests?: Request[];
  isLoading?: boolean;
  targetId?: string;
}

export interface IRequest {
  request: Request;
  approveRequest: (requestId: string) => void;
  approveLoading: boolean;
  declineRequest: (requestId: string) => void;
  declineLoading: boolean;
  elapsed?: {
    days: number;
    hours: number;
    minutes: number;
  };
  isTargetRequest?: boolean;
  status?: string;
}
