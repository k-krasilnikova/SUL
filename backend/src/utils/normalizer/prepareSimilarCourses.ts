import { ICourse } from 'interfaces/entities/courses';
import { getClientCoursesByCourseId } from 'db/providers/clientCourseProvider';

const prepareSimilarCourses = async (similarCourses: ICourse[]): Promise<ICourse[]> => {
  const clientCoursesInSimilar = await Promise.all(
    similarCourses.map(
      async (similarCourse) =>
        similarCourse._id && (await getClientCoursesByCourseId(similarCourse._id.toString())),
    ),
  );

  const preparedSimilarCourses = similarCourses.reduce((acc, similarCourse): ICourse[] => {
    if (
      !clientCoursesInSimilar?.find(
        (clientCourse) =>
          similarCourse._id &&
          clientCourse?.course &&
          similarCourse._id.toString() === clientCourse?.course.toString(),
      )
    ) {
      acc.push(similarCourse);
    }
    return acc;
  }, [] as ICourse[]);
  return preparedSimilarCourses;
};

export default prepareSimilarCourses;
