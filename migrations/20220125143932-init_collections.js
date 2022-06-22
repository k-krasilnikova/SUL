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
        question: 'null >= 0',
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
    timeout: 1200,
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
    timeout: 900,
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
      {
        qN: 5,
        question: "a = ['foo', 'bar', 'baz', 'qux', 'quux', 'corge']/b print(a[4::-2])",
        answers: [
          { variant: "['quux']", aN: 1 },
          { variant: "['quux', 'qux', 'baz', 'foo']", aN: 2 },
          { variant: "['quux', 'baz', 'foo']", aN: 3 },
        ],
        correctAnswer: 1,
      },
    ],
    timeout: 600,
  },
  {
    title: 'Test for "Kotlin" course',
    questions: [
      {
        qN: 1,
        question: 'What function is used for data output?',
        answers: [
          { variant: 'write()', aN: 1 },
          { variant: 'system.out()', aN: 2 },
          { variant: 'log()', aN: 3 },
          { variant: 'print()', aN: 4 },
        ],
        correctAnswer: 4,
      },
      {
        qN: 2,
        question: 'What type of data does not exist in Kotlin?',
        answers: [
          { variant: 'Int', aN: 1 },
          { variant: 'Array', aN: 2 },
          {
            variant: 'List',
            aN: 3,
          },
          {
            variant: 'Object',
            aN: 4,
          },
          {
            variant: 'All the listed data types exist',
            aN: 5,
          },
        ],
        correctAnswer: 5,
      },
      {
        qN: 3,
        question: 'Where is the variable created incorrectly?',
        answers: [
          { variant: 'var num = 50;', aN: 1 },
          { variant: 'var number: Float = 45.001f', aN: 2 },
          {
            variant: "var char = 'S'",
            aN: 3,
          },
          {
            variant: 'var isGet = null',
            aN: 4,
          },
          {
            variant: 'val str: String = null',
            aN: 5,
          },
        ],
        correctAnswer: 5,
      },
      {
        qN: 4,
        question: 'Is the variable written correctly? var number: Float = 45',
        answers: [
          { variant: "Yes, that's right", aN: 1 },
          { variant: 'Not true, because after 45 it is necessary to add the character "f"', aN: 2 },
        ],
        correctAnswer: 2,
      },
      {
        qN: 5,
        question: 'Is the variable written correctly? var number: Float = 45',
        answers: [
          { variant: "Yes, that's right", aN: 1 },
          { variant: 'Not true, because after 45 it is necessary to add the character "f"', aN: 2 },
        ],
        correctAnswer: 2,
      },
    ],
    timeout: 600,
  },
  {
    title: 'test for course "Scala"',
    questions: [
      {
        qN: 1,
        question: 'The first versions of the language were created this year:',
        answers: [
          { variant: '2000', aN: 1 },
          { variant: '2003', aN: 2 },
          { variant: '2006', aN: 3 },
        ],
        correctAnswer: 2,
      },
      {
        qN: 2,
        question:
          'An important component of the Scala development infrastructure is an automatic build tool:',
        answers: [
          { variant: 'Bts', aN: 1 },
          { variant: 'Sbt', aN: 2 },
        ],
        correctAnswer: 2,
      },
      {
        qN: 3,
        question: 'The language provides a lightweight syntax for defining such and functions:',
        answers: [
          { variant: 'objective', aN: 1 },
          { variant: 'visible', aN: 2 },
          {
            variant: 'anonymous',
            aN: 3,
          },
        ],
        correctAnswer: 3,
      },
      {
        qN: 4,
        question: 'Scala can interact with code written in:',
        answers: [
          { variant: 'Java', aN: 1 },
          { variant: 'Ruby', aN: 2 },
          { variant: 'Haskell', aN: 3 },
        ],
        correctAnswer: 1,
      },
      {
        qN: 5,
        question: 'Scala can interact with code written in:',
        answers: [
          { variant: 'Java', aN: 1 },
          { variant: 'Ruby', aN: 2 },
          { variant: 'Haskell', aN: 3 },
        ],
        correctAnswer: 1,
      },
    ],
    timeout: 600,
  },
  {
    title: 'Test for course "Go"',
    questions: [
      {
        qN: 1,
        question: 'Does the switch case operator exist in the Go language?',
        answers: [
          { variant: "No, it doesn't exist", aN: 1 },
          { variant: 'There is an analogue of it', aN: 2 },
          { variant: 'Yes, there is', aN: 3 },
        ],
        correctAnswer: 3,
      },
      {
        qN: 2,
        question: 'Where is the comment correctly specified?',
        answers: [
          { variant: '# Comment', aN: 1 },
          { variant: '/* Comment */', aN: 2 },
          {
            variant: '## Comment',
            aN: 3,
          },
          {
            variant: '// Comment',
            aN: 4,
          },
        ],
        correctAnswer: 4,
      },
      {
        qN: 3,
        question: 'Is it necessary to write "package"?',
        answers: [
          { variant: 'No, not necessarily', aN: 1 },
          { variant: 'Required only for the main file', aN: 2 },
          {
            variant: 'Always a must',
            aN: 3,
          },
        ],
        correctAnswer: 3,
      },
      {
        qN: 4,
        question: 'The Go language is...',
        answers: [
          { variant: 'interpreted', aN: 1 },
          { variant: 'compiled', aN: 2 },
        ],
        correctAnswer: 2,
      },
      {
        qN: 5,
        question: 'The Go language is...',
        answers: [
          { variant: 'interpreted', aN: 1 },
          { variant: 'compiled', aN: 2 },
        ],
        correctAnswer: 2,
      },
    ],
    timeout: 600,
  },
  {
    title: 'Test for course "C++"',
    questions: [
      {
        qN: 1,
        question: 'The class is:',
        answers: [
          { variant: 'any user-defined data type', aN: 1 },
          {
            variant: 'a user-defined data type that combines data and processing functions',
            aN: 2,
          },
          {
            variant: 'the structure for which the program has functions for working with it',
            aN: 3,
          },
        ],
        correctAnswer: 2,
      },
      {
        qN: 2,
        question: 'What is called a constructor?',
        answers: [
          {
            variant:
              'a method whose name matches the name of the class and which is called automatically when creating a class object',
            aN: 1,
          },
          {
            variant:
              'a method whose name matches the name of the class and which is called automatically when declaring the class (before creating the class object)',
            aN: 2,
          },
          {
            variant:
              'a method whose name does not necessarily match the name of the class and which is called when creating a class object',
            aN: 3,
          },
        ],
        correctAnswer: 1,
      },
      {
        qN: 3,
        question: 'The object is',
        answers: [
          { variant: 'A variable containing a pointer to a class', aN: 1 },
          { variant: 'Instance of the class', aN: 2 },
          {
            variant: 'A class that contains data and methods for processing it',
            aN: 3,
          },
        ],
        correctAnswer: 2,
      },
      {
        qN: 4,
        question: 'What is called a destructor?',
        answers: [
          { variant: 'The method that destroys the object', aN: 1 },
          { variant: 'The method that deletes the object', aN: 2 },
          { variant: 'A method that frees up the memory occupied by an object', aN: 3 },
        ],
        correctAnswer: 3,
      },
      {
        qN: 5,
        question: 'What is called a destructor?',
        answers: [
          { variant: 'The method that destroys the object', aN: 1 },
          { variant: 'The method that deletes the object', aN: 2 },
          { variant: 'A method that frees up the memory occupied by an object', aN: 3 },
        ],
        correctAnswer: 3,
      },
    ],
    timeout: 600,
  },
  {
    title: 'Test for course "C#"',
    questions: [
      {
        qN: 1,
        question: 'How to increment a number?',
        answers: [
          { variant: '++', aN: 1 },
          { variant: '-', aN: 2 },
          { variant: '%%', aN: 3 },
        ],
        correctAnswer: 1,
      },
      {
        qN: 2,
        question: 'How to find the square root of the number x',
        answers: [
          { variant: 'Sqrt(x)', aN: 1 },
          { variant: 'Summ.Koren(x);', aN: 2 },
          {
            variant: 'Math.Sqrt(x);',
            aN: 3,
          },
        ],
        correctAnswer: 3,
      },
      {
        qN: 3,
        question: 'Notation of the operator "NOT"',
        answers: [
          { variant: 'No', aN: 1 },
          { variant: '!', aN: 2 },
          {
            variant: '!=',
            aN: 3,
          },
        ],
        correctAnswer: 2,
      },
      {
        qN: 4,
        question: 'What will c be equal to if int a = 10; int b = 4; int c = a %b;',
        answers: [
          { variant: '2', aN: 1 },
          { variant: '3', aN: 2 },
          { variant: '1', aN: 3 },
        ],
        correctAnswer: 1,
      },
      {
        qN: 5,
        question: 'What will c be equal to if int a = 10; int b = 4; int c = a %b;',
        answers: [
          { variant: '2', aN: 1 },
          { variant: '3', aN: 2 },
          { variant: '1', aN: 3 },
        ],
        correctAnswer: 1,
      },
    ],
    timeout: 600,
  },
  {
    title: 'English test',
    questions: [
      {
        qN: 1,
        question: 'Choose the most appropriate answer! “What does your husband do?”',
        answers: [
          { variant: 'He is feeding the dog.', aN: 1 },
          { variant: 'He is a doctor', aN: 2 },
          { variant: 'Yes, he does.', aN: 3 },
        ],
        correctAnswer: 2,
      },
      {
        qN: 2,
        question: 'What is an alternative question in English?',
        answers: [
          { variant: 'A question that requires a yes or No answer.', aN: 1 },
          { variant: 'A special question to any member of the proposal.', aN: 2 },
          {
            variant: 'A question involving a choice between two qualities, objects or actions.',
            aN: 3,
          },
        ],
        correctAnswer: 3,
      },
      {
        qN: 3,
        question: '2What is an alternative question in English?',
        answers: [
          { variant: 'A question that requires a yes or No answer.', aN: 1 },
          { variant: 'A special question to any member of the proposal.', aN: 2 },
          {
            variant: 'A question involving a choice between two qualities, objects or actions.',
            aN: 3,
          },
        ],
        correctAnswer: 3,
      },
      {
        qN: 4,
        question: '3What is an alternative question in English?',
        answers: [
          { variant: 'A question that requires a yes or No answer.', aN: 1 },
          { variant: 'A special question to any member of the proposal.', aN: 2 },
          {
            variant: 'A question involving a choice between two qualities, objects or actions.',
            aN: 3,
          },
        ],
        correctAnswer: 3,
      },
      {
        qN: 5,
        question: '4What is an alternative question in English?',
        answers: [
          { variant: 'A question that requires a yes or No answer.', aN: 1 },
          { variant: 'A special question to any member of the proposal.', aN: 2 },
          {
            variant: 'A question involving a choice between two qualities, objects or actions.',
            aN: 3,
          },
        ],
        correctAnswer: 3,
      },
    ],
    timeout: 300,
  },
  {
    title: 'Test for QA',
    questions: [
      {
        qN: 1,
        question: 'What is QA',
        answers: [
          { variant: 'QA is two letters', aN: 1 },
          { variant: 'QA is programming language', aN: 2 },
          {
            variant:
              'QA is a way of preventing mistakes and defects in manufactured products and avoiding problems when delivering products or services to customers',
            aN: 3,
          },
        ],
        correctAnswer: 3,
      },
      {
        qN: 2,
        question: 'The main feature of the tester is',
        answers: [
          { variant: 'beauty', aN: 1 },
          { variant: 'speed', aN: 2 },
          {
            variant: 'attentiveness',
            aN: 3,
          },
        ],
        correctAnswer: 3,
      },
      {
        qN: 3,
        question: '2The main feature of the tester is',
        answers: [
          { variant: 'beauty', aN: 1 },
          { variant: 'speed', aN: 2 },
          {
            variant: 'attentiveness',
            aN: 3,
          },
        ],
        correctAnswer: 3,
      },
      {
        qN: 4,
        question: '3The main feature of the tester is',
        answers: [
          { variant: 'beauty', aN: 1 },
          { variant: 'speed', aN: 2 },
          {
            variant: 'attentiveness',
            aN: 3,
          },
        ],
        correctAnswer: 3,
      },
      {
        qN: 5,
        question: '4The main feature of the tester is',
        answers: [
          { variant: 'beauty', aN: 1 },
          { variant: 'speed', aN: 2 },
          {
            variant: 'attentiveness',
            aN: 3,
          },
        ],
        correctAnswer: 3,
      },
    ],
    timeout: 300,
  },
];

