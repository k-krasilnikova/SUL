import { MaterialContentType } from 'enums/materials';
import { ICourse } from 'interfaces/Ientities/Icourses';

export interface IMockedCourses extends Omit<ICourse, 'technologies' | 'requiredSkills' | 'test'> {
  technologies: {
    skill: string;
    points: number;
  }[];
  requiredSkills?: string[];
  test: string;
}

export const mockedCourses: IMockedCourses[] = [
  {
    title: 'JS for beginners',
    description: 'Go from zero to ninjas in this JavaScript for Beginners complete course',
    technologies: [
      { skill: 'JavaScript', points: 3 },
      { skill: 'html', points: 2 },
      { skill: 'css', points: 2 },
    ],
    requiredSkills: ['HTML', 'CSS'],
    complexity: 1,
    materials: [
      {
        stage: 1,
        content: [
          {
            type: MaterialContentType.video,
            material:
              'https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=1&ab_channel=CodeWithHarry',
          },
        ],
      },
      {
        stage: 2,
        content: [
          {
            type: MaterialContentType.video,
            material:
              'https://www.youtube.com/watch?v=zIdg7hkqNE0&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=2&ab_channel=CodeWithHarry',
          },
        ],
      },
      {
        stage: 3,
        content: [
          {
            type: MaterialContentType.video,
            material:
              'https://www.youtube.com/watch?v=X0zdAG7gfgs&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=3&ab_channel=CodeWithHarry',
          },
        ],
      },
    ],
    test: '',
    avatar: 'https://ucarecdn.com/6c336531-1fe4-4daf-ba45-28b76b45ff46/js.png',
    similarCourses: [],
    lessons: 4,
    duration: { days: 1, hours: 2, minutes: 3 },
  },
  {
    title: 'Java for Professionals',
    description:
      'The Java Notes for Professionals course is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow',
    technologies: [
      { skill: 'Java', points: 4 },
      { skill: 'SQL', points: 1 },
    ],
    requiredSkills: ['Java'],
    complexity: 2,
    materials: [
      {
        stage: 1,
        content: [
          {
            type: MaterialContentType.video,
            material:
              'https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=1&ab_channel=CodeWithHarry',
          },
        ],
      },
      {
        stage: 2,
        content: [
          {
            type: MaterialContentType.video,
            material:
              'https://www.youtube.com/watch?v=zIdg7hkqNE0&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=2&ab_channel=CodeWithHarry',
          },
        ],
      },
      {
        stage: 3,
        content: [
          {
            type: MaterialContentType.video,
            material:
              'https://www.youtube.com/watch?v=X0zdAG7gfgs&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=3&ab_channel=CodeWithHarry',
          },
        ],
      },
    ],
    test: '',
    avatar: 'https://www.filepicker.io/api/file/t12BZqmRoulvCTDhoYie',
    similarCourses: [],
    lessons: 4,
    duration: { days: 1, hours: 2, minutes: 3 },
  },
  {
    title: 'Python for kids',
    description:
      'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.',
    technologies: [
      { skill: 'Python', points: 3 },
      { skill: 'Pandas', points: 2 },
      { skill: 'Django', points: 2 },
    ],
    requiredSkills: ['Math', 'English'],
    complexity: 1,
    materials: [
      {
        stage: 1,
        content: [
          {
            type: MaterialContentType.video,
            material:
              'https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=1&ab_channel=CodeWithHarry',
          },
        ],
      },
      {
        stage: 2,
        content: [
          {
            type: MaterialContentType.video,
            material:
              'https://www.youtube.com/watch?v=zIdg7hkqNE0&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=2&ab_channel=CodeWithHarry',
          },
        ],
      },
      {
        stage: 3,
        content: [
          {
            type: MaterialContentType.video,
            material:
              'https://www.youtube.com/watch?v=X0zdAG7gfgs&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=3&ab_channel=CodeWithHarry',
          },
        ],
      },
    ],
    test: '',
    avatar: 'https://ucarecdn.com/0168bc80-6cd0-444f-b173-70ef1ff1071c/python.png',
    similarCourses: [],
    lessons: 4,
    duration: { days: 1, hours: 2, minutes: 3 },
  },
];
