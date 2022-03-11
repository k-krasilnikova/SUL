/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
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
    technologies: [],
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
    technologies: [],
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
    technologies: [],
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
    technologies: [],
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
    technologies: ['JavaScript', 'HTML', 'CSS'],
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
    technologies: ['Java'],
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
    technologies: ['Python'],
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
    technologies: ['Python'],
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
    technologies: ['Python'],
  },
];

const MOCKED_COURSES = [
  {
    title: 'JS for beginners',
    description:
      'Lorem ipsum dolor sit amet. Et voluptatem optio ex quibusdam inventore id enim pariatur qui neque voluptatem. Quo magni quo nobis dolor ut laudantium voluptatum aut eaque aliquam eos Quis nisi. At facere exercitationem et autem repellat vel eligendi error. Ad quae odit et voluptas ullam sit eveniet voluptas.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    requiredSkills: ['HTML', 'CSS'],
    duration: '123124679',
    materials: MATERIALS[0].content,
    lessons: 0,
    test: '',
  },
  {
    title: 'Java for Profi ',
    description:
      'Lorem ipsum dolor sit amet. Et voluptatem optio ex quibusdam inventore id enim pariatur qui neque voluptatem. Quo magni quo nobis dolor ut laudantium voluptatum aut eaque aliquam eos Quis nisi. At facere exercitationem et autem repellat vel eligendi error. Ad quae odit et voluptas ullam sit eveniet voluptas.',
    technologies: ['Java', 'SQL'],
    requiredSkills: ['Java'],
    duration: '123124679',
    materials: MATERIALS[1].content,
    lessons: 0,
    test: '',
  },
  {
    title: 'Python for kids',
    description:
      'Lorem ipsum dolor sit amet. Et voluptatem optio ex quibusdam inventore id enim pariatur qui neque voluptatem. Quo magni quo nobis dolor ut laudantium voluptatum aut eaque aliquam eos Quis nisi. At facere exercitationem et autem repellat vel eligendi error. Ad quae odit et voluptas ullam sit eveniet voluptas.',
    technologies: ['Python', 'Pandas', 'Django'],
    requiredSkills: ['Math', 'English'],
    duration: '12312679',
    materials: MATERIALS[2].content,
    lessons: 0,
    test: '',
  },
  {
    title: 'Kotlin',
    description:
      'Lorem ipsum dolor sit amet. Et voluptatem optio ex quibusdam inventore id enim pariatur qui neque voluptatem. Quo magni quo nobis dolor ut laudantium voluptatum aut eaque aliquam eos Quis nisi. At facere exercitationem et autem repellat vel eligendi error. Ad quae odit et voluptas ullam sit eveniet voluptas.',
    technologies: ['Kotlin', 'Java'],
    requiredSkills: ['Math', 'English'],
    duration: '12312679',
    materials: MATERIALS[3].content,
    lessons: 0,
    test: '',
  },
  {
    title: 'Scala',
    description:
      'Lorem ipsum dolor sit amet. Et voluptatem optio ex quibusdam inventore id enim pariatur qui neque voluptatem. Quo magni quo nobis dolor ut laudantium voluptatum aut eaque aliquam eos Quis nisi. At facere exercitationem et autem repellat vel eligendi error. Ad quae odit et voluptas ullam sit eveniet voluptas.',
    technologies: ['Scala'],
    requiredSkills: ['Math', 'English'],
    duration: '12312679',
    materials: MATERIALS[4].content,
    lessons: 0,
    test: '',
  },
];

