import { VARIANTS } from 'constants/progressBar';
import { COMPLETED_STATUS_TEXT, FAILED_STATUS_TEXT } from 'constants/detailedCourse';
import { TEST_STATUS } from 'constants/test';
import { TVariantProgressBar } from 'types/progressBar';
import { CourseStatus } from 'enums/course';

export interface ConvertedProgress {
  progressValue: number;
  progressVariant: TVariantProgressBar;
  progressText?: string;
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

  const convertedValues: { [key: string]: ConvertedProgress } = {
    [CourseStatus.started]: {
      progressValue: 37,
      progressText: '37%',
      progressVariant: VARIANTS.failedWithPercentage,
    },
    [CourseStatus.testing]: {
      progressValue: 80,
      progressText: '80%',
      progressVariant: VARIANTS.completed,
    },
    [CourseStatus.completed]: {
      progressValue: 100,
      progressText: COMPLETED_STATUS_TEXT,
      progressVariant: VARIANTS.completed,
    },
    [CourseStatus.failed]: {
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

const convertEmployeeCourseProgress = (status?: string): ConvertedProgress => {
  const defaultConvertedValue = {
    progressValue: 0,
    progressVariant: VARIANTS.employeeNotStarted,
  };

  if (!status) {
    return defaultConvertedValue;
  }

  const convertedValues: { [key: string]: ConvertedProgress } = {
    [CourseStatus.started]: {
      progressValue: 37,
      progressVariant: VARIANTS.successfulWithPercentage,
    },
    [CourseStatus.testing]: {
      progressValue: 80,
      progressVariant: VARIANTS.successfulWithPercentage,
    },
    [CourseStatus.completed]: {
      progressValue: 100,
      progressVariant: VARIANTS.successfulWithPercentage,
    },
    [CourseStatus.assessment]: {
      progressValue: 100,
      progressVariant: VARIANTS.successfulWithPercentage,
    },
    [CourseStatus.failed]: {
      progressValue: 0,
      progressVariant: VARIANTS.employeeFailed,
    },
  };

  return convertedValues[status] ?? defaultConvertedValue;
};

export {
  convertCourseStatusToProgress,
  convertTestStatusToProgress,
  convertEmployeeCourseProgress,
};
