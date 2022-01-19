import { Course } from 'types/course';

const isCourseCompleted = (course: Course): boolean => {
  let completed = false;
  const lastMaterial = course.materials.length - 1;
  const content = course.materials[lastMaterial].content;
  const lastContent = content.length - 1;
  if (content[lastContent].isCompleted) {
    completed = true;
  }
  return completed;
};

export default isCourseCompleted;