const SKILLS = [
  {
    name: 'Java',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968282.png',
    maxScore: MOCKED_COURSES.filter((course) => course.technologies.includes('Java')).length,
    group: 'Languages',
  },
  {
    name: 'JavaScript',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    maxScore: MOCKED_COURSES.filter((course) => course.technologies.includes('JavaScript')).length,
    group: 'Languages',
  },
  {
    name: 'TypeScript',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png',
    maxScore: MOCKED_COURSES.filter((course) => course.technologies.includes('TypeScript')).length,
    group: 'Languages',
  },
  {
    name: 'PHP',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968332.png',
    maxScore: MOCKED_COURSES.filter((course) => course.technologies.includes('PHP')).length,
    group: 'Languages',
  },
  {
    name: 'HTML',
    image: 'https://cdn-icons-png.flaticon.com/512/569/569835.png',
    maxScore: MOCKED_COURSES.filter((course) => course.technologies.includes('HTML')).length,
    group: 'Frontend',
  },
  {
    name: 'ReactJS',
    image: 'https://cdn-icons-png.flaticon.com/512/45/45082.png',
    maxScore: MOCKED_COURSES.filter((course) => course.technologies.includes('ReactJS')).length,
    group: 'Frontend',
  },
  {
    name: 'CSS',
    image: 'https://cdn-icons-png.flaticon.com/512/174/174854.png',
    maxScore: MOCKED_COURSES.filter((course) => course.technologies.includes('CSS')).length,
    group: 'Frontend',
  },
  {
    name: 'Angular',
    image: 'https://cdn-icons-png.flaticon.com/512/3522/3522248.png',
    maxScore: MOCKED_COURSES.filter((course) => course.technologies.includes('Angular')).length,
    group: 'Frontend',
  },
  {
    name: 'MySQL',
    image: 'https://cdn-icons-png.flaticon.com/512/1199/1199128.png',
    maxScore: MOCKED_COURSES.filter((course) => course.technologies.includes('MySQL')).length + 1, // for the default level porpose (testing only)
    group: 'Databases',
  },
  {
    name: 'Kotlin',
    image: 'https://cdn-icons-png.flaticon.com/512/154/154878.png',
    maxScore: MOCKED_COURSES.filter((course) => course.technologies.includes('Kotlin')).length,
    group: 'Languages',
  },
  {
    name: 'Scala',
    image: 'https://cdn-icons-png.flaticon.com/512/919/919834.png',
    maxScore: MOCKED_COURSES.filter((course) => course.technologies.includes('Scala')).length + 1, // for the default level porpose (testing only)
    group: 'Languages',
  },
  {
    name: 'Python',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
    maxScore: MOCKED_COURSES.filter((course) => course.technologies.includes('Python')).length + 1, // for the default level porpose (testing only)
    group: 'Languages',
  },
  {
    name: 'Math',
    image: 'https://cdn-icons-png.flaticon.com/512/43/43102.png',
    maxScore: MOCKED_COURSES.filter((course) => course.technologies.includes('Math')).length + 1,
    group: 'Others',
  },
  {
    name: 'English',
    image: 'https://cdn-icons-png.flaticon.com/512/197/197374.png',
    maxScore: MOCKED_COURSES.filter((course) => course.technologies.includes('English')).length + 1,
    group: 'Others',
  },
  {
    name: 'SQL',
    image: 'https://cdn-icons-png.flaticon.com/512/28/28954.png',
    maxScore: MOCKED_COURSES.filter((course) => course.technologies.includes('SQL')).length,
    group: 'Databases',
  },
  {
    name: 'Pandas',
    image: 'https://cdn-icons-png.flaticon.com/512/48/48674.png',
    maxScore: MOCKED_COURSES.filter((course) => course.technologies.includes('Pandas')).length,
    group: 'Data Science',
  },
  {
    name: 'Django',
    image: 'https://cdn-icons-png.flaticon.com/512/1822/1822921.png',
    maxScore: MOCKED_COURSES.filter((course) => course.technologies.includes('Django')).length,
    group: 'Web Frameworks',
  },
];

const SKILL_GROUPS = [
  {
    name: 'Languages',
    skills: [],
  },
  {
    name: 'Frontend',
    skills: [],
  },
  {
    name: 'Databases',
    skills: [],
  },
  {
    name: 'Others',
    skills: [],
  },
  {
    name: 'Data Science',
    skills: [],
  },
  {
    name: 'Web Frameworks',
    skills: [],
  },
];

const USER_SKILLS = [
  {
    user: 'user',
    skill: 'Scala',
    score: 1,
  },
  {
    user: 'user',
    skill: 'Python',
    score: 1,
  },
  {
    user: 'user',
    skill: 'MySQL',
    score: 1,
  },
  {
    user: 'user',
    skill: 'Math',
    score: 1,
  },
  {
    user: 'user',
    skill: 'English',
    score: 1,
  },
];

