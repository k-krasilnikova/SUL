export const INITIAL_TEST = {
  title: 'test for course "JS for begginers"',
  questions: [
    {
      qN: 1,
      question: 'choose type that does not exist in JavaScript',
      answers: [
        { variant: 'boolean', aN: 1 },
        { variant: 'integer', aN: 2 },
        { variant: 'undefined', aN: 3 },
      ],
      correctAnswer: 2,
    },
    {
      qN: 2,
      question: 'choose falsy type',
      answers: [
        { variant: '{}', aN: 1 },
        { variant: '[]', aN: 2 },
        { variant: '0', aN: 3 },
      ],
      correctAnswer: 3,
    },
    {
      qN: 3,
      question: 'typeof "null" is',
      answers: [
        { variant: 'string', aN: 1 },
        { variant: 'object', aN: 2 },
        { variant: 'null', aN: 3 },
      ],
      correctAnswer: 2,
    },
    {
      qN: 4,
      question: '1/"a" === 1/"a" ?',
      answers: [
        { variant: 'false', aN: 1 },
        { variant: 'true', aN: 2 },
        { variant: 'undefined', aN: 3 },
      ],
      correctAnswer: 1,
    },
    {
      qN: 5,
      question: '[] + 0 = ?',
      answers: [
        { variant: '[object Object]', aN: 1 },
        { variant: '[]', aN: 2 },
        { variant: '0', aN: 3 },
      ],
      correctAnswer: 3,
    },
    {
      qN: 6,
      question: 'null == undefined',
      answers: [
        { variant: 'true', aN: 1 },
        { variant: 'false', aN: 2 },
        { variant: 'undefined', aN: 3 },
      ],
      correctAnswer: 1,
    },
    {
      qN: 7,
      question: 'null >= 0 ',
      answers: [
        { variant: 'false', aN: 1 },
        { variant: 'true', aN: 2 },
        { variant: 'undefined', aN: 3 },
      ],
      correctAnswer: 2,
    },
    {
      qN: 8,
      question: '!!false + !false + [1, "2"] + null',
      answers: [
        { variant: '11,20', aN: 1 },
        { variant: '11.20', aN: 2 },
        { variant: '11,2null', aN: 3 },
      ],
      correctAnswer: 1,
    },
  ],
  timeout: 900000,
};

export const SKILLS = [
  {
    name: 'Nest.js',
    image: '',
    score: 2,
    maxScore: 2,
  },
  {
    name: 'Express.js',
    image: '',
    score: 2,
    maxScore: 2,
  },
];
