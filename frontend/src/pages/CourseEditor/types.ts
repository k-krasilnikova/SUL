import { ChangeEventHandler } from 'react';
import { TCourseTechnology, ICourse } from 'types/course';

export interface IFormik {
  initialValues: {
    title?: string;
    complexity?: number;
    avatar?: string;
    description?: string;
    technologies?: TCourseTechnology[];
  };
  values: {
    title?: string;
    complexity?: number;
    avatar?: string;
    description?: string;
    technologies?: TCourseTechnology[];
  };
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export interface ICourseEditorProps {
  basePath: string;
  courseData?: ICourse;
  isCourseDataLoading?: boolean;
  formik: IFormik;
}
export interface IDefinitionStepContainerProps {
  courseData?: ICourse;
  formik: IFormik;
}

export interface IDefinitionStepProps extends IDefinitionStepContainerProps {
  //   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  courseComplexity?: number | string;
}
