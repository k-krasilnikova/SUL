import ClientCourseModel from 'db/models/ClientCourses';
import CourseStatus from 'enums/courses';
import { generateTestStatusToUpdateDates } from 'utils/date/testDate';
import { connectToDatabase } from 'utils/connection/connectToDatabase';
import { logger } from 'utils/log/logger';

import { UPDATE_TEST_STATUSES_TIME_RANGE } from './constants';

const updateTestStatuses = async (): Promise<void> => {
  try {
    await connectToDatabase();

    const [, to] = generateTestStatusToUpdateDates(UPDATE_TEST_STATUSES_TIME_RANGE);

    const { modifiedCount: statusesUpdatedAmount } = await ClientCourseModel.updateMany(
      {
        status: { $in: [CourseStatus.failed, CourseStatus.testing] },
        $or: [
          {
            finishTestDate: {
              $lte: to,
            },
          },
        ],
      },
      {
        $set: {
          status: CourseStatus.started,
        },
        $unset: {
          finishTestDate: 0,
          startTestDate: 0,
        },
      },
    ).lean();

    logger.info(
      `Update test statuses scheduler perfomed. Statuses updated: ${statusesUpdatedAmount}.`,
    );
  } catch (error) {
    logger.error(error);
  }
};

export default updateTestStatuses;
