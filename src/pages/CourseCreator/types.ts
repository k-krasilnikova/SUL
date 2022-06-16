import { BaseSyntheticEvent, RefObject } from 'react';

import { IStepProps } from 'pages/CourseEditor/types';

export interface ICourseCreatorProps extends IStepProps {
  ungroupedSkills: {
    [p: string]: { _id: string; maxScore: number; name: string; points: number };
  };
  scrollToTop: () => void;
  onFieldBlur?: (event: BaseSyntheticEvent) => void;
  handleAddCourseAvatar?: (event: BaseSyntheticEvent) => void;
  handleChangeCorrectAnswer?: (event: BaseSyntheticEvent) => void;
  isCreateCourseMode?: boolean;
  courseCreatorRef?: RefObject<HTMLElement>;
}