module.exports = {
  async up(db) {
    const groups = await Promise.all(
      SKILL_GROUPS.map(async (group) => {
        return { ...(await db.collection('skillGroups').insertOne(group)), name: group.name };
      }),
    );
    const skills = await Promise.all(
      SKILLS.map(async (skill) => {
        const { group: groupName } = skill;
        const { insertedId: groupId } = groups.filter((group) => group.name === groupName)[0];
        skill.group = groupId;
        const inserted = await db.collection('skills').insertOne(skill);
        const { insertedId: skillId } = inserted;
        db.collection('skillGroups').findOneAndUpdate(
          { _id: groupId },
          { $push: { skills: skillId } },
        );
        return { ...inserted, name: skill.name, group: groupId };
      }),
    );
    const tests = await Promise.all(
      TESTS.map((test) => {
        return db.collection('tests').insertOne(test);
      }),
    );
    await Promise.all(
      MOCKED_COURSES.map((course, index) => {
        course.test = tests[index].insertedId;
        const techs = course.technologies.map(
          (techName) => skills.filter((skill) => skill.name === techName)[0].insertedId,
        );
        course.technologies = techs;
        const requiredSkills = course.requiredSkills.map(
          (techName) => skills.filter((skill) => skill.name === techName)[0].insertedId,
        );
        course.requiredSkills = requiredSkills;
        return db.collection('courses').insertOne(course);
      }),
    );
    const users = await Promise.all(
      DEFAULT_USERS_DOCS.map(async (doc) => {
        const salt = bcrypt.genSaltSync(SALT_ROUNDS);
        doc.passwordHash = bcrypt.hashSync(doc.passwordHash, salt);
        return { ...(await db.collection('users').insertOne(doc)), username: doc.username };
      }),
    );
    const employees = await Promise.all(
      DEFAULT_EMPLOYEES.map(async (doc) => {
        const salt = bcrypt.genSaltSync(SALT_ROUNDS);
        doc.passwordHash = bcrypt.hashSync(doc.passwordHash, salt);
        doc.managerId = users[1].insertedId;
        return { ...(await db.collection('users').insertOne(doc)), username: doc.username };
      }),
    );
    const totalUsers = users.concat(employees);
    const userSkills = await Promise.all(
      USER_SKILLS.map(async (uskill) => {
        const newSkillRelation = { ...uskill };
        newSkillRelation.skill = skills.filter(
          (skill) => skill.name === newSkillRelation.skill,
        )[0].insertedId;
        newSkillRelation.user = totalUsers.filter(
          (user) => user.username === newSkillRelation.user,
        )[0].insertedId;
        return {
          ...(await db.collection('userSkills').insertOne(newSkillRelation)),
          ...newSkillRelation,
        };
      }),
    );
    // ONLY FOR 'USER'
    const userId = totalUsers.filter((u) => u.username === 'user')[0].insertedId;
    const langGroupId = groups.filter((group) => group.name === 'Languages')[0].insertedId;
    const dbGroupId = groups.filter((group) => group.name === 'Databases')[0].insertedId;
    const othersGroupId = groups.filter((group) => group.name === 'Others')[0].insertedId;
    const TECHS = [
      {
        group: langGroupId,
        achievedSkills: userSkills
          .filter(
            (uskill) =>
              uskill.user === userId &&
              skills.filter((skill) => skill.insertedId === uskill.skill)[0].group === langGroupId,
          )
          .map((uskill) => uskill.insertedId),
        isPrimary: true,
      },
      {
        group: dbGroupId,
        achievedSkills: userSkills
          .filter(
            (uskill) =>
              uskill.user === userId &&
              skills.filter((skill) => skill.insertedId === uskill.skill)[0].group === dbGroupId,
          )
          .map((uskill) => uskill.insertedId),
        isPrimary: false,
      },
      {
        group: othersGroupId,
        achievedSkills: userSkills
          .filter(
            (uskill) =>
              uskill.user === userId &&
              skills.filter((skill) => skill.insertedId === uskill.skill)[0].group ===
                othersGroupId,
          )
          .map((uskill) => uskill.insertedId),
        isPrimary: false,
      },
    ];
    await db.collection('users').findOneAndUpdate(
      { _id: userId },
      {
        $set: {
          technologies: TECHS,
        },
      },
    );
    await db.createCollection('clientCourses');
  },

  async down(db) {
    await db.collection('skillGroups').drop();
    await db.collection('skills').drop();
    await db.collection('courses').drop();
    await db.collection('clientCourses').drop();
    await db.collection('users').drop();
    await db.collection('tests').drop();
    await db.collection('userSkills').drop();
  },
};
