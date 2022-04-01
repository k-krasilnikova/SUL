import { COURSE_STATUSES } from 'constants/statuses';
import { VARIANTS } from 'constants/progressBar';
import { COMPLETED_STATUS_TEXT, FAILED_STATUS_TEXT } from 'constants/detailedCourse';

export interface ConvertedProgress {
  progressValue: number;
  progressText: string;
  progressVariant: string;
}

const convertStatusToProgress = (status?: string): ConvertedProgress => {
  let progressValue;
  let progressText;
  let progressVariant;
  switch (status) {
    case COURSE_STATUSES.started:
      progressValue = 37;
      progressText = '37%';
      progressVariant = VARIANTS.failedWithPercentage;
      break;
    case COURSE_STATUSES.testing:
      progressValue = 80;
      progressText = '80%';
      progressVariant = VARIANTS.completed;
      break;
    case COURSE_STATUSES.completed:
      progressValue = 100;
      progressText = COMPLETED_STATUS_TEXT;
      progressVariant = VARIANTS.completed;
      break;
    case COURSE_STATUSES.successful:
      progressValue = 100;
      progressText = COMPLETED_STATUS_TEXT;
      progressVariant = VARIANTS.completed;
      break;
    case COURSE_STATUSES.failed:
      progressValue = 0;
      progressText = FAILED_STATUS_TEXT;
      progressVariant = VARIANTS.failed;
      break;
    default:
      progressValue = 0;
      progressText = '0%';
      progressVariant = VARIANTS.failed;
      break;
  }
  return { progressValue, progressText, progressVariant };
};

export default convertStatusToProgress;
