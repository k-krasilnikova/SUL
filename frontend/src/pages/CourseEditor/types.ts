import { ChangeEventHandler } from 'react';

import { TCourseTechnology, ICourse } from 'types/course';

export interface IFormik {
  initialValues: {
    technologies: TCourseTechnology[];
    title?: string;
    complexity?: number;
    avatar?: string;
    description?: string;
  };
  values: {
    technologies: TCourseTechnology[];
    title?: string;
    complexity?: number;
    avatar?: string;
    description?: string;
  };
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export interface ICourseEditorProps {
  basePath: string;
  formik: IFormik;
  courseData?: ICourse;
  isCourseDataLoading?: boolean;
}
export interface IStepProps {
  formik: IFormik;
  courseData?: ICourse;
}
export interface ISkillsStepProps extends IStepProps {
  ungroupedSkills: {
    [key: string]: { group: string; image: string; maxScore: number; name: string; _id: string };
  };
}
