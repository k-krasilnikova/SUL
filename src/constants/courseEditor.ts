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

export enum EditorContentElementType {
  video = 'Video',
  plain = 'Text',
  presentation = 'Presentation',
}

export const LESSONS_TYPE: { [key: string]: string | number }[] = [
  {
    value: 'plain',
    label: EditorContentElementType.plain,
  },
  {
    value: 'video',
    label: EditorContentElementType.video,
  },
  {
    value: 'presentation',
    label: EditorContentElementType.presentation,
  },
];

export const LESSONS_TYPE_TITLE_MAP: { [key: string]: string } = {
  plain: EditorContentElementType.plain,
  video: EditorContentElementType.video,
  presentation: EditorContentElementType.presentation,
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
  skillStepTitile = 'Edit course skills',
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
  videoTitle = 'Video',
  presentationTitle = 'Presentation',
  textTitle = 'Text',
  questionNumber = 'Question № ',
  answerTestOption = 'Answer Option',
}

export const INITIAL_NUMBER_POINT = 1;
export const INITIAL_STEP = 0;
export const TAB_STEP = 1;

export const BUTTON_VARIANT = {
  input: 'Input',
  radio: 'Radiobutton (One answer)',
};

export const RADIX_PARAMETER = 10;
