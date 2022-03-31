/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */

const TESTS = [
  {
    title: 'Test Salesforce',
    questions: [
      {
        qN: 1,
        question:
          'Which of the following fields CANNOT be a controlling field for Dependent Picklists?',
        answers: [
          { variant: 'Standard Picklist', aN: 1 },
          { variant: 'Custom Picklist', aN: 2 },
          {
            variant: 'Custom Multi-Select Picklist',
            aN: 3,
          },
          {
            variant: 'Standard Checkbox',
            aN: 4,
          },
          {
            variant: 'Custom Checkbox',
            aN: 5,
          },
        ],
        correctAnswer: 3,
      },
      {
        qN: 2,
        question:
          'Cloudy Computing is experiencing a large number of support tickets from Salesforce users. What feature could you, as the Administrator, leverage to enable easier troubleshooting?',
        answers: [
          { variant: 'Delegated Administration', aN: 1 },
          { variant: 'Administrators Can Log In As Any User', aN: 2 },
          {
            variant: 'Modify All Data',
            aN: 3,
          },
          {
            variant: 'Remote Access',
            aN: 4,
          },
        ],
        correctAnswer: 2,
      },
    ],
    timeout: 90000,
  },
  {
    title: 'Test NodeJS',
    questions: [
      {
        qN: 1,
        question: 'Which method is responsible for reading data from the file synchronously?',
        answers: [
          { variant: 'read()', aN: 1 },
          { variant: 'readFile()', aN: 2 },
          {
            variant: 'readSync()',
            aN: 3,
          },
          {
            variant: 'readFileAsync()',
            aN: 4,
          },
          {
            variant: 'readFileSync()',
            aN: 5,
          },
        ],
        correctAnswer: 5,
      },
      {
        qN: 2,
        question: 'How can I write data asynchronously to a file?',
        answers: [
          { variant: 'fs.writeFileSync()', aN: 1 },
          { variant: 'fs.write()', aN: 2 },
          {
            variant: 'fs.writeSync()',
            aN: 3,
          },
          {
            variant: 'fs.writeFileAsync()',
            aN: 4,
          },
          {
            variant: 'fs.writeFile()',
            aN: 5,
          },
        ],
        correctAnswer: 5,
      },
    ],
    timeout: 90000,
  },
  {
    title: 'Test Ruby',
    questions: [
      {
        qN: 1,
        question: 'Where is an empty variable specified (without a value)?',
        answers: [
          { variant: 'some = 0', aN: 1 },
          { variant: 'some = ""', aN: 2 },
          {
            variant: 'some',
            aN: 3,
          },
          {
            variant: 'All options',
            aN: 4,
          },
          {
            variant: 'some = nil',
            aN: 5,
          },
        ],
        correctAnswer: 5,
      },
      {
        qN: 2,
        question: 'What is the difference between puts and print?',
        answers: [
          { variant: 'Nothing, both do the same thing', aN: 1 },
          { variant: 'puts without skipping a line, and print with a skip', aN: 2 },
          {
            variant: 'puts lets you output variables, and print only text.',
            aN: 3,
          },
          {
            variant: 'print without skipping a line, and puts with a skip',
            aN: 4,
          },
        ],
        correctAnswer: 4,
      },
    ],
    timeout: 90000,
  },
  {
    title: 'Test Vue JS',
    questions: [
      {
        qN: 1,
        question: 'How do I output the message variable in HTML?',
        answers: [
          { variant: '{message}', aN: 1 },
          { variant: 'Add an attribute to the tag :value= "message"', aN: 2 },
          {
            variant: 'message',
            aN: 3,
          },
          {
            variant: '{{message}}',
            aN: 4,
          },
        ],
        correctAnswer: 4,
      },
      {
        qN: 2,
        question: 'How do I access the text variable in an object?',
        answers: [
          { variant: 'this>text', aN: 1 },
          { variant: 'this=>text', aN: 2 },
          {
            variant: 'this->text',
            aN: 3,
          },
          {
            variant: 'that.text',
            aN: 4,
          },
          {
            variant: 'this.text',
            aN: 5,
          },
        ],
        correctAnswer: 5,
      },
    ],
    timeout: 90000,
  },
  {
    title: 'Test Django',
    questions: [
      {
        qN: 1,
        question: 'Each new app must be registered in...',
        answers: [
          { variant: 'in the file urls.py', aN: 1 },
          { variant: 'in the file views.py', aN: 2 },
          {
            variant: 'no app registration required',
            aN: 3,
          },
          {
            variant: 'on the command line via a file setting.py',
            aN: 4,
          },
          {
            variant: 'in the file setting.py by adding INSTALLED_APPS to the list',
            aN: 5,
          },
        ],
        correctAnswer: 5,
      },
      {
        qN: 2,
        question: 'Django is a framework for what language?',
        answers: [
          { variant: 'Java', aN: 1 },
          { variant: 'Jinja', aN: 2 },
          {
            variant: 'C++',
            aN: 3,
          },
          {
            variant: "Django is a programming language. He's on his own",
            aN: 4,
          },
          {
            variant: 'Python',
            aN: 5,
          },
        ],
        correctAnswer: 5,
      },
    ],
    timeout: 90000,
  },
  {
    title: 'Test Unity',
    questions: [
      {
        qN: 1,
        question: 'Why do I need the Navigator tab?',
        answers: [
          { variant: 'it creates artificial intelligence for the game', aN: 1 },
          { variant: 'it is used to create game objects on the stage', aN: 2 },
          {
            variant: 'it allows you to specify objects that you can walk on',
            aN: 3,
          },
          {
            variant: 'this tab allows you to create agents',
            aN: 4,
          },
          {
            variant:
              'the tab allows you to create an agent and a surface on which the agent can move',
            aN: 5,
          },
        ],
        correctAnswer: 5,
      },
      {
        qN: 2,
        question: 'What is the Hierarchy tab responsible for?',
        answers: [
          { variant: 'It displays various errors and labels during the game', aN: 1 },
          { variant: 'It displays the game scene', aN: 2 },
          {
            variant: 'It contains all the materials for the project',
            aN: 3,
          },
          {
            variant: 'It contains properties for objects',
            aN: 4,
          },
          {
            variant: 'It contains objects on the stage',
            aN: 5,
          },
        ],
        correctAnswer: 5,
      },
    ],
    timeout: 90000,
  },
  {
    title: 'Test Android',
    questions: [
      {
        qN: 1,
        question: 'Which class is responsible for tooltips?',
        answers: [
          { variant: 'Hint', aN: 1 },
          { variant: 'Text', aN: 2 },
          {
            variant: 'Alert',
            aN: 3,
          },
          {
            variant: 'Message',
            aN: 4,
          },
          {
            variant: 'Toast',
            aN: 5,
          },
        ],
        correctAnswer: 5,
      },
      {
        qN: 2,
        question: 'What programs are required to work with Android?',
        answers: [
          { variant: 'Android Studio Only', aN: 1 },
          { variant: 'JDK only', aN: 2 },
          {
            variant: 'JDK, Android Studio и Visual Studio',
            aN: 3,
          },
          {
            variant: 'JDK, Android Studio',
            aN: 4,
          },
        ],
        correctAnswer: 4,
      },
    ],
    timeout: 90000,
  },
  {
    title: 'Test Bootstrap',
    questions: [
      {
        qN: 1,
        question: 'How many grids are there in the Grid system?',
        answers: [
          { variant: '10', aN: 1 },
          { variant: '8', aN: 2 },
          {
            variant: '14',
            aN: 3,
          },
          {
            variant: '12',
            aN: 4,
          },
        ],
        correctAnswer: 4,
      },
      {
        qN: 2,
        question: 'Bootstrap allows you to create..',
        answers: [
          { variant: 'Responsive websites', aN: 1 },
          { variant: 'Sites with various JavaScript widgets', aN: 2 },
          {
            variant: 'Sites with built-in JavaScript plugins',
            aN: 3,
          },
          {
            variant: 'All of the above',
            aN: 4,
          },
        ],
        correctAnswer: 4,
      },
    ],
    timeout: 90000,
  },
  {
    title: 'Test SQL',
    questions: [
      {
        qN: 1,
        question: 'Which SQL statement is responsible for deleting the entire table?',
        answers: [
          { variant: 'DELETE', aN: 1 },
          { variant: 'ALTER', aN: 2 },
          {
            variant: 'TRUNCATE',
            aN: 3,
          },
          {
            variant: 'UPDATE',
            aN: 4,
          },
          {
            variant: 'DROP',
            aN: 5,
          },
        ],
        correctAnswer: 5,
      },
      {
        qN: 2,
        question: 'Where is the table created correctly?',
        answers: [
          { variant: 'CREATE NEW TABLE table_name', aN: 1 },
          { variant: 'CREATE NEW table_name', aN: 2 },
          {
            variant: 'CREATE table_name',
            aN: 3,
          },
          {
            variant: 'TABLE table_name',
            aN: 4,
          },
          {
            variant: 'CREATE TABLE table_name',
            aN: 5,
          },
        ],
        correctAnswer: 5,
      },
    ],
    timeout: 90000,
  },
  {
    title: 'Test jQuery',
    questions: [
      {
        qN: 1,
        question: 'What is the difference between html () and text () functions?',
        answers: [
          { variant: 'There are no differences between them', aN: 1 },
          {
            variant:
              'The html () function should contain only html code, but you can also include HTML or just plain text in the text.',
            aN: 2,
          },
          {
            variant: 'If you put html code in text (), you will get an error',
            aN: 3,
          },
          {
            variant:
              'When adding HTML via the html() function, everything will work, but when adding them to the text() function, they will not be processed',
            aN: 4,
          },
        ],
        correctAnswer: 4,
      },
      {
        qN: 2,
        question: 'jQuery is designed for...',
        answers: [
          { variant: 'creating markup on a page', aN: 1 },
          { variant: 'creating page styles', aN: 2 },
          {
            variant: 'writing server-side scripts',
            aN: 3,
          },
          {
            variant: 'writing client scripts',
            aN: 4,
          },
        ],
        correctAnswer: 4,
      },
    ],
    timeout: 90000,
  },
];

