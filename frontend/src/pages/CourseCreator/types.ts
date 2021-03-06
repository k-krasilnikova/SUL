import { BaseSyntheticEvent, ChangeEvent, RefObject } from 'react';

import { IStepProps } from 'pages/CourseEditor/types';

export interface ICourseCreatorProps extends IStepProps {
  coursesPath: string;
  selectedSkills: { [key: string]: boolean };
  ungroupedSkills: {
    [p: string]: { _id: string; maxScore: number; name: string; points: number };
  };
  validateStep: (step: number) => boolean;
  scrollToTop: () => void;
  handleAddCourseAvatar?: (event: BaseSyntheticEvent) => void;
  handleChangeCorrectAnswer?: (event: BaseSyntheticEvent) => void;
  handleChangeDuration?: (event: ChangeEvent<HTMLInputElement>) => void;
  isCreateCourseMode?: boolean;
  courseCreatorRef?: RefObject<HTMLElement>;
}
