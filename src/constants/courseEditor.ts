export const COURSE_COMPLEXITY: { [key: string]: string | number }[] = [
  {
    value: 1,
    label: 'For junior',
  },
  {
    value: 2,
    label: 'For middle',
  },
  {
    value: 3,
    label: 'For senior',
  },
];

export const INITIAL_VALUES = {
  title: '',
  complexity: 0,
  avatar: '',
  description: '',
  technologies: [],
  materials: [],
};

export enum Titles {
  lessonStepTitle = 'Add course files and description',
  testStepTitle = 'Add questions to the course',
  lessonCount = 'Lesson № ',
  exerciseTitle = 'Exercise Title',
  exerciseDescription = 'Exercise Description',
  testDetails = 'Test details',
  videoUrlTitle = 'Video URL',
  textUrlTitle = 'Text URL',
  questionNumber = 'Question № ',
  answerTestOption = 'Answer Option',
}

export const INITIAL_STEP = 0;
export const TAB_STEP = 1;