const MATERIALS = [
  {
    content: [
      {
        _id: '7',
        stage: 1,
        content: ['https://www.youtube.com/watch?v=hUtOd16GqSI'],
      },
      {
        _id: '8',
        stage: 2,
        content: ['https://www.youtube.com/watch?v=iDUFjnvj2O8'],
      },
    ],
    technologies: ['Salesforce'],
  },
  {
    content: [
      {
        _id: '7',
        stage: 1,
        content: ['https://www.youtube.com/watch?v=3aGSqasVPsI&t=3320s'],
      },
      {
        _id: '8',
        stage: 2,
        content: ['https://www.youtube.com/watch?v=ivDjWYcKDZI'],
      },
    ],
    technologies: ['NodeJS'],
  },
  {
    content: [
      {
        _id: '7',
        stage: 1,
        content: ['https://www.youtube.com/watch?v=1MYbDz06B1E'],
      },
      {
        _id: '8',
        stage: 2,
        content: ['https://www.youtube.com/watch?v=3hnnldZjIHE'],
      },
    ],
    technologies: ['Ruby'],
  },
  {
    content: [
      {
        _id: '7',
        stage: 1,
        content: ['https://www.youtube.com/watch?v=OlnwgS-gk8Y'],
      },
      {
        _id: '8',
        stage: 2,
        content: ['https://www.youtube.com/watch?v=p059z-0JTFg'],
      },
    ],
    technologies: ['VueJS'],
  },
  {
    content: [
      {
        _id: '7',
        stage: 1,
        content: ['https://www.youtube.com/watch?v=6K83dgjkQNw'],
      },
      {
        _id: '8',
        stage: 2,
        content: ['https://www.youtube.com/watch?v=w4nrT7emiVc'],
      },
    ],
    technologies: ['Django'],
  },
  {
    content: [
      {
        _id: '7',
        stage: 1,
        content: ['https://www.youtube.com/watch?v=nRGOW9O7ARk'],
      },
      {
        _id: '8',
        stage: 2,
        content: ['https://www.youtube.com/watch?v=KKw5sly7_b8'],
      },
    ],
    technologies: ['Unity'],
  },
  {
    content: [
      {
        _id: '7',
        stage: 1,
        content: ['https://www.youtube.com/watch?v=tZvjSl9dswg'],
      },
      {
        _id: '8',
        stage: 2,
        content: ['https://www.youtube.com/watch?v=zzV2aML_zNg'],
      },
    ],
    technologies: ['Android'],
  },
  {
    content: [
      {
        _id: '7',
        stage: 1,
        content: ['https://www.youtube.com/watch?v=TZSY6rDUDrE'],
      },
      {
        _id: '8',
        stage: 2,
        content: ['https://www.youtube.com/watch?v=-A5LxeKi3Aw'],
      },
    ],
    technologies: ['Bootstrap'],
  },
  {
    content: [
      {
        _id: '7',
        stage: 1,
        content: ['https://www.youtube.com/watch?v=lapMmGGFS7k'],
      },
      {
        _id: '8',
        stage: 2,
        content: ['https://www.youtube.com/watch?v=BfaKBs_eQXw'],
      },
    ],
    technologies: ['SQL'],
  },
  {
    content: [
      {
        _id: '7',
        stage: 1,
        content: ['https://www.youtube.com/watch?v=e5Oib9wkZHs'],
      },
      {
        _id: '8',
        stage: 2,
        content: ['https://www.youtube.com/watch?v=9Pqf_AIT2ZI'],
      },
    ],
    technologies: ['jQuery'],
  },
];

