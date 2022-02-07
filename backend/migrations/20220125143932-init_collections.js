/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

const TESTS = [
  {
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
          { variant: 'false', aN: 1 },
          { variant: 'undefined', aN: 1 },
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
  },
  {
    title: 'test for course "Java for profi"',
    questions: [
      {
        qN: 1,
        question: 'Which of the following stands true about default modifier of class members?',
        answers: [
          {
            variant:
              'By default, variables, methods and constructors can be accessed by subclass only.',
            aN: 1,
          },
          {
            variant:
              'By default, variables, methods and constructors can be accessed by any class lying in any package.',
            aN: 2,
          },
          {
            variant:
              'By default, variables, methods and constructors can be accessed by any class lying in the same package.',
            aN: 3,
          },
        ],
        correctAnswer: 3,
      },
      {
        qN: 2,
        question: 'Can be constructor be made private?',
        answers: [
          { variant: 'true', aN: 1 },
          { variant: 'false', aN: 2 },
        ],
        correctAnswer: 1,
      },
      {
        qN: 3,
        question: 'What is polymorphism?',
        answers: [
          {
            variant: 'Polymorphism is a technique to define different objects of same type.',
            aN: 1,
          },
          {
            variant: ' Polymorphism is the ability of an object to take on many forms.',
            aN: 2,
          },
          {
            variant: 'Polymorphism is a technique to define different methods of same type.',
            aN: 3,
          },
        ],
        correctAnswer: 2,
      },
      {
        qN: 4,
        question: 'Which of the following is true about String?',
        answers: [
          { variant: 'String is mutable', aN: 1 },
          { variant: 'String is immutable', aN: 2 },
          { variant: 'String is a data type', aN: 3 },
        ],
        correctAnswer: 2,
      },
      {
        qN: 5,
        question: ' What is Encapsulation?',
        answers: [
          {
            variant: 'Encapsulation is a technique to define different methods of same type.',
            aN: 1,
          },
          {
            variant: 'Encapsulation is the ability of an object to take on many forms.',
            aN: 2,
          },
          {
            variant:
              'Encapsulation is the technique of making the fields in a class private and providing access to the fields via public methods.',
            aN: 3,
          },
        ],
        correctAnswer: 3,
      },
      {
        qN: 6,
        question: 'What of the following is the default value of an instance variable?',
        answers: [
          { variant: 'Depends upon the type variable', aN: 1 },
          { variant: 'null', aN: 2 },
          { variant: '0', aN: 3 },
        ],
        correctAnswer: 1,
      },
    ],
    timeout: 450000,
  },
  {
    title: 'test for course "Python for kids"',
    questions: [
      {
        qN: 1,
        question: 'i = 1/n while True:/n if(1%2==0):/n break/n print(i)/n i += 2',
        answers: [
          { variant: '1 3 5', aN: 1 },
          { variant: '1', aN: 2 },
          { variant: '1 3 5 7 9 ...', aN: 3 },
        ],
        correctAnswer: 3,
      },
      {
        qN: 2,
        question: 'List Comprehension is',
        answers: [
          { variant: 'new_list = [for member in iterable]', aN: 1 },
          { variant: 'new_list = [members]', aN: 2 },
          {
            variant: 'new_list = [expression for member in iterable (if conditional)]',
            aN: 3,
          },
        ],
        correctAnswer: 3,
      },
      {
        qN: 3,
        question: 'Which of the following are true of Python lists?',
        answers: [
          { variant: 'A given object may appear in a list more than once', aN: 1 },
          { variant: 'All elements in a list must be of the same type', aN: 2 },
          {
            variant: 'A list may contain any type of object except another list',
            aN: 3,
          },
        ],
        correctAnswer: 1,
      },
      {
        qN: 4,
        question: "a = ['foo', 'bar', 'baz', 'qux', 'quux', 'corge']/b print(a[4::-2])",
        answers: [
          { variant: "['quux']", aN: 1 },
          { variant: "['quux', 'qux', 'baz', 'foo']", aN: 2 },
          { variant: "['quux', 'baz', 'foo']", aN: 3 },
        ],
        correctAnswer: 1,
      },
    ],
    timeout: 90000,
  },
  {
    title: 'test for course "Python for kids"',
    questions: [
      {
        qN: 1,
        question: 'i = 1/n while True:/n if(1%2==0):/n break/n print(i)/n i += 2',
        answers: [
          { variant: '1 3 5', aN: 1 },
          { variant: '1', aN: 2 },
          { variant: '1 3 5 7 9 ...', aN: 3 },
        ],
        correctAnswer: 3,
      },
      {
        qN: 2,
        question: 'List Comprehension is',
        answers: [
          { variant: 'new_list = [for member in iterable]', aN: 1 },
          { variant: 'new_list = [members]', aN: 2 },
          {
            variant: 'new_list = [expression for member in iterable (if conditional)]',
            aN: 3,
          },
        ],
        correctAnswer: 3,
      },
      {
        qN: 3,
        question: 'Which of the following are true of Python lists?',
        answers: [
          { variant: 'A given object may appear in a list more than once', aN: 1 },
          { variant: 'All elements in a list must be of the same type', aN: 2 },
          {
            variant: 'A list may contain any type of object except another list',
            aN: 3,
          },
        ],
        correctAnswer: 1,
      },
      {
        qN: 4,
        question: "a = ['foo', 'bar', 'baz', 'qux', 'quux', 'corge']/b print(a[4::-2])",
        answers: [
          { variant: "['quux']", aN: 1 },
          { variant: "['quux', 'qux', 'baz', 'foo']", aN: 2 },
          { variant: "['quux', 'baz', 'foo']", aN: 3 },
        ],
        correctAnswer: 1,
      },
    ],
    timeout: 90000,
  },
  {
    title: 'test for course "Python for kids"',
    questions: [
      {
        qN: 1,
        question: 'i = 1/n while True:/n if(1%2==0):/n break/n print(i)/n i += 2',
        answers: [
          { variant: '1 3 5', aN: 1 },
          { variant: '1', aN: 2 },
          { variant: '1 3 5 7 9 ...', aN: 3 },
        ],
        correctAnswer: 3,
      },
      {
        qN: 2,
        question: 'List Comprehension is',
        answers: [
          { variant: 'new_list = [for member in iterable]', aN: 1 },
          { variant: 'new_list = [members]', aN: 2 },
          {
            variant: 'new_list = [expression for member in iterable (if conditional)]',
            aN: 3,
          },
        ],
        correctAnswer: 3,
      },
      {
        qN: 3,
        question: 'Which of the following are true of Python lists?',
        answers: [
          { variant: 'A given object may appear in a list more than once', aN: 1 },
          { variant: 'All elements in a list must be of the same type', aN: 2 },
          {
            variant: 'A list may contain any type of object except another list',
            aN: 3,
          },
        ],
        correctAnswer: 1,
      },
      {
        qN: 4,
        question: "a = ['foo', 'bar', 'baz', 'qux', 'quux', 'corge']/b print(a[4::-2])",
        answers: [
          { variant: "['quux']", aN: 1 },
          { variant: "['quux', 'qux', 'baz', 'foo']", aN: 2 },
          { variant: "['quux', 'baz', 'foo']", aN: 3 },
        ],
        correctAnswer: 1,
      },
    ],
    timeout: 90000,
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
      {
        skillGroup: 'skill group 1',
        skillList: [
          { name: 'php', image: '', score: 1, maxScore: 5 },
          { name: 'js', image: '', score: 1, maxScore: 5 },
          { name: 'html', image: '', score: 1, maxScore: 5 },
        ],
      },
    ],
    group: 'U4.D4.mocked',
    employees: [],
    pendingCourses: [],
    avatar: '',
    birthday: '1970-01-01T00:00:00Z',
    skype: 'admin',
    phone: '+375(33)1235363',
    managerId: '',
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
      {
        skillGroup: 'skill group 1',
        skillList: [
          { name: 'php', image: '', score: 1, maxScore: 5 },
          { name: 'js', image: '', score: 1, maxScore: 5 },
          { name: 'html', image: '', score: 1, maxScore: 5 },
        ],
      },
    ],
    group: 'U4.D4.mocked',
    employees: [],
    pendingCourses: [],
    avatar: '',
    birthday: '1970-01-01T00:00:00Z',
    skype: 'user',
    phone: '+375(29)8001190',
    managerId: '',
  },
];