const DEFAULT_STACK_MEMBERS = [
  {
    name: 'Full-stack JS developer',
    relatedCourses: ['JS for beginners'],
  },
  {
    name: 'Manager',
    relatedCourses: [],
  },
  {
    name: 'Back-end JS developer',
    relatedCourses: [],
  },
  {
    name: 'QA',
    relatedCourses: ['QA for everyone'],
  },
  {
    name: 'QA Automation',
    relatedCourses: [],
  },
  {
    name: 'Java developer',
    relatedCourses: ['Java for Professionals'],
  },
  {
    name: 'C# developer',
    relatedCourses: ['C# for students'],
  },
  {
    name: 'Python developer',
    relatedCourses: ['Python for kids'],
  },
  {
    name: 'C++ developer',
    relatedCourses: ['C++ for kettle'],
  },
  {
    name: 'Scala developer',
    relatedCourses: ['Scala'],
  },
  {
    name: 'Kotlin developer',
    relatedCourses: ['Kotlin'],
  },
  {
    name: 'GO developer',
    relatedCourses: ['GO'],
  },
];

const DEFAULT_USERS_DOCS = [
  {
    username: 'admin',
    passwordHash: 'admin',
    email: 'admin@itechart-group.com',
    role: 'admin',
    rank: 3,
    stack: ['Full-stack JS developer'],
    firstName: 'Admin',
    lastName: 'Admin',
    position: 'Software Engineer',
    technologies: [],
    group: 'U4.D4.mocked',
    employees: [],
    pendingCourses: [],
    avatar: 'https://ucarecdn.com/b059b948-63fe-4a6b-aef2-9b3ebeab605b/admin.png',
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
    rank: 3,
    stack: ['Full-stack JS developer', 'GO developer'],
    firstName: 'Manager',
    lastName: 'Manager',
    position: 'Team Manager',
    technologies: [],
    group: 'U4.D4.mocked',
    employees: [],
    pendingCourses: [],
    avatar: 'https://ucarecdn.com/4d836994-de4e-4c48-b750-430f5ff0783d/manager.png',
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
    email: 'k.krasilnikova@itechart-group.com',
    role: 'employee',
    rank: 2,
    stack: ['Full-stack JS developer', 'Manager'],
    firstName: 'Katsiaryna',
    lastName: 'Krasilnikova',
    position: 'Team Manager / Software Engineer',
    technologies: [],
    group: 'U4.D4.FrontendRocks.T2',
    employees: [],
    pendingCourses: [],
    avatar: 'https://ucarecdn.com/d1542137-f9f4-496d-ba18-28525c9817d8/empl.png',
    birthday: '1970-01-01T00:00:00Z',
    skype: 'live:123123123123',
    phone: '+375(33)1231212',
    managerId: '',
  },
  {
    username: 'user1',
    passwordHash: 'user1',
    email: 'user@itechart-group.com',
    role: 'employee',
    rank: 1,
    stack: ['C# developer', 'C++ developer'],
    firstName: 'User1',
    lastName: 'User1',
    position: 'Software Engineer',
    technologies: [],
    group: 'U4.D4.mocked',
    employees: [],
    pendingCourses: [],
    avatar: 'https://ucarecdn.com/d1542137-f9f4-496d-ba18-28525c9817d8/empl.png',
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
          'https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=1&ab_channel=CodeWithHarry',
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
          'https://www.youtube.com/watch?v=IU4-19ofajg&list=PLQAt0m1f9OHvv2wxPGSCWjgy1qER_FvB6&index=1',
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
        content: ['https://www.youtube.com/watch?v=30tchn0TjaM'],
      },
      {
        _id: '8',
        stage: 2,
        content: ['https://www.youtube.com/watch?v=F9UC9DY-vIU'],
      },
    ],
    technologies: ['Kotlin'],
  },
  {
    content: [
      {
        _id: '7',
        stage: 1,
        content: [
          'https://www.youtube.com/watch?v=cSYHjWJ5Q8g&list=PLtX3ATr7wKKlhdq3unb2TiyoOcT8jVUGC&index=2',
        ],
      },
      {
        _id: '8',
        stage: 2,
        content: [
          'https://www.youtube.com/watch?v=Zd3bAA9TRk8&list=PLtX3ATr7wKKlhdq3unb2TiyoOcT8jVUGC&index=3',
        ],
      },
    ],
    technologies: ['Scala'],
  },
  {
    content: [
      {
        _id: '7',
        stage: 1,
        content: [
          'https://www.youtube.com/watch?v=9Pk7xAT_aCU&list=PLrCZzMib1e9q-X5V9pTM6J0AemRWseM7I',
        ],
      },
      {
        _id: '8',
        stage: 2,
        content: [
          'https://www.youtube.com/watch?v=9Ia16QOY8rk&list=PLrCZzMib1e9q-X5V9pTM6J0AemRWseM7I&index=2',
        ],
      },
    ],
    technologies: ['Go'],
  },
  {
    content: [
      {
        _id: '7',
        stage: 1,
        content: [
          'https://www.youtube.com/watch?v=NEuUxy4Skpc&list=PLQOaTSbfxUtCrKs0nicOg2npJQYSPGO9r&index=2',
        ],
      },
      {
        _id: '8',
        stage: 2,
        content: [
          'https://www.youtube.com/watch?v=pwUNLjgw7lY&list=PLQOaTSbfxUtCrKs0nicOg2npJQYSPGO9r&index=6',
        ],
      },
    ],
    technologies: ['C++'],
  },
  {
    content: [
      {
        _id: '7',
        stage: 1,
        content: [
          'https://www.youtube.com/watch?v=l77oxzJUhMQ&list=PLQOaTSbfxUtD6kMmAYc8Fooqya3pjLs1N&index=2',
        ],
      },
      {
        _id: '8',
        stage: 2,
        content: [
          'https://www.youtube.com/watch?v=JTn3m-8eMx4&list=PLQOaTSbfxUtD6kMmAYc8Fooqya3pjLs1N&index=3',
        ],
      },
    ],
    technologies: ['C#'],
  },
  {
    content: [
      {
        _id: '7',
        stage: 1,
        content: [
          'https://www.youtube.com/watch?v=Hp9wUEDasY4&list=PLD6SPjEPomaustGSgYNsn3V62BTQeH85X',
        ],
      },
      {
        _id: '8',
        stage: 2,
        content: [
          'https://www.youtube.com/watch?v=jMCOyUgKhqU&list=PLD6SPjEPomaustGSgYNsn3V62BTQeH85X&index=2',
        ],
      },
    ],
    technologies: ['English'],
  },
  {
    content: [
      {
        _id: '7',
        stage: 1,
        content: [
          'https://www.youtube.com/watch?v=Xx1lRYj_NsY&list=PLRs8EELOYKc7DYIQixlV1s4EH5SR3TdNB',
        ],
      },
      {
        _id: '8',
        stage: 2,
        content: [
          'https://www.youtube.com/watch?v=VyjlrahaP-4&list=PLRs8EELOYKc7DYIQixlV1s4EH5SR3TdNB&index=2',
        ],
      },
    ],
    technologies: ['QA'],
  },
];

