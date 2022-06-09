import { BaseSyntheticEvent, ChangeEvent } from 'react';
import { IStepProps } from '../CourseEditor/types';
import { ISkillsListProps } from '../../types/skill';

export interface ICourseCreatorContainer {
  page?: string;
}

export interface ICourseCreatorProps extends IStepProps {
  isCourseDataLoading?: boolean;
  courseDateCreateCourse?: ISkillsListProps[];
  handleChangeTechnology?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFieldBlur?: (event: BaseSyntheticEvent) => void;
  handleAddCourseAvatar?: (event: BaseSyntheticEvent) => void;
  handleChangeCorrectAnswer?: (event: BaseSyntheticEvent) => void;
  isCreateCourseMode?: boolean;
  unGroupedSkills: {
    [p: string]: { _id: string; maxScore: number; name: string; points: number };
  };
  useCourseModeChange?: boolean;
}
