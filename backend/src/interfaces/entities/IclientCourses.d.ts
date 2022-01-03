interface IClientCourse {
  _id?: string;
  status: TCourseStatus;
  progress: number;
  canceled: boolean;
}

type TCourseStatus = 'pending' | 'approved' | 'started' | 'completed' | 'failed';

export { IClientCourse };