const MOCKED_COURSES = [
  {
    title: 'JS for beginners',
    description: 'Go from zero to ninjas in this JavaScript for Beginners complete course',
    technologies: [
      { skill: 'JavaScript', points: 3 },
      { skill: 'HTML', points: 2 },
      { skill: 'CSS', points: 2 },
    ],
    requiredSkills: ['HTML', 'CSS'],
    complexity: 1,
    materials: MATERIALS[0].content,
    test: '',
    avatar: 'https://ucarecdn.com/6c336531-1fe4-4daf-ba45-28b76b45ff46/js.png',
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
    materials: MATERIALS[1].content,
    test: '',
    avatar: 'https://www.filepicker.io/api/file/t12BZqmRoulvCTDhoYie',
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
    materials: MATERIALS[2].content,
    test: '',
    avatar: 'https://ucarecdn.com/0168bc80-6cd0-444f-b173-70ef1ff1071c/python.png',
  },
  {
    title: 'Kotlin',
    description:
      'Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference',
    technologies: [
      { skill: 'Kotlin', points: 3 },
      { skill: 'Java', points: 1 },
    ],
    requiredSkills: ['Math', 'English'],
    complexity: 2,
    materials: MATERIALS[3].content,
    test: '',
    avatar: 'https://ucarecdn.com/f388ccb9-1fc6-4803-97b4-ea7b25629ac8/kotlin.png',
  },
  {
    title: 'Scala',
    description:
      'Scala is a strong statically typed general-purpose programming language which supports both object-oriented programming and functional programming.',
    technologies: [{ skill: 'Scala', points: 2 }],
    requiredSkills: ['Math', 'English'],
    complexity: 2,
    materials: MATERIALS[4].content,
    test: '',
    avatar: 'https://ucarecdn.com/e5f818ce-1eef-47c8-91a9-7f78d5e96194/scala.png',
  },
  {
    title: 'GO',
    description: 'Go is a statically typed, compiled programming language designed at Google.',
    technologies: [{ skill: 'Go', points: 2 }],
    requiredSkills: ['Math', 'English'],
    complexity: 2,
    materials: MATERIALS[5].content,
    test: '',
    avatar: 'https://i.pinimg.com/originals/c8/90/63/c89063ba4d2373292f6f31de67932d33.png',
  },
  {
    title: 'C++ for kettle',
    description:
      'С++  is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".',
    technologies: [{ skill: 'C++', points: 1 }],
    requiredSkills: ['Math', 'English'],
    complexity: 3,
    materials: MATERIALS[6].content,
    test: '',
    avatar:
      'https://avatars.mds.yandex.net/get-zen_doc/1581919/pub_5fc2503363d574041507497d_5fc2538b39eab6574df1d3c3/scale_1200',
  },
  {
    title: 'C# for students',
    description:
      'C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.',
    technologies: [{ skill: 'C#', points: 2 }],
    requiredSkills: ['Math', 'English'],
    complexity: 1,
    materials: MATERIALS[7].content,
    test: '',
    avatar: 'https://it-black.ru/wp-content/uploads/2019/01/obrabotka-iskljuchenij-v-si-charp.png',
  },
  {
    title: 'English for developers',
    description:
      'Why does the developer needs English. The answer is obvious: English is needed to understand terminology, work with English-language interfaces, read technical documentation, study professional literature, conferences and webinars',
    technologies: [{ skill: 'English', points: 2 }],
    requiredSkills: ['English'],
    complexity: 1,
    materials: MATERIALS[8].content,
    test: '',
    avatar: 'https://ddnews.ru/wp-content/uploads/2020/11/eMrKS_cSuXE.jpg',
  },
  {
    title: 'QA for everyone',
    description:
      'Quality assurance (QA) is a way of preventing mistakes and defects in manufactured products and avoiding problems when delivering products or services to customers.',
    technologies: [{ skill: 'English', points: 2 }],
    requiredSkills: ['English'],
    complexity: 1,
    materials: MATERIALS[9].content,
    test: '',
    avatar: 'https://pbs.twimg.com/media/EAyWcddWkAAD_tO.jpg',
  },
];

