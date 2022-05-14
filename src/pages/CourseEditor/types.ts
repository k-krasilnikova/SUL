import { ChangeEventHandler, BaseSyntheticEvent } from 'react';

import { TCourseTechnology, IMaterial, ICourse } from 'types/course';

export interface IFormik {
  initialValues: {
    technologies: TCourseTechnology[];
    title?: string;
    complexity?: number;
    avatar?: string;
    description?: string;
    materials: IMaterial[];
    videoURL?: string;
    textDescription?: string;
    exerciseTitle?: string;
    exerciseDescription?: string;
    testTitle?: string;
    testDuration?: string;
    testQuestion?: string;
    testAnswer?: string;
  };
  values: {
    technologies: TCourseTechnology[];
    title?: string;
    complexity?: number;
    avatar?: string;
    description?: string;
    materials: IMaterial[];
    videoURL?: string;
    textDescription?: string;
    exerciseTitle?: string;
    exerciseDescription?: string;
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

export interface ILessonsStepContainerProps {
  formik: IFormik;
  courseData?: ICourse;
}

export interface ITestStepContainerProps {
  formik: IFormik;
}

export interface ITestStepProps {
  formik: IFormik;
  isCurrentAnswer: string;
  handleChangeAnswer?: (event: BaseSyntheticEvent) => void;
}

export interface ILessonsStepProps extends ILessonsStepContainerProps {
  formik: IFormik;
  selectOption: string;
  handleChangeOption?: (event: BaseSyntheticEvent) => void;
}

export interface ILessonItemProps {
  formik: IFormik;
  selectOption: string;
  handleChangeOption?: (event: BaseSyntheticEvent) => void;
  material?: IMaterial;
}

export interface ITestItemProps {
  formik: IFormik;
  isCurrentAnswer: string;
  handleChangeAnswer?: (event: BaseSyntheticEvent) => void;
}
