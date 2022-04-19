import { ISkill } from 'types/skill';
import { ITestResult } from 'types/test';
import { ConvertedProgress } from 'utils/helpers/convertCourseStatusToProgress';

export interface ITestResultPageProps {
  isLoading: boolean;
  progressBarData: ConvertedProgress;
  responseData?: ITestResult;
  status?: string;
  isFailed?: boolean;
  skills?: ISkill[];
  percentageValue?: number;
  courseId?: string;
  assessment?: boolean;
}
