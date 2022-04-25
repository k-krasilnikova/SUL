import { IClientCourse } from 'types/clientCourse';
import { IMaterial, TContentElement, TCourseInfo } from 'types/course';

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
  handleStageBack: () => void;
  handleStageForward: () => void;
  toggleCourseInfoOpen: () => void;
  clientCourse?: IClientCourse;
}
