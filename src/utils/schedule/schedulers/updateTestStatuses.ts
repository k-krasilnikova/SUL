import ClientCourseModel from 'db/models/ClientCourses';
import CourseStatus from 'enums/courses';
import { connectToDatabase } from 'utils/connection';
import { generateTestStatusToUpdateDates } from 'utils/date/testDate';
import logger from 'utils/log/logger';

import { UPDATE_TEST_STATUSES_TIME_RANGE } from '../constants';

const updateTestStatuses = async (): Promise<void> => {
  try {
    await connectToDatabase();

    const [from, to] = generateTestStatusToUpdateDates(UPDATE_TEST_STATUSES_TIME_RANGE);

    const { modifiedCount: statusesUpdatedAmount } = await ClientCourseModel.updateMany(
      {
        status: CourseStatus.failed,
        $or: [
          {
            finishTestDate: {
              $gte: from,
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
