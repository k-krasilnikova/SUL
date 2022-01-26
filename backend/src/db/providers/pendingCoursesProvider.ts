import PendingCoursesListModel from '../models/PendingCoursesList';

const getCoursesProvider = async (userId: string) => {
  try {
    const pendingCoursesList = await PendingCoursesListModel.find({ id: userId });
    return pendingCoursesList;
  } catch (error) {
    throw new Error('Error: data not found');
  }
};

export { getCoursesProvider };
