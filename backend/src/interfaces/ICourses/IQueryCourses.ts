interface IQueryCourses {
  pageN?: number;
  title?: string;
  orderField?: string;
  order?: number | string;
  nPerPage?: number;
}

interface IProgress {
  stage: number;
  isCompleted: boolean;
}

export { IQueryCourses, IProgress };
