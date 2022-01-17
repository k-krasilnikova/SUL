/* eslint-disable @typescript-eslint/no-var-requires */
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

const CLIENT_COURSES = [
  {
    course: '',
    status: 'approved',
    currentStage: 1,
  },
  {
    course: '',
    status: 'approved',
    currentStage: 1,
  },
  {
    course: '',
    status: 'approved',
    currentStage: 1,
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
    skills: [],
    courses: [],
    employees: [],
    avatar: '',
    birthday: '1970-01-01T00:00:00Z',
    skype: 'admin',
  },
  {
    username: 'user',
    passwordHash: 'user',
    email: 'user@itechart-group.com',
    role: 'employee',
    firstName: 'User',
    lastName: 'User',
    position: 'Software Engineer',
    skills: [],
    courses: [],
    employees: [],
    avatar: '',
    birthday: '1970-01-01T00:00:00Z',
    skype: 'user',
  },
  {
    username: 'manager',
    passwordHash: 'manager',
    email: 'manager@itechart-group.com',
    role: 'manager',
    firstName: 'Manager',
    lastName: 'Manager',
    position: 'Team Manager',
    skills: [],
    courses: [],
    employees: [],
    avatar: '',
    birthday: '1970-01-01T00:00:00Z',
    skype: 'user',
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
        isCompleted: false,
      },
      {
        _id: '2',
        stage: 2,
        content: [
          'https://www.youtube.com/watch?v=xu87YWbr4X0&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=2&ab_channel=WesBos',
        ],
        isCompleted: false,
      },
      {
        _id: '3',
        stage: 3,
        content: [
          'https://www.youtube.com/watch?v=AHLNzv13c2I&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=3&ab_channel=WesBos',
        ],
        isCompleted: false,
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
        isCompleted: false,
      },
      {
        _id: '5',
        stage: 2,
        content: [
          'https://www.youtube.com/watch?v=zIdg7hkqNE0&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=2&ab_channel=CodeWithHarry',
        ],
        isCompleted: false,
      },
      {
        _id: '6',
        stage: 3,
        content: [
          'https://www.youtube.com/watch?v=X0zdAG7gfgs&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=3&ab_channel=CodeWithHarry',
        ],
        isCompleted: false,
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
        isCompleted: false,
      },
      {
        _id: '8',
        stage: 2,
        content: [
          'https://www.youtube.com/watch?v=mOQBZq9WCCY&list=PLQAt0m1f9OHvv2wxPGSCWjgy1qER_FvB6&index=2&ab_channel=egoroff_channel',
        ],
        isCompleted: false,
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
    testLink: 'https://www.idrlabs.com/hogwarts-house/test.php',
  },
  {
    title: 'Java for Profi ',
    description: 'course for people who want rise their level in java',
    technology: ['java', 'sql'],
    requiredSkills: ['java for begginers'],
    duration: '123124679',
    materials: MATERIALS[1].content,
    lessons: 0,
    testLink: 'https://www.idrlabs.com/ru/libertarian/test.php',
  },
  {
    title: 'Python for kids',
    description: 'school level of python programming',
    technology: ['python', 'pandas', 'django'],
    requiredSkills: ['math', 'english'],
    duration: '12312679',
    materials: MATERIALS[2].content,
    lessons: 0,
    testLink: 'https://www.idrlabs.com/cat-personality/test.php',
  },
];

module.exports = {
  async up(db) {
    const courses = await Promise.all(
      MOCKED_COURSES.map((course) => {
        return db.collection('courses').insertOne(course);
      }),
    );
    const clientCourses = await Promise.all(
      CLIENT_COURSES.map((course, index) => {
        // eslint-disable-next-line no-param-reassign
        course.course = courses[index].insertedId;
        return db.collection('clientCourses').insertOne(course);
      }),
    );
    await Promise.all(
      DEFAULT_USERS_DOCS.map((doc, index) => {
        const salt = bcrypt.genSaltSync(SALT_ROUNDS);
        // eslint-disable-next-line no-param-reassign
        doc.courses.push(clientCourses[index].insertedId);
        // eslint-disable-next-line no-param-reassign
        doc.passwordHash = bcrypt.hashSync(doc.passwordHash, salt);
        return db.collection('users').insertOne(doc);
      }),
    );
  },

  async down(db) {
    await db.collection('courses').drop();
    await db.collection('clientCourses').drop();
    await db.collection('users').drop();
  },
};
