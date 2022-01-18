interface IQueryCourses {
  pageN?: number;
  title?: string;
  orderField?: string;
  order?: number;
  nPerPage?: number;
}

interface IProgress {
  stage: number;
  isCompleted: boolean;
}

export { IQueryCourses, IProgress };
