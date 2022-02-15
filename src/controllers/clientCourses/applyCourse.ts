import { NextFunction, Request, Response } from 'express';
import { applyCourseProvider, getClientCoursesProvider } from 'db/providers/clientCourseProvider';
import { generateProgressDto } from 'utils/dto/dtoUtils';
import { INITIAL_INDX } from 'config/constants';
import { materialsCounterProvider } from 'db/providers/courseProvider';
import { checkCourseDuplicates } from 'utils/validation/checkDuplicates';
import { IUser } from 'interfaces/Ientities/Iusers';
import { IClientCourse } from 'interfaces/Ientities/IclientCourses';
import { getUserProvider, updatePendingFieldCourses } from 'db/providers/userProvider';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const applyCourse = async (
  req: Request<Record<string, never>, Record<string, never>, { id: string }>,
  res: Response<{ message: string } | { status: string }, { id: string }>,
  next: NextFunction,
) => {
  try {
    const { id: courseId } = req.body;
    const { id: userId } = res.locals;
    const applyedCourses = await getClientCoursesProvider(userId);
    const isDuplicate = checkCourseDuplicates(applyedCourses, courseId);
    if (isDuplicate) {
      throw new BadRequestError('Course already applied.');
    }
    const materialsCount = await materialsCounterProvider(courseId);
    const progressDto = generateProgressDto(materialsCount[INITIAL_INDX].total);
    const user: IUser = await getUserProvider(userId);
    const course: IClientCourse = await applyCourseProvider(courseId, userId, progressDto);
    await updatePendingFieldCourses(user.managerId, course._id);
    res.json(course);
  } catch (err) {
    next(err);
  }
};

export default applyCourse;