const MOCKED_COURSES = [
  {
    title: 'Salesforce',
    description: 'Salesforce for people',
    technologies: ['Salesforce'],
    requiredSkills: ['Math', 'English'],
    materials: MATERIALS[0].content,
    test: '',
    avatar: 'https://techcrunch.com/wp-content/uploads/2015/02/salesforce-earnings.png?resize=768',
  },
  {
    title: 'NodeJS',
    description: 'NodeJS for junior',
    technologies: ['NodeJS'],
    requiredSkills: ['Math', 'English'],
    materials: MATERIALS[1].content,
    test: '',
    avatar:
      'https://avatars.mds.yandex.net/i?id=8c95c4a532c4b5a8d9895ccd94408b04-5876970-images-thumbs&n=13',
  },
  {
    title: 'Ruby',
    description: 'Ruby for developers',
    technologies: ['Ruby'],
    requiredSkills: ['Math', 'English'],
    materials: MATERIALS[2].content,
    test: '',
    avatar: 'https://miro.medium.com/max/1200/1*vD8E78oDxrJmHJ6VALmlSQ.png',
  },
  {
    title: 'Vue JS',
    description: 'Vue JS for beginners',
    technologies: ['VueJS'],
    requiredSkills: ['Math', 'English'],
    materials: MATERIALS[3].content,
    test: '',
    avatar:
      'https://hsto.org/getpro/habr/post_images/d4c/9e7/fe6/d4c9e7fe6d3eda87c2ae0c8275cf62b8.png',
  },
  {
    title: 'Django',
    description: 'Django for beginners',
    technologies: ['Django'],
    requiredSkills: ['Math', 'English'],
    materials: MATERIALS[4].content,
    test: '',
    avatar: 'https://ghorz.com/static/website/images/utils/django.png',
  },
  {
    title: 'Unity',
    description: 'Unity course',
    technologies: ['Unity'],
    requiredSkills: ['Math', 'English'],
    materials: MATERIALS[5].content,
    test: '',
    avatar:
      'https://sun9-1.userapi.com/impf/qlsuWr2Hs_KQ1barQRsroLm4kPgOBikzZugHUA/WMsXc19KPe8.jpg?size=0x0&quality=90&proxy=1&sign=a123263684154a9d51a8cfe51342a950&c_uniq_tag=EsQq0KZpzYubfshPX2sTe1fCF1GLano0QdZPIc9JK_c&type=video_thumb',
  },
  {
    title: 'Android',
    description: 'Android with Java',
    technologies: ['Android'],
    requiredSkills: ['Math', 'English'],
    materials: MATERIALS[6].content,
    test: '',
    avatar: 'http://neutr10.com/wp-content/uploads/2015/12/android-java.jpg',
  },
  {
    title: 'Bootstrap for frontend',
    description: 'Bootstrap for frontend',
    technologies: ['Bootstrap'],
    requiredSkills: ['Math', 'English'],
    materials: MATERIALS[7].content,
    test: '',
    avatar: 'https://denis-creative.com/wp-content/uploads/2018/02/bootstrap4.jpg',
  },
  {
    title: 'SQL',
    description: 'SQL for backend developers',
    technologies: ['SQL'],
    requiredSkills: ['Math', 'English'],
    materials: MATERIALS[8].content,
    test: '',
    avatar: 'https://cdn.hackersandslackers.com/2019/02/SQLpt1-3.jpg',
  },
  {
    title: 'jQuery',
    description: 'jQuery',
    technologies: ['jQuery'],
    requiredSkills: ['Math', 'English'],
    materials: MATERIALS[9].content,
    test: '',
    avatar:
      'https://codecondo.com/wp-content/uploads/2014/02/11-Free-jQuery-Photo-Gallery-Lightbox-Plugins.jpg',
  },
];

