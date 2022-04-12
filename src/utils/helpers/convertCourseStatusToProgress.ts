import { COURSE_STATUSES } from 'constants/statuses';
import { VARIANTS } from 'constants/progressBar';
import { COMPLETED_STATUS_TEXT, FAILED_STATUS_TEXT } from 'constants/detailedCourse';
import { TEST_STATUS } from '../../constants/test';

export interface ConvertedProgress {
  progressValue: number;
  progressText: string;
  progressVariant: string;
}

const convertCourseStatusToProgress = (status?: string): ConvertedProgress => {
  const defaultConvertedValue = {
    progressValue: 0,
    progressText: '0%',
    progressVariant: VARIANTS.notStarted,
  };

  if (!status) {
    return defaultConvertedValue;
  }

  const convertedValues = {
    [COURSE_STATUSES.started]: {
      progressValue: 37,
      progressText: '37%',
      progressVariant: VARIANTS.failedWithPercentage,
    },
    [COURSE_STATUSES.testing]: {
      progressValue: 80,
      progressText: '80%',
      progressVariant: VARIANTS.completed,
    },
    [COURSE_STATUSES.completed]: {
      progressValue: 100,
      progressText: COMPLETED_STATUS_TEXT,
      progressVariant: VARIANTS.completed,
    },
    [COURSE_STATUSES.failed]: {
      progressValue: 0,
      progressText: FAILED_STATUS_TEXT,
      progressVariant: VARIANTS.failed,
    },
  };

  return convertedValues[status] ?? defaultConvertedValue;
};

const convertTestStatusToProgress = (
  status?: string,
  percentagesValue?: number,
): ConvertedProgress => {
  const defaultConvertedValue = {
    progressValue: 0,
    progressText: '0%',
    progressVariant: VARIANTS.notStarted,
  };

  if (!status) {
    return defaultConvertedValue;
  }

  const isPercentage = percentagesValue !== 100;

  const convertedValues = {
    [TEST_STATUS.successful]: {
      progressValue: percentagesValue || 100,
      progressText: `${percentagesValue}%` || '100%',
      progressVariant: isPercentage ? VARIANTS.successfulWithPercentage : VARIANTS.successful,
    },
    [TEST_STATUS.failed]: {
      progressValue: percentagesValue || 0,
      progressText: `${percentagesValue}%` || '0%',
      progressVariant: VARIANTS.failedWithPercentage,
    },
  };
  return convertedValues[status] ?? defaultConvertedValue;
};

export { convertCourseStatusToProgress, convertTestStatusToProgress };
