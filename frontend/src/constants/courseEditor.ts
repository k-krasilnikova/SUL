import { ContentElementType } from 'enums/materials';

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

export const LESSONS_TYPE: { [key: string]: string | number }[] = [
  {
    value: 'plain',
    label: ContentElementType.plain,
  },
  {
    value: 'video',
    label: ContentElementType.video,
  },
  {
    value: 'presentation',
    label: ContentElementType.presentation,
  },
];

export const LESSONS_TYPE_TITLE_MAP: { [key: string]: string } = {
  plain: ContentElementType.plain,
  video: ContentElementType.video,
  presentation: ContentElementType.presentation,
};

export const INITIAL_VALUES = {
  title: '',
  complexity: 0,
  avatar: '',
  description: '',
  technologies: [],
  materials: [],
  test: {
    _id: '',
    questions: [],
    timeout: 0,
  },
  skillsById: {},
};

export enum EditorTitles {
  lessonStepTitle = 'Add course files and description',
  skillStepTitle = 'Edit course skills',
  definitionStepTitle = 'Course details',
  definitionStepDescription = 'Description',
  skillDescription = 'Achieved skill',
  avatarTitle = 'Avatar',
  avatarDescription = 'Max size: 10Mb',
  testStepTitle = 'Add questions to the course',
  lessonCount = 'Lesson № ',
  exerciseTitle = 'Exercise Title',
  exerciseDescription = 'Exercise Description',
  testDetails = 'Test details',
  questionNumber = 'Question № ',
}

export const INITIAL_NUMBER_POINT = 1;
export const INITIAL_STEP = 0;
export const TAB_STEP = 1;

export const BUTTON_VARIANT = {
  input: 'Input',
  radio: 'Radiobutton (One answer)',
};

export const RADIX_PARAMETER = 10;
