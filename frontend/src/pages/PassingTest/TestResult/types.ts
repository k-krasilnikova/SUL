import { ISkill } from 'types/skill';
import { ITestResult } from 'types/test';
import { ConvertedProgress } from 'utils/helpers/convertCourseStatusToProgress';

export interface ITestResultPageProps {
  responseData: ITestResult | undefined;
  status?: string;
  isFailed?: boolean;
  skills?: ISkill[];
  percentageValue?: number;
  courseId?: string;
  assessment?: boolean;
  isLoading: boolean;
  progressBarData: ConvertedProgress;
}