const DEFAULT_EMPLOYEES = [
  {
    username: 'user',
    passwordHash: 'user',
    email: 'user@itechart-group.com',
    role: 'employee',
    firstName: 'User',
    lastName: 'User',
    position: 'Software Engineer',
    skills: [
      {
        skillGroup: 'skill group 1',
        skillList: [
          { name: 'php', image: '', score: 1, maxScore: 5 },
          { name: 'js', image: '', score: 1, maxScore: 5 },
          { name: 'html', image: '', score: 1, maxScore: 5 },
        ],
      },
    ],
    group: 'U4.D4.mocked',
    employees: [],
    pendingCourses: [],
    avatar: '',
    birthday: '1970-01-01T00:00:00Z',
    skype: 'user',
    phone: '+375(33)2635213',
    managerId: '',
  },
  {
    username: 'user1',
    passwordHash: 'user1',
    email: 'user@itechart-group.com',
    role: 'employee',
    firstName: 'User1',
    lastName: 'User1',
    position: 'Software Engineer',
    skills: [
      {
        skillGroup: 'skill group 1',
        skillList: [
          { name: 'php', image: '', score: 1, maxScore: 5 },
          { name: 'js', image: '', score: 1, maxScore: 5 },
          { name: 'html', image: '', score: 1, maxScore: 5 },
        ],
      },
    ],
    group: 'U4.D4.mocked',
    employees: [],
    pendingCourses: [],
    avatar: '',
    birthday: '1970-01-01T00:00:00Z',
    skype: 'user1',
    phone: '+375(33)2635213',
    managerId: '',
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
    title: 'JS for beginners',
    description: 'basic course for beginners',
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
    requiredSkills: ['java for beginners'],
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
  {
    title: 'Kotlin',
    description: 'Kotlin programming',
    technology: ['kotlin', 'java'],
    requiredSkills: ['math', 'english'],
    duration: '12312679',
    materials: MATERIALS[3].content,
    lessons: 0,
    test: '',
  },
  {
    title: 'Scala',
    description: 'school level of Scala programming',
    technology: ['scala'],
    requiredSkills: ['math', 'english'],
    duration: '12312679',
    materials: MATERIALS[4].content,
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
    await Promise.all(
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
      DEFAULT_EMPLOYEES.map((doc) => {
        const salt = bcrypt.genSaltSync(SALT_ROUNDS);
        doc.passwordHash = bcrypt.hashSync(doc.passwordHash, salt);
        doc.managerId = users[1].insertedId;
        return db.collection('users').insertOne(doc);
      }),
    );
  },

  async down(db) {
    await db.collection('courses').drop();
    await db.collection('clientCourses').drop();
    await db.collection('users').drop();
    await db.collection('tests').drop();
  },
};
