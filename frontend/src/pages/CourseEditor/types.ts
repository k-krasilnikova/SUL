import { ChangeEventHandler, BaseSyntheticEvent } from 'react';

import { TCourseTechnology, ICourse } from 'types/course';

export interface IFormik {
  initialValues: {
    technologies: TCourseTechnology[];
    title?: string;
    complexity?: number;
    avatar?: string;
    description?: string;
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
  handleAddMoreLessons?: (event: BaseSyntheticEvent) => void;
  isAddMoreLessons?: boolean;
}

export interface ITestStepContainerProps {
  formik: IFormik;
}

export interface ITestStepProps {
  formik: IFormik;
  isCurrentAnswer: string;
  handleChangeAnswer?: (event: BaseSyntheticEvent) => void;
}

export interface ILessonsStepProps {
  formik: IFormik;
  selectOption: string;
  handleChangeOption?: (event: BaseSyntheticEvent) => void;
  handleAddMoreLessons?: (event: BaseSyntheticEvent) => void;
  isAddMoreLessons?: boolean;
}

export interface ILessonItemProps {
  formik: IFormik;
  selectOption: string;
  handleChangeOption?: (event: BaseSyntheticEvent) => void;
  isAddMoreLessons?: boolean;
}

export interface ITestItemProps {
  formik: IFormik;
  isCurrentAnswer: string;
  handleChangeAnswer?: (event: BaseSyntheticEvent) => void;
}
