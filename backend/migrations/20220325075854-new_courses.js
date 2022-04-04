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
        content: [
          'Salesforce is an American company, the developer of the CRM system of the same name, provided to customers exclusively using the SaaS model. Under the name Force the company provides a PaaS system for self-development of applications, and under the brand Database — cloud database management system. Among the products acquired as a result of acquisitions are the Heroku platform service, the MuleESB service bus, the replicated Tableau data visualization system, and the Slack corporate messenger.',
        ],
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
        content: [
          'Ruby is a dynamic, reflective, interpreted high—level programming language[8][9]. The language has an operating system-independent implementation of multithreading, strong dynamic typing, garbage collector and many other features[⇨]. In terms of syntax features, it is close to the Perl and Eiffel languages, in terms of an object-oriented approach, it is similar to Smalltalk. Also some features of the language are taken from Python, Lisp, Dylan and Club.',
        ],
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
        content: [
          'Android is an operating system for smartphones, tablets, e-books, digital players, wristwatches, fitness bracelets, game consoles, laptops, netbooks, smartbooks, Google glasses, televisions, projectors and other devices (in 2015, support for car entertainment systems and household robots appeared).',
        ],
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
    description:
      'Salesforce, Inc. is an American cloud-based software company headquartered in San Francisco, California. It provides customer relationship management (CRM) software and applications focused on sales, customer service, marketing automation, analytics, and application development.',
    technologies: ['Salesforce'],
    requiredSkills: ['Math', 'English'],
    materials: MATERIALS[0].content,
    test: '',
    avatar: 'https://techcrunch.com/wp-content/uploads/2015/02/salesforce-earnings.png?resize=768',
  },
  {
    title: 'NodeJS',
    description:
      'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
    technologies: ['NodeJS', 'JavaScript'],
    requiredSkills: ['Math', 'English'],
    materials: MATERIALS[1].content,
    test: '',
    avatar:
      'https://avatars.mds.yandex.net/i?id=8c95c4a532c4b5a8d9895ccd94408b04-5876970-images-thumbs&n=13',
  },
  {
    title: 'Ruby',
    description:
      'Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types. It was developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.',
    technologies: ['Ruby'],
    requiredSkills: ['Math', 'English'],
    materials: MATERIALS[2].content,
    test: '',
    avatar: 'https://miro.medium.com/max/1200/1*vD8E78oDxrJmHJ6VALmlSQ.png',
  },
  {
    title: 'Vue JS',
    description:
      'Vue.js (commonly referred to as Vue; pronounced "view") is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.',
    technologies: ['VueJS', 'JavaScript'],
    requiredSkills: ['Math', 'English'],
    materials: MATERIALS[3].content,
    test: '',
    avatar:
      'https://hsto.org/getpro/habr/post_images/d4c/9e7/fe6/d4c9e7fe6d3eda87c2ae0c8275cf62b8.png',
  },
  {
    title: 'Django',
    description:
      'Django is a Python-based free and open-source web framework that follows the model–template–views (MTV) architectural pattern.',
    technologies: ['Django', 'Python'],
    requiredSkills: ['Math', 'English'],
    materials: MATERIALS[4].content,
    test: '',
    avatar: 'https://ghorz.com/static/website/images/utils/django.png',
  },
  {
    title: 'Unity',
    description:
      'UNITY is a programming language constructed by K. Mani Chandy and Jayadev Misra for their book Parallel Program Design: A Foundation. It is a theoretical language which focuses on what, instead of where, when or how.',
    technologies: ['Unity', 'C#'],
    requiredSkills: ['Math', 'English'],
    materials: MATERIALS[5].content,
    test: '',
    avatar:
      'https://sun9-1.userapi.com/impf/qlsuWr2Hs_KQ1barQRsroLm4kPgOBikzZugHUA/WMsXc19KPe8.jpg?size=0x0&quality=90&proxy=1&sign=a123263684154a9d51a8cfe51342a950&c_uniq_tag=EsQq0KZpzYubfshPX2sTe1fCF1GLano0QdZPIc9JK_c&type=video_thumb',
  },
  {
    title: 'Android',
    description:
      'Android is a mobile operating system based on a modified version of the Linux kernel and other open source software, designed primarily for touchscreen mobile devices such as smartphones and tablets.',
    technologies: ['Android', 'Java'],
    requiredSkills: ['Math', 'English'],
    materials: MATERIALS[6].content,
    test: '',
    avatar: 'http://neutr10.com/wp-content/uploads/2015/12/android-java.jpg',
  },
  {
    title: 'Bootstrap for frontend',
    description:
      'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
    technologies: ['Bootstrap', 'HTML'],
    requiredSkills: ['Math', 'English'],
    materials: MATERIALS[7].content,
    test: '',
    avatar: 'https://denis-creative.com/wp-content/uploads/2018/02/bootstrap4.jpg',
  },
  {
    title: 'SQL',
    description:
      'SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data, i.e. data incorporating relations among entities and variables.',
    technologies: ['SQL'],
    requiredSkills: ['Math', 'English'],
    materials: MATERIALS[8].content,
    test: '',
    avatar: 'https://cdn.hackersandslackers.com/2019/02/SQLpt1-3.jpg',
  },
  {
    title: 'jQuery',
    description:
      'jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.',
    technologies: ['jQuery', 'JavaScript'],
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
    const deletedCourses = (
      await Promise.all(
        MOCKED_COURSES.map((course) =>
          db.collection('courses').findOneAndDelete({ title: course.title }),
        ),
      )
    ).filter((doc) => doc.value);

    const deletedClientCourses = (
      await Promise.all(
        deletedCourses.map((course) =>
          db.collection('clientCourses').findOneAndDelete({ course: course.value?._id }),
        ),
      )
    ).filter((doc) => doc.value);

    // decrement skills max scores
    await Promise.all(
      deletedCourses.map(async ({ value: course }) => {
        const technologies = course?.technologies;
        technologies?.map(async (techId) => {
          await db.collection('skills').findOneAndUpdate(
            { _id: techId },
            {
              $inc: {
                maxScore: -1,
              },
            },
          );
        });
      }),
    );

    // decrement userskill scores if client course completed
    await Promise.all(
      deletedClientCourses.map(async ({ value: clientCourse }) => {
        if (clientCourse?.status === 'completed') {
          const [
            {
              value: { technologies: relatedCourseTechs },
            },
          ] = deletedCourses.filter(
            ({ value: course }) => course._id.toString() === clientCourse.course.toString(),
          );
          const { technologies } = await db.collection('users').findOne({ _id: clientCourse.user });
          relatedCourseTechs.map(async (techId) => {
            const { value: uskill } = await db
              .collection('userSkills')
              .findOneAndUpdate(
                { skill: techId, user: clientCourse.user },
                { $inc: { score: -1 } },
                { returnDocument: 'after' },
              );

            if (uskill?.score < 1) {
              const {
                value: { _id: deletedUserSkillId },
              } = await db.collection('userSkills').findOneAndDelete({ _id: uskill._id });

              const newTechs = technologies
                .map((techGroup) => {
                  const indexToDelete = techGroup.achievedSkills.findIndex(
                    (skill) => skill === deletedUserSkillId,
                  );
                  if (indexToDelete > -1) {
                    techGroup.achievedSkills.splice(indexToDelete, 1);
                    if (!techGroup.achievedSkills.length) {
                      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                      techGroup === undefined;
                    }
                  }
                  return techGroup;
                })
                // only groups left
                .filter((group) => group);

              await db.collection('users').findOneAndUpdate(
                { _id: uskill.user },
                {
                  $set: {
                    technologies: newTechs,
                  },
                },
              );
            }
          });
        }
      }),
    );

    // deleting related tests
    await Promise.all(
      TESTS.map((test) => {
        return db.collection('tests').findOneAndDelete({ title: test.title });
      }),
    );
  },
};
