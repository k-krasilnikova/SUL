import mockedCourse from '__mock__/mockedCourse';

interface ICreateCourseData extends Omit<typeof mockedCourse, 'technologies'> {
  technologies: { skill: string; points: number }[];
}

export { ICreateCourseData };
