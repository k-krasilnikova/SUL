import { IClientCourse } from 'types/clientCourse';
import { IExercise, IMaterial, TContentElement, TCourseInfo } from 'types/course';
import { TMaterialVariants } from 'types/materials';

export interface ILearningProps {
  stage: number;
  maxStage: number;
  isBackDisabled: boolean;
  isForwardDisabled: boolean;
  isCourseInfoOpen: boolean;
  isTestEnabled: boolean;
  isLoading: boolean;
  courseInfo: TCourseInfo;
  courseMaterial: IMaterial;
  courseContent: TContentElement;
  myCoursesPath: string;
  handleStageBack: () => void;
  handleStageForward: () => void;
  toggleCourseInfoOpen: () => void;
  clientCourse?: IClientCourse;
}

export interface IExerciseProps {
  courseExercise: IExercise;
  isCourseInfoOpen: boolean;
}

export interface IMaterialProps {
  material: string;
  materialType: TMaterialVariants;
  videoPreview: string | boolean;
}

export type TStageControllerProps = Pick<
  ILearningProps,
  | 'stage'
  | 'maxStage'
  | 'isBackDisabled'
  | 'isForwardDisabled'
  | 'handleStageBack'
  | 'handleStageForward'
>;
