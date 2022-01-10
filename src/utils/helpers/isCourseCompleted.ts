import { Course } from 'types/course';

const isCourseCompleted = (course: Course): boolean => {
  let completed = true;
  for (let material = 0; material < course.materials.length; material++) {
    const content = course.materials[material].content;
    for (let stage = 0; stage < content.length; stage++) {
      if (!content[stage].isCompleted) {
        completed = false;
        break;
      }
    }
  }
  return completed;
};

export default isCourseCompleted;