const SKILLS = [
  {
    name: 'Java',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968282.png',
    maxScore: 5,
    group: 'Common',
  },
  {
    name: 'JavaScript',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    maxScore: 5,
    group: 'Common',
  },
  {
    name: 'TypeScript',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png',
    maxScore: 5,
    group: 'Common',
  },
  {
    name: 'PHP',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968332.png',
    maxScore: 5,
    group: 'Common',
  },
  {
    name: 'HTML',
    image: 'https://cdn-icons-png.flaticon.com/512/569/569835.png',
    maxScore: 5,
    group: 'Frontend',
  },
  {
    name: 'ReactJS',
    image: 'https://cdn-icons-png.flaticon.com/512/45/45082.png',
    maxScore: 5,
    group: 'Frontend',
  },
  {
    name: 'CSS',
    image: 'https://cdn-icons-png.flaticon.com/512/174/174854.png',
    maxScore: 5,
    group: 'Frontend',
  },
  {
    name: 'Angular',
    image: 'https://cdn-icons-png.flaticon.com/512/3522/3522248.png',
    maxScore: 6,
    group: 'Frontend',
  },
  {
    name: 'MySQL',
    image: 'https://cdn-icons-png.flaticon.com/512/1199/1199128.png',
    maxScore: 3, // for the default level porpose (testing only)
    group: 'Databases',
  },
  {
    name: 'Kotlin',
    image: 'https://cdn-icons-png.flaticon.com/512/154/154878.png',
    maxScore: 6,
    group: 'Common',
  },
  {
    name: 'Scala',
    image: 'https://cdn-icons-png.flaticon.com/512/919/919834.png',
    maxScore: 6, // for the default level porpose (testing only)
    group: 'Common',
  },
  {
    name: 'Python',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
    maxScore: 7, // for the default level porpose (testing only)
    group: 'Common',
  },
  {
    name: 'Math',
    image: 'https://cdn-icons-png.flaticon.com/512/43/43102.png',
    maxScore: 3,
    group: 'Others',
  },
  {
    name: 'English',
    image: 'https://cdn-icons-png.flaticon.com/512/197/197374.png',
    maxScore: 6,
    group: 'Others',
  },
  {
    name: 'SQL',
    image: 'https://cdn-icons-png.flaticon.com/512/28/28954.png',
    maxScore: 4,
    group: 'Databases',
  },
  {
    name: 'Pandas',
    image: 'https://cdn-icons-png.flaticon.com/512/48/48674.png',
    maxScore: 6,
    group: 'Data Science',
  },
  {
    name: 'Django',
    image: 'https://cdn-icons-png.flaticon.com/512/1822/1822921.png',
    maxScore: 6,
    group: 'Web Frameworks',
  },
  {
    name: 'Go',
    image:
      'https://avatars.mds.yandex.net/i?id=2a00000179febd6edd1bc26bbbf1d9af7c2b-4435263-images-thumbs&n=13&exp=1',
    maxScore: 7,
    group: 'Web Frameworks',
  },
  {
    name: 'C++',
    image: 'https://coderrect.com/wp-content/uploads/2020/09/cpp_logo1-3.png',
    maxScore: 8,
    group: 'Web Frameworks',
  },
  {
    name: 'C#',
    image:
      'https://yt3.ggpht.com/ytc/AKedOLTJzpyndCHuGt9hgSIwy61XcSJ2W0RnFpNVlV62lQ=s900-c-k-c0x00ffffff-no-rj',
    maxScore: 8,
    group: 'Web Frameworks',
  },
  {
    name: 'Salesforce',
    image:
      'https://marketingtechnews.net/wp-content/uploads/sites/6/2020/03/SALESFORCE_LOGO_NEW_F2QUoeb-scaled.jpg',
    maxScore: 5,
    group: 'Web Frameworks',
  },
  {
    name: 'NodeJS',
    image: 'https://www.logolynx.com/images/logolynx/cb/cbbf0bae5516456e79b8c31f67bcb837.jpeg',
    maxScore: 5,
    group: 'Data Science',
  },
  {
    name: 'Ruby',
    image: 'https://cdn.iconscout.com/icon/free/png-512/ruby-2752084-2284901.png',
    maxScore: 5,
    group: 'Common',
  },
  {
    name: 'VueJS',
    image: 'https://pbs.twimg.com/profile_images/920561100604825600/k8sQjqio.jpg',
    maxScore: 5,
    group: 'Web Frameworks',
  },
  {
    name: 'Unity',
    image:
      'https://yt3.ggpht.com/a/AATXAJxUeEd5HL-LChGVjqoCWKggaWptOGF7S_dG2g0=s900-c-k-c0xffffffff-no-rj-mo',
    maxScore: 5,
    group: 'Common',
  },
  {
    name: 'Android',
    image: 'https://i.playground.ru/p/17DpGFS55XPqjLrO8-B3Bw.jpeg',
    maxScore: 2,
    group: 'Common',
  },
  {
    name: 'Bootstrap',
    image:
      'https://yt3.ggpht.com/ytc/AKedOLSh4sUIflnFeLMihKm3yhnHArZMikNvcVMT80Ax=s900-c-k-c0x00ffffff-no-rj',
    maxScore: 3,
    group: 'Web Frameworks',
  },
  {
    name: 'jQuery',
    image: 'https://fb.ru/misc/i/gallery/45074/2221539.jpg',
    maxScore: 2,
    group: 'Web Frameworks',
  },
];

