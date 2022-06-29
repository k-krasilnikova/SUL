import { NextFunction } from 'express';

import {
  TAssignEmployeeCoursesRequest,
  TAssignEmployeeCoursesResponse,
} from 'interfaces/requests/manager/assignEmployeeCourses';
import { INITIAL_INDX } from 'config/constants';
import {
  assignCourseToEmployee,
  getAllClientCoursesProvider,
} from 'db/providers/clientCourseProvider';
import { getCourseProvider, materialsCounterProvider } from 'db/providers/courseProvider';
import { getUserProvider } from 'db/providers/userProvider';
import { addUserNotification } from 'db/providers/notificationProvider';
import { generateProgressDto } from 'utils/dto/dto';
import { combineFullName } from 'utils/combine/combineFullName';
import {
  NotificationDescription,
  NotificationStatuses,
  NotificationTitles,
  NotificationType,
} from 'enums/notification';
import { BadRequestError } from 'classes/errors/clientErrors';

import { isCoursesToAssignHaveDuplicates } from './utils/validations';
import { removeCoursesToAssignDuplicates } from './utils/mappers';

const assignEmployeeCourses = async (
  req: TAssignEmployeeCoursesRequest,
  res: TAssignEmployeeCoursesResponse,
  next: NextFunction,
) => {
  try {
    const { id: employeeId } = req.params;
    const { id: managerId } = res.locals;
    const { courses: coursesToAssign, assessment: withAssessment } = req.body;

    const employee = await getUserProvider(employeeId);
    const manager = await getUserProvider(managerId);

    if (employeeId === managerId) {
      throw new BadRequestError('Unable to self-assign courses.');
    }

    if (String(employee.managerId) !== String(manager._id)) {
      throw new BadRequestError('Employee does not belong to user.');
    }

    const reducedCoursesToAssign = removeCoursesToAssignDuplicates(coursesToAssign);

    const employeeClientCourses = await getAllClientCoursesProvider(employeeId);

    const hasDuplicates = isCoursesToAssignHaveDuplicates(
      employeeClientCourses,
      reducedCoursesToAssign,
    );
    if (hasDuplicates) {
      throw new BadRequestError(`Attempt to assign duplicated courses.`);
    }

    const assignedCourses = await Promise.all(
      reducedCoursesToAssign.map(async (courseToAssign) => {
        const materialsCount = await materialsCounterProvider(courseToAssign.courseId);
        const progressDto = generateProgressDto(materialsCount[INITIAL_INDX].total);
        const assignedCourse = await assignCourseToEmployee(
          employeeId,
          courseToAssign.courseId,
          progressDto,
          withAssessment || false,
        );

        return assignedCourse;
      }),
    );

    const userFullName = combineFullName(employee.firstName, employee.lastName);

    assignedCourses.map(async (clientCourse) => {
      const course = await getCourseProvider(clientCourse.course, employeeId);
      await addUserNotification(
        employeeId,
        course.title,
        userFullName,
        NotificationStatuses.new,
        withAssessment ? NotificationTitles.assignedWithInterview : NotificationTitles.assigned,
        withAssessment
          ? NotificationDescription.assignedWithInterview
          : NotificationDescription.assigned,
        NotificationType.employee,
      );
    });

    const assignedCoursesAmount = assignedCourses.filter((doc) => !!doc).length;

    const payloadMessage = `${assignedCoursesAmount}/${assignedCourses.length} courses successfully assigned.`;

    res.json(payloadMessage);
  } catch (error) {
    next(error);
  }
};

export default assignEmployeeCourses;
