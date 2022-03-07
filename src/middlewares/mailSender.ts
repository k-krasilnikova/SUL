import { NextFunction, Request, Response } from 'express';

import { getStatusProvider } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { getUserProvider } from 'db/providers/userProvider';
import Mail from 'classes/Mail/Mail';
import { getCourseProvider } from 'db/providers/courseProvider';

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
    const { status, user: userId, course: courseId } = await getStatusProvider(clientCourseId);
    const { email } = await getUserProvider(userId);
    const { title } = await getCourseProvider(courseId.toString(), userId.toString());
    if (status !== CourseStatus.approved && status !== CourseStatus.rejected) {
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
