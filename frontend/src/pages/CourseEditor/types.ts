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
}

export interface ILessonsStepProps {
  formik: IFormik;
  selectOption: string;
  handleBackButtonClick?: (event: BaseSyntheticEvent) => void;
  handleChangeOption?: (event: BaseSyntheticEvent) => void;
  stageNext?: () => void;
  stageBack?: () => void;
}

export interface ILessonItemProps {
  formik: IFormik;
  selectOption: string;
  handleChangeOption?: (event: BaseSyntheticEvent) => void;
}
