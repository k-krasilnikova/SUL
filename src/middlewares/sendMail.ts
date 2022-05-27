import { NextFunction, Request, Response } from 'express';

import { getClientCourseProvider } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import { getUserProvider } from 'db/providers/userProvider';
import Mail from 'classes/Mail/Mail';
import { getCourseProvider } from 'db/providers/courseProvider';
import { BadRequestError, NotFoundError } from 'classes/errors/clientErrors';

const sendMail = async (
  req: Request,
  res: Response<
    never,
    { clientCourseId: string | undefined; results: Record<'updateStatus', string> }
  >,
  next: NextFunction,
) => {
  try {
    const { clientCourseId } = res.locals;
    if (!clientCourseId) {
      throw new BadRequestError('Invalid query.');
    }
    const {
      status,
      user: userId,
      course: { _id: courseId },
    } = await getClientCourseProvider(clientCourseId);
    if (!courseId) {
      throw new NotFoundError('Course not found');
    }
    const { email } = await getUserProvider(userId);
    const { title } = await getCourseProvider(courseId, userId);
    if (![CourseStatus.approved, CourseStatus.rejected].includes(status)) {
      throw new BadRequestError(`Can't send mail for course in status: ${status}`);
    }
    await new Mail().sendMail({
      to: email,
      subject: 'course notification',
      text: `Your request for course "${title}" has been ${status}`,
    });
    next();
  } catch (error) {
    next(error);
  }
};

export default sendMail;
