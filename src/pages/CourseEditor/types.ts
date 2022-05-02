import { ICourse } from 'types/course';

export interface IDefinitionStepContainerProps {
  courseData?: ICourse;
}

export interface IDefinitionStepProps extends IDefinitionStepContainerProps {
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  courseComplexity?: number | string;
}
