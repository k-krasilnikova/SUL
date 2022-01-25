/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

const TESTS = [
  {
    title: 'test for course "JS for begginers" ',
    questions: [
      {
        question: 'choose type that does not exist in JavaScript',
        answers: [
          { variant: 'boolean', isCorrect: false },
          { variant: 'integer', isCorrect: true },
          { variant: 'undefined', isCorrect: false },
        ],
      },
      {
        question: 'choose falsy type',
        answers: [
          { variant: '{}', isCorrect: false },
          { variant: '[]', isCorrect: false },
          { variant: '0', isCorrect: true },
        ],
      },
      {
        question: 'typeof "null" is',
        answers: [
          { variant: 'string', isCorrect: false },
          { variant: 'object', isCorrect: true },
          { variant: 'null', isCorrect: false },
        ],
      },
      {
        question: '1/"a" === 1/"a" ?',
        answers: [
          { variant: 'false', isCorrect: true },
          { variant: 'true', isCorrect: false },
          { variant: 'undefined', isCorrect: false },
        ],
      },
      {
        question: '[] + 0 = ?',
        answers: [
          { variant: '[object Object]', isCorrect: false },
          { variant: '[]', isCorrect: false },
          { variant: '0', isCorrect: true },
        ],
      },
      {
        question: 'null == undefined',
        answers: [
          { variant: 'true', isCorrect: true },
          { variant: 'false', isCorrect: false },
          { variant: 'undefined', isCorrect: false },
        ],
      },
      {
        question: 'null >= 0 ',
        answers: [
          { variant: 'false', isCorrect: false },
          { variant: 'true', isCorrect: true },
          { variant: 'undefined', isCorrect: false },
        ],
      },
      {
        question: '!!false + !false + [1, "2"] + null',
        answers: [
          { variant: '11,20', isCorrect: true },
          { variant: '11.20', isCorrect: false },
          { variant: '11,2null', isCorrect: false },
        ],
      },
    ],
    timeout: 900000,
  },
  {
    title: 'test for course "Java for profi" ',
    questions: [
      {
        question: 'Which of the following stands true about default modifier of class members?',
        answers: [
          {
            variant:
              'By default, variables, methods and constructors can be accessed by subclass only.',
            isCorrect: false,
          },
          {
            variant:
              'By default, variables, methods and constructors can be accessed by any class lying in any package.',
            isCorrect: false,
          },
          {
            variant:
              'By default, variables, methods and constructors can be accessed by any class lying in the same package.',
            isCorrect: true,
          },
        ],
      },
      {
        question: 'Can be constructor be made private?',
        answers: [
          { variant: 'true', isCorrect: true },
          { variant: 'false', isCorrect: false },
        ],
      },
      {
        question: 'What is polymorphism?',
        answers: [
          {
            variant: 'Polymorphism is a technique to define different objects of same type.',
            isCorrect: false,
          },
          {
            variant: ' Polymorphism is the ability of an object to take on many forms.',
            isCorrect: true,
          },
          {
            variant: 'Polymorphism is a technique to define different methods of same type.',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Which of the following is true about String?',
        answers: [
          { variant: 'String is mutable', isCorrect: false },
          { variant: 'String is immutable', isCorrect: true },
          { variant: 'String is a data type', isCorrect: false },
        ],
      },
      {
        question: ' What is Encapsulation?',
        answers: [
          {
            variant: 'Encapsulation is a technique to define different methods of same type.',
            isCorrect: false,
          },
          {
            variant: 'Encapsulation is the ability of an object to take on many forms.',
            isCorrect: false,
          },
          {
            variant:
              'Encapsulation is the technique of making the fields in a class private and providing access to the fields via public methods.',
            isCorrect: true,
          },
        ],
      },
      {
        question: 'What of the following is the default value of an instance variable?',
        answers: [
          { variant: 'Depends upon the type variable', isCorrect: true },
          { variant: 'null', isCorrect: true },
          { variant: '0', isCorrect: false },
        ],
      },
    ],
    timeout: 450000,
  },
  {
    title: 'test for course "Python for kids" ',
    questions: [
      {
        question: 'i = 1/n while True:/n if(1%2==0):/n break/n print(i)/n i += 2',
        answers: [
          { variant: '1 3 5', isCorrect: false },
          { variant: '1', isCorrect: false },
          { variant: '1 3 5 7 9 ...', isCorrect: true },
        ],
      },
      {
        question: 'List Comprehension is',
        answers: [
          { variant: 'new_list = [for member in iterable]', isCorrect: false },
          { variant: 'new_list = [members]', isCorrect: false },
          {
            variant: 'new_list = [expression for member in iterable (if conditional)]',
            isCorrect: true,
          },
        ],
      },
      {
        question: 'Which of the following are true of Python lists?',
        answers: [
          { variant: 'A given object may appear in a list more than once', isCorrect: true },
          { variant: 'All elements in a list must be of the same type', isCorrect: false },
          {
            variant: 'A list may contain any type of object except another list',
            isCorrect: false,
          },
        ],
      },
      {
        question: "a = ['foo', 'bar', 'baz', 'qux', 'quux', 'corge']/b print(a[4::-2])",
        answers: [
          { variant: "['quux']", isCorrect: true },
          { variant: "['quux', 'qux', 'baz', 'foo']", isCorrect: false },
          { variant: "['quux', 'baz', 'foo']", isCorrect: false },
        ],
      },
    ],
    timeout: 90000,
  },
];

const CLIENT_COURSES = [
  {
    user: '',
    course: '',
    status: 'approved',
    testResult: '',
  },
  {
    user: '',
    course: '',
    status: 'approved',
    testResult: '',
  },
  {
    user: '',
    course: '',
    status: 'approved',
    tetsResult: '',
  },
];

const DEFAULT_USERS_DOCS = [
  {
    username: 'admin',
    passwordHash: 'admin',
    email: 'admin@itechart-group.com',
    role: 'admin',
    firstName: 'Admin',
    lastName: 'Admin',
    position: 'Software Engineer',
    skills: [
      { name: 'php', image: '', score: 1 },
      { name: 'python', image: '', score: 1 },
      { name: 'MySQL', image: '', score: 1 },
    ],
    group: 'U4.D4.mocked',
    employees: [],
    avatar: '',
    birthday: '1970-01-01T00:00:00Z',
    skype: 'admin',
    phone: '+375(33)1235363',
  },
  {
    username: 'user',
    passwordHash: 'user',
    email: 'user@itechart-group.com',
    role: 'employee',
    firstName: 'User',
    lastName: 'User',
    position: 'Software Engineer',
    skills: [
      { name: 'js', image: '', score: 1 },
      { name: 'react', image: '', score: 1 },
      { name: 'git', image: '', score: 1 },
      { name: 'html', image: '', score: 1 },
      { name: 'css', image: '', score: 1 },
    ],
    group: 'U4.D4.mocked',
    employees: [],
    avatar: '',
    birthday: '1970-01-01T00:00:00Z',
    skype: 'user',
    phone: '+375(33)2635213',
  },
  {
    username: 'manager',
    passwordHash: 'manager',
    email: 'manager@itechart-group.com',
    role: 'manager',
    firstName: 'Manager',
    lastName: 'Manager',
    position: 'Team Manager',
    skills: [
      { name: 'jira', image: '', score: 1 },
      { name: 'figma', image: '', score: 1 },
    ],
    group: 'U4.D4.mocked',
    employees: [],
    avatar: '',
    birthday: '1970-01-01T00:00:00Z',
    skype: 'user',
    phone: '+375(29)8001190',
  },
];

const MATERIALS = [
  {
    content: [
      {
        _id: '1',
        stage: 1,
        content: [
          'https://www.youtube.com/watch?v=VuN8qwZoego&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=1&ab_channel=WesBos',
        ],
      },
      {
        _id: '2',
        stage: 2,
        content: [
          'https://www.youtube.com/watch?v=xu87YWbr4X0&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=2&ab_channel=WesBos',
        ],
      },
      {
        _id: '3',
        stage: 3,
        content: [
          'https://www.youtube.com/watch?v=AHLNzv13c2I&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=3&ab_channel=WesBos',
        ],
      },
    ],
    technology: ['js', 'html', 'css'],
  },
  {
    content: [
      {
        _id: '4',
        stage: 1,
        content: [
          'https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&ab_channel=CodeWithHarry',
        ],
      },
      {
        _id: '5',
        stage: 2,
        content: [
          'https://www.youtube.com/watch?v=zIdg7hkqNE0&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=2&ab_channel=CodeWithHarry',
        ],
      },
      {
        _id: '6',
        stage: 3,
        content: [
          'https://www.youtube.com/watch?v=X0zdAG7gfgs&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=3&ab_channel=CodeWithHarry',
        ],
      },
    ],
    technology: ['java'],
  },
  {
    content: [
      {
        _id: '7',
        stage: 1,
        content: [
          'https://www.youtube.com/watch?v=IU4-19ofajg&list=PLQAt0m1f9OHvv2wxPGSCWjgy1qER_FvB6&ab_channel=egoroff_channel',
        ],
      },
      {
        _id: '8',
        stage: 2,
        content: [
          'https://www.youtube.com/watch?v=mOQBZq9WCCY&list=PLQAt0m1f9OHvv2wxPGSCWjgy1qER_FvB6&index=2&ab_channel=egoroff_channel',
        ],
      },
    ],
    technology: ['python'],
  },
];

const MOCKED_COURSES = [
  {
    title: 'JS for begginers',
    description: 'basic course for begginers',
    technology: ['js', 'html', 'css'],
    requiredSkills: ['html', 'css'],
    duration: '123124679',
    materials: MATERIALS[0].content,
    lessons: 0,
    test: '',
  },
  {
    title: 'Java for Profi ',
    description: 'course for people who want rise their level in java',
    technology: ['java', 'sql'],
    requiredSkills: ['java for begginers'],
    duration: '123124679',
    materials: MATERIALS[1].content,
    lessons: 0,
    test: '',
  },
  {
    title: 'Python for kids',
    description: 'school level of python programming',
    technology: ['python', 'pandas', 'django'],
    requiredSkills: ['math', 'english'],
    duration: '12312679',
    materials: MATERIALS[2].content,
    lessons: 0,
    test: '',
  },
];

module.exports = {
  async up(db) {
    const tests = await Promise.all(
      TESTS.map((test) => {
        return db.collection('tests').insertOne(test);
      }),
    );
    const courses = await Promise.all(
      MOCKED_COURSES.map((course, index) => {
        course.test = tests[index].insertedId;
        return db.collection('courses').insertOne(course);
      }),
    );
    const users = await Promise.all(
      DEFAULT_USERS_DOCS.map((doc) => {
        const salt = bcrypt.genSaltSync(SALT_ROUNDS);
        doc.passwordHash = bcrypt.hashSync(doc.passwordHash, salt);
        return db.collection('users').insertOne(doc);
      }),
    );
    await Promise.all(
      CLIENT_COURSES.map((course, index) => {
        course.course = courses[index].insertedId;
        course.user = users[index].insertedId;
        return db.collection('clientCourses').insertOne(course);
      }),
    );
  },

  async down(db) {
    await db.collection('courses').drop();
    await db.collection('clientCourses').drop();
    await db.collection('users').drop();
    await db.collection('test').drop();
  },
};