module.exports = {
  async up(db) {
    const skills = await db.collection('skills').find().toArray();

    const tests = await Promise.all(
      TESTS.map((test) => {
        return db.collection('tests').insertOne(test);
      }),
    );
    await Promise.all(
      MOCKED_COURSES.map((course, index) => {
        course.test = tests[index].insertedId;

        const techs = course.technologies.map(
          (techName) => skills.filter((skill) => skill.name === techName)[0]._id,
        );
        course.technologies = techs;

        techs.map((tech) => {
          return db.collection('skills').findOneAndUpdate({ _id: tech }, { $inc: { maxScore: 1 } });
        });

        const requiredSkills = course.requiredSkills.map(
          (techName) => skills.filter((skill) => skill.name === techName)[0].insertedId,
        );
        course.requiredSkills = requiredSkills;
        return db.collection('courses').insertOne(course);
      }),
    );
  },

  async down(db) {
    const courses = await Promise.all(
      MOCKED_COURSES.map((course) => {
        return db.collection('courses').findOneAndDelete({ title: course.title });
      }),
    );
    await Promise.all(
      courses.map((course) => {
        return db.collection('clientCourses').findOneAndDelete({ course: course.value._id });
      }),
    );
    await Promise.all(
      courses.map(({ value: { technologies } }) =>
        technologies.map(async (techId) => {
          const uskill = await db
            .collection('userSkills')
            .findOneAndUpdate(
              { skill: techId },
              { $inc: { score: -1 } },
              { returnNewDocument: true },
            );
          if (!uskill.score) {
            await db.collection('userSkills').findOneAndDelete({ skill: techId });
          }
          await db.collection('skills').findOneAndUpdate(
            { _id: techId },
            {
              $inc: {
                maxScore: -1,
              },
            },
          );
        }),
      ),
    );
    await Promise.all(
      TESTS.map((test) => {
        return db.collection('tests').findOneAndDelete({ title: test.title });
      }),
    );
  },
};
