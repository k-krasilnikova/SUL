import { ChangeEventHandler, BaseSyntheticEvent } from 'react';

import { TCourseTechnology, IMaterial, ICourse } from 'types/course';

export interface IFormik {
  initialValues: {
    technologies: TCourseTechnology[];
    materials: IMaterial[];
    title?: string;
    complexity?: number;
    avatar?: string;
    description?: string;
    testTitle?: string;
    testDuration?: string;
    testQuestion?: string;
    testAnswer?: string;
  };
  values: {
    technologies: TCourseTechnology[];
    materials: IMaterial[];
    title?: string;
    complexity?: number;
    avatar?: string;
    description?: string;
    testTitle?: string;
    testDuration?: string;
    testQuestion?: string;
    testAnswer?: string;
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

export interface ITestStepContainerProps {
  formik: IFormik;
}

export interface ITestStepProps {
  formik: IFormik;
  isCurrentAnswer: string;
  handleChangeAnswer?: (event: BaseSyntheticEvent) => void;
}

export interface ILessonsStepProps extends IStepProps {
  formik: IFormik;
  lessonsContent: {
    [index: number]: { type: string; material: string };
  };
  selectOption: string;
  handleChangeOption?: (event: BaseSyntheticEvent) => void;
}

export interface ILessonItemProps {
  formik: IFormik;
  material: IMaterial;
  lessonsContent: {
    [index: number]: { type: string; material: string };
  };
  index: number;
  selectOption: string;
  handleChangeOption?: (event: BaseSyntheticEvent) => void;
}

export interface ITestItemProps {
  formik: IFormik;
  isCurrentAnswer: string;
  handleChangeAnswer?: (event: BaseSyntheticEvent) => void;
}
