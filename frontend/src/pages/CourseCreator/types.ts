import { BaseSyntheticEvent } from 'react';

import { IStepProps } from 'pages/CourseEditor/types';

export interface ICourseCreatorProps extends IStepProps {
  coursesPath: string;
  ungroupedSkills: {
    [p: string]: { _id: string; maxScore: number; name: string; points: number };
  };
  onFieldBlur?: (event: BaseSyntheticEvent) => void;
  handleAddCourseAvatar?: (event: BaseSyntheticEvent) => void;
  handleChangeCorrectAnswer?: (event: BaseSyntheticEvent) => void;
  isCreateCourseMode?: boolean;
}