const SKILL_GROUPS = [
  {
    name: 'Common',
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
    const courses = await Promise.all(
      MOCKED_COURSES.map(async (course, index) => {
        course.test = tests[index].insertedId;
        const techs = course.technologies.map((tech) => ({
          skill: skills.filter((skill) => skill.name === tech.skill)[0].insertedId,
          points: tech.points,
        }));
        course.technologies = techs;
        const requiredSkills = course.requiredSkills.map(
          (techName) => skills.filter((skill) => skill.name === techName)[0].insertedId,
        );
        course.requiredSkills = requiredSkills;
        const inserted = await db.collection('courses').insertOne(course);
        return { ...inserted, name: course.title };
      }),
    );
    const stackMembers = await Promise.all(
      DEFAULT_STACK_MEMBERS.map(async (member) => {
        const courseIds = member.relatedCourses.map(
          (courseName) => courses.filter((course) => course.name === courseName)[0].insertedId,
        );
        const newMember = { ...member, relatedCourses: courseIds };
        return { ...(await db.collection('stackMembers').insertOne(newMember)), name: member.name };
      }),
    );
    const users = await Promise.all(
      DEFAULT_USERS_DOCS.map(async (doc) => {
        const salt = bcrypt.genSaltSync(SALT_ROUNDS);
        doc.passwordHash = bcrypt.hashSync(doc.passwordHash, salt);
        const stack = doc.stack.map((memberName, index) => ({
          member: stackMembers.filter((member) => member.name === memberName)[0].insertedId,
          isPrimary: index === 0,
        }));
        const newUserDoc = { ...doc, stack };
        return { ...(await db.collection('users').insertOne(newUserDoc)), username: doc.username };
      }),
    );
    const employees = await Promise.all(
      DEFAULT_EMPLOYEES.map(async (doc) => {
        const salt = bcrypt.genSaltSync(SALT_ROUNDS);
        doc.passwordHash = bcrypt.hashSync(doc.passwordHash, salt);
        doc.managerId = users[1].insertedId;
        const stack = doc.stack.map((memberName, index) => ({
          member: stackMembers.filter((member) => member.name === memberName)[0].insertedId,
          isPrimary: index === 0,
        }));
        const newUserDoc = { ...doc, stack };
        return { ...(await db.collection('users').insertOne(newUserDoc)), username: doc.username };
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
    const managerId = totalUsers.filter((u) => u.username === 'manager')[0].insertedId;
    const langGroupId = groups.filter((group) => group.name === 'Common')[0].insertedId;
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
    await db.collection('users').findOneAndUpdate(
      { _id: managerId },
      {
        $set: {
          technologies: TECHS,
        },
      },
    );
    await db.createCollection('clientCourses');
    await db.createCollection('accessTokenBlacklist');
  },

  async down(db) {
    await db.dropCollection('courses');
    await db.dropCollection('skillGroups');
    await db.dropCollection('skills');
    await db.dropCollection('tests');
    await db.dropCollection('clientCourses');
    await db.dropCollection('users');
    await db.dropCollection('userSkills');
    await db.dropCollection('stackMembers');
    await db.dropCollection('accessTokenBlacklist');
  },
  COURSES: MOCKED_COURSES,
};
