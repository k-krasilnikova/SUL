import { randomBytes } from 'crypto';

import { UserRank } from 'enums/users';
import { ITest } from 'interfaces/entities/test';
import { IEditCoursePayload } from 'interfaces/requests/common/payloads';
import {
  validateAvatar,
  validateComplexity,
  validateMaterials,
  validateTechnologies,
  validateTest,
  validateTitle,
} from 'utils/validation/courses';
import { MAX_DESCRIPTION_LENGTH, MAX_TITLE_LENGTH } from 'utils/validation/courses/constants';
import validateDescription from 'utils/validation/courses/validateDescription';

describe('Course validation utils tests', () => {
  it('Title validation', () => {
    const title = 'Some valid course title';
    const onlyNumbersTitle = '12389289';
    const onlySpecsTitle = '$%^&*@(&^';
    const tooShortTitle = 'h';
    const tooLongTitle = randomBytes(MAX_TITLE_LENGTH + 1).toString('hex');

    const functionWrapper = (value?: string) => validateTitle(value);

    expect(functionWrapper(title)).toBeTruthy();
    expect(functionWrapper(onlyNumbersTitle)).toBeFalsy();
    expect(functionWrapper(onlySpecsTitle)).toBeFalsy();
    expect(functionWrapper(tooShortTitle)).toBeFalsy();
    expect(functionWrapper(tooLongTitle)).toBeFalsy();
    expect(functionWrapper(undefined)).toBeFalsy();
  });

  it('Description validation', () => {
    const description = 'Some valid course description and so on and so on correct';
    const onlyNumbersDescription = '12389289';
    const onlySpecsDescription = '$%^&*@(&^';
    const tooShortDescription = 'Short';
    const tooLongDescription = randomBytes(MAX_DESCRIPTION_LENGTH + 1).toString('hex');

    const functionWrapper = (value?: string) => validateDescription(value);

    expect(functionWrapper(description)).toBeTruthy();
    expect(functionWrapper(onlyNumbersDescription)).toBeFalsy();
    expect(functionWrapper(onlySpecsDescription)).toBeFalsy();
    expect(functionWrapper(tooShortDescription)).toBeFalsy();
    expect(functionWrapper(tooLongDescription)).toBeFalsy();
    expect(functionWrapper(undefined)).toBeFalsy();
  });

  it('Complexity validation', () => {
    const validComplexity = UserRank.Junior;
    const invalidComplexity = 0;

    const functionWrapper = (value?: unknown) => validateComplexity(value as UserRank);

    expect(functionWrapper(validComplexity)).toBeTruthy();
    expect(functionWrapper(invalidComplexity)).toBeFalsy();
    expect(functionWrapper(undefined)).toBeFalsy();
  });

  it('Test validation', () => {
    const validTest = {
      title: 'gtrange                                   TEST',
      questions: [
        {
          question:
            'This course continues emphasis on composition skills and literary analysis through a focus on the American Experience.  Studies will focus on the colonization of America and its fight for independence during the Fall semester and America’s expansion into many new directions in the Spring Semester. Study will include the exploration of English as a developing and changing language. Students will be studying the development of American Literature and important American authors. All literary study is supported by composition. This course continues emphasis on composition skills and literary analysis through a focus on the American Experience.  Studies will focus on the colonization of America and its fight for independence during the Fall semester and America’s expansion into many new directions in the Spring Semester. Study will include the exploration of English as a developing and changing language. Students will be studying the development of American Literature and important American a',
          answers: [
            {
              variant: 'I',
              aN: 1,
            },
            {
              variant: 'You',
              aN: 2,
            },
          ],
          correctAnswer: 1,
        },
        {
          question: 'Who is it?',
          answers: [
            {
              variant: 'mom',
              aN: 1,
            },
            {
              variant: 'You',
              aN: 2,
            },
          ],
          correctAnswer: 1,
        },
        {
          question: 'Who is it?',
          answers: [
            {
              variant: 'I',
              aN: 1,
            },
            {
              variant: 'You',
              aN: 2,
            },
          ],
          correctAnswer: 1,
        },
        {
          question: 'Who is it?',
          answers: [
            {
              variant: 'I',
              aN: 1,
            },
            {
              variant: 'You',
              aN: 2,
            },
          ],
          correctAnswer: 1,
        },
        {
          question: 'Who is it?',
          answers: [
            {
              variant: 'I',
              aN: 1,
            },
            {
              variant: 'You',
              aN: 2,
            },
          ],
          correctAnswer: 1,
        },
      ],
      timeout: 800,
    };

    const functionWrapper = (value?: unknown) => validateTest(value as ITest);

    expect(functionWrapper(validTest)).toBeTruthy();
    expect(functionWrapper(undefined)).toBeFalsy();
  });

  it('Materials validation', () => {
    const validMaterials = [
      {
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=HV6h7MRrRNA&ab_channel=LearnEnglishwithEnglishClass101.com',
          },
        ],
      },
    ];
    const invalidMaterials = [
      {
        content: [
          {
            type: 'unknown',
            material:
              'https://www.youtube.com/watch?v=HV6h7MRrRNA&ab_channel=LearnEnglishwithEnglishClass101.com',
          },
        ],
      },
    ];

    const functionWrapper = (value?: unknown) =>
      validateMaterials(value as IEditCoursePayload['materials']);

    expect(functionWrapper(validMaterials)).toBeTruthy();
    expect(functionWrapper(invalidMaterials)).toBeFalsy();
    expect(functionWrapper(undefined)).toBeFalsy();
  });

  it('Technologies validation', () => {
    const technologies = [
      {
        skill: '627a78e47fb968f507536885',
        points: 3,
      },
      {
        skill: '627a78e47fb968f507536882',
        points: 5,
      },
    ];
    const invalidTechnologies = [
      {
        skill: '627a78e47fb968f507536885',
        points: -1,
      },
      {
        points: 5,
      },
    ];

    const functionWrapper = (value?: unknown) =>
      validateTechnologies(value as IEditCoursePayload['technologies']);

    expect(functionWrapper(technologies)).toBeTruthy();
    expect(functionWrapper(invalidTechnologies)).toBeFalsy();
    expect(functionWrapper(undefined)).toBeFalsy();
  });

  it('Avatar validation', () => {
    const validLink =
      'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    const invalidLink = 'http';

    const functionWrapper = (value?: unknown) => validateAvatar(value as string);

    expect(functionWrapper(validLink)).toBeTruthy();
    expect(functionWrapper(invalidLink)).toBeFalsy();
    expect(functionWrapper(undefined)).toBeFalsy();
  });
});
