/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
const { COURSE_DATA, OLD_MATERIALS } = require('./20220411135726-added-types-for-materials');

const MATERIALS_WITH_EXERCISES = [
  {
    content: [
      {
        stage: 1,
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=VuN8qwZoego&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=1&ab_channel=WesBos',
          },
        ],
      },
      {
        stage: 2,
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=xu87YWbr4X0&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=2&ab_channel=WesBos',
          },
        ],
        exercise: {
          eN: 1,
          title: 'CSS in JS',
          task: 'Write code to select an element with the data-widget-name attribute from the document and read its value.',
          code: '<html>\n <body>\n  <div data-widget-name="menu">Choose the genre</div>\n  <script>/* your code */</script>\n </body>\n</html>',
        },
      },
      {
        stage: 3,
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=AHLNzv13c2I&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=3&ab_channel=WesBos',
          },
        ],
      },
      {
        stage: 4,
        content: [
          {
            type: 'presentation',
            material:
              'https://docs.google.com/presentation/d/1I6Q6ZGkMatpwcF3QJ9k31jdKkQM6WwnBfz-P2eW9Z0I',
          },
        ],
        exercise: {
          eN: 1,
          title: 'CSS in JS',
          task: 'Write code to select an element with the data-widget-name attribute from the document and read its value.',
          code: '<html>\n <body>\n  <div data-widget-name="menu">Choose the genre</div>\n  <script>/* your code */</script>\n </body>\n</html>',
        },
      },
    ],
  },
  {
    content: [
      {
        stage: 1,
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=1&ab_channel=CodeWithHarry',
          },
        ],
      },
      {
        stage: 2,
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=zIdg7hkqNE0&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=2&ab_channel=CodeWithHarry',
          },
        ],
      },
      {
        stage: 3,
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=X0zdAG7gfgs&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=3&ab_channel=CodeWithHarry',
          },
        ],
        exercise: {
          eN: 1,
          title: 'CSS in JS',
          task: 'Write code to select an element with the data-widget-name attribute from the document and read its value.',
          code: '<html>\n <body>\n  <div data-widget-name="menu">Choose the genre</div>\n  <script>/* your code */</script>\n </body>\n</html>',
        },
      },
      {
        stage: 4,
        content: [
          {
            type: 'presentation',
            material: 'https://docs.google.com/presentation/d/1GV7Hg6AWAsHVCrxzQ7J4XY0-t_feuleb',
          },
        ],
      },
    ],
  },
  {
    content: [
      {
        stage: 1,
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=IU4-19ofajg&list=PLQAt0m1f9OHvv2wxPGSCWjgy1qER_FvB6&index=1',
          },
        ],
      },
      {
        stage: 2,
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=mOQBZq9WCCY&list=PLQAt0m1f9OHvv2wxPGSCWjgy1qER_FvB6&index=2&ab_channel=egoroff_channel',
          },
        ],
      },
    ],
  },
  {
    content: [
      {
        stage: 1,
        content: [
          {
            type: 'video',
            material: 'https://www.youtube.com/watch?v=30tchn0TjaM',
          },
        ],
      },
      {
        stage: 2,
        content: [
          {
            type: 'video',
            material: 'https://www.youtube.com/watch?v=F9UC9DY-vIU',
          },
        ],
        exercise: {
          eN: 1,
          title: 'CSS in JS',
          task: 'Write code to select an element with the data-widget-name attribute from the document and read its value.',
          code: '<html>\n <body>\n  <div data-widget-name="menu">Choose the genre</div>\n  <script>/* your code */</script>\n </body>\n</html>',
        },
      },
    ],
  },
  {
    content: [
      {
        stage: 1,
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=cSYHjWJ5Q8g&list=PLtX3ATr7wKKlhdq3unb2TiyoOcT8jVUGC&index=2',
          },
        ],
      },
      {
        stage: 2,
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=Zd3bAA9TRk8&list=PLtX3ATr7wKKlhdq3unb2TiyoOcT8jVUGC&index=3',
          },
        ],
      },
    ],
  },
  {
    content: [
      {
        stage: 1,
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=9Pk7xAT_aCU&list=PLrCZzMib1e9q-X5V9pTM6J0AemRWseM7I',
          },
        ],
      },
      {
        stage: 2,
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=9Ia16QOY8rk&list=PLrCZzMib1e9q-X5V9pTM6J0AemRWseM7I&index=2',
          },
        ],
      },
    ],
  },
  {
    content: [
      {
        stage: 1,
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=NEuUxy4Skpc&list=PLQOaTSbfxUtCrKs0nicOg2npJQYSPGO9r&index=2',
          },
        ],
      },
      {
        stage: 2,
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=pwUNLjgw7lY&list=PLQOaTSbfxUtCrKs0nicOg2npJQYSPGO9r&index=6',
          },
        ],
        exercise: {
          eN: 1,
          title: 'CSS in JS',
          task: 'Write code to select an element with the data-widget-name attribute from the document and read its value.',
          code: '<html>\n <body>\n  <div data-widget-name="menu">Choose the genre</div>\n  <script>/* your code */</script>\n </body>\n</html>',
        },
      },
    ],
  },
  {
    content: [
      {
        stage: 1,
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=l77oxzJUhMQ&list=PLQOaTSbfxUtD6kMmAYc8Fooqya3pjLs1N&index=2',
          },
        ],
      },
      {
        stage: 2,
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=JTn3m-8eMx4&list=PLQOaTSbfxUtD6kMmAYc8Fooqya3pjLs1N&index=3',
          },
        ],
      },
    ],
  },
  {
    content: [
      {
        stage: 1,
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=Hp9wUEDasY4&list=PLD6SPjEPomaustGSgYNsn3V62BTQeH85X',
          },
        ],
      },
      {
        stage: 2,
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=jMCOyUgKhqU&list=PLD6SPjEPomaustGSgYNsn3V62BTQeH85X&index=2',
          },
        ],
      },
    ],
  },
  {
    content: [
      {
        stage: 1,
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=Xx1lRYj_NsY&list=PLRs8EELOYKc7DYIQixlV1s4EH5SR3TdNB',
          },
        ],
        exercise: {
          eN: 1,
          title: 'CSS in JS',
          task: 'Write code to select an element with the data-widget-name attribute from the document and read its value.',
          code: '<html>\n <body>\n  <div data-widget-name="menu">Choose the genre</div>\n  <script>/* your code */</script>\n </body>\n</html>',
        },
      },
      {
        stage: 2,
        content: [
          {
            type: 'video',
            material:
              'https://www.youtube.com/watch?v=VyjlrahaP-4&list=PLRs8EELOYKc7DYIQixlV1s4EH5SR3TdNB&index=2',
          },
        ],
      },
    ],
  },
  {
    content: [
      {
        stage: 1,
        content: [
          {
            type: 'video',
            material:
              'Salesforce is an American company, the developer of the CRM system of the same name, provided to customers exclusively using the SaaS model. Under the name Force the company provides a PaaS system for self-development of applications, and under the brand Database — cloud database management system. Among the products acquired as a result of acquisitions are the Heroku platform service, the MuleESB service bus, the replicated Tableau data visualization system, and the Slack corporate messenger.',
          },
        ],
      },
      {
        stage: 2,
        content: [
          {
            type: 'video',
            material: 'https://www.youtube.com/watch?v=iDUFjnvj2O8',
          },
        ],
        exercise: {
          eN: 1,
          title: 'CSS in JS',
          task: 'Write code to select an element with the data-widget-name attribute from the document and read its value.',
          code: '<html>\n <body>\n  <div data-widget-name="menu">Choose the genre</div>\n  <script>/* your code */</script>\n </body>\n</html>',
        },
      },
      {
        stage: 3,
        content: [
          {
            type: 'presentation',
            material: 'https://docs.google.com/presentation/d/1harvK9akrzVRFkxULs9sDiYijhTjxD1Z',
          },
        ],
        exercise: {
          eN: 1,
          title: 'CSS in JS',
          task: 'Write code to select an element with the data-widget-name attribute from the document and read its value.',
          code: '<html>\n <body>\n  <div data-widget-name="menu">Choose the genre</div>\n  <script>/* your code */</script>\n </body>\n</html>',
        },
      },
    ],
  },
  {
    content: [
      {
        stage: 1,
        content: [
          {
            type: 'video',
            material: 'https://www.youtube.com/watch?v=3aGSqasVPsI&t=3320s',
          },
        ],
      },
      {
        stage: 2,
        content: [
          {
            type: 'video',
            material: 'https://www.youtube.com/watch?v=ivDjWYcKDZI',
          },
        ],
      },
      {
        stage: 3,
        content: [
          {
            type: 'presentation',
            material: 'https://docs.google.com/presentation/d/1D1FerCeCtJONphoUwWhWxPk5RnKcBC8M',
          },
        ],
      },
    ],
  },
  {
    content: [
      {
        stage: 1,
        content: [
          'Ruby is a dynamic, reflective, interpreted high—level programming language[8][9]. The language has an operating system-independent implementation of multithreading, strong dynamic typing, garbage collector and many other features[⇨]. In terms of syntax features, it is close to the Perl and Eiffel languages, in terms of an object-oriented approach, it is similar to Smalltalk. Also some features of the language are taken from Python, Lisp, Dylan and Club.',
        ],
      },
      {
        stage: 2,
        content: [
          {
            type: 'video',
            material: 'https://www.youtube.com/watch?v=3hnnldZjIHE',
          },
        ],
      },
    ],
  },
  {
    content: [
      {
        stage: 1,
        content: [
          {
            type: 'video',
            material: 'https://www.youtube.com/watch?v=OlnwgS-gk8Y',
          },
        ],
      },
      {
        stage: 2,
        content: [
          {
            type: 'video',
            material: 'https://www.youtube.com/watch?v=p059z-0JTFg',
          },
        ],
      },
    ],
  },
  {
    content: [
      {
        stage: 1,
        content: [
          {
            type: 'video',
            material: 'https://www.youtube.com/watch?v=6K83dgjkQNw',
          },
        ],
        exercise: {
          eN: 1,
          title: 'CSS in JS',
          task: 'Write code to select an element with the data-widget-name attribute from the document and read its value.',
          code: '<html>\n <body>\n  <div data-widget-name="menu">Choose the genre</div>\n  <script>/* your code */</script>\n </body>\n</html>',
        },
      },
      {
        stage: 2,
        content: [
          {
            type: 'video',
            material: 'https://www.youtube.com/watch?v=w4nrT7emiVc',
          },
        ],
        exercise: {
          eN: 1,
          title: 'CSS in JS',
          task: 'Write code to select an element with the data-widget-name attribute from the document and read its value.',
          code: '<html>\n <body>\n  <div data-widget-name="menu">Choose the genre</div>\n  <script>/* your code */</script>\n </body>\n</html>',
        },
      },
    ],
  },
  {
    content: [
      {
        stage: 1,
        content: [{ type: 'video', material: 'https://www.youtube.com/watch?v=nRGOW9O7ARk' }],
      },
      {
        stage: 2,
        content: [
          {
            type: 'video',
            material: 'https://www.youtube.com/watch?v=KKw5sly7_b8',
          },
        ],
      },
    ],
  },
  {
    content: [
      {
        stage: 1,
        content: [
          {
            type: 'plain',
            material:
              'Android is an operating system for smartphones, tablets, e-books, digital players, wristwatches, fitness bracelets, game consoles, laptops, netbooks, smartbooks, Google glasses, televisions, projectors and other devices (in 2015, support for car entertainment systems and household robots appeared).',
          },
        ],
      },
      {
        stage: 2,
        content: [
          {
            type: 'video',
            material: 'https://www.youtube.com/watch?v=zzV2aML_zNg',
          },
        ],
      },
    ],
  },
  {
    content: [
      {
        stage: 1,
        content: [
          {
            type: 'video',
            material: 'https://www.youtube.com/watch?v=TZSY6rDUDrE',
          },
        ],
        exercise: {
          eN: 1,
          title: 'CSS in JS',
          task: 'Write code to select an element with the data-widget-name attribute from the document and read its value.',
          code: '<html>\n <body>\n  <div data-widget-name="menu">Choose the genre</div>\n  <script>/* your code */</script>\n </body>\n</html>',
        },
      },
      {
        stage: 2,
        content: [
          {
            type: 'video',
            material: 'https://www.youtube.com/watch?v=-A5LxeKi3Aw',
          },
        ],
        exercise: {
          eN: 1,
          title: 'CSS in JS',
          task: 'Write code to select an element with the data-widget-name attribute from the document and read its value.',
          code: '<html>\n <body>\n  <div data-widget-name="menu">Choose the genre</div>\n  <script>/* your code */</script>\n </body>\n</html>',
        },
      },
    ],
  },
  {
    content: [
      {
        stage: 1,
        content: [
          {
            type: 'video',
            material: 'https://www.youtube.com/watch?v=lapMmGGFS7k',
          },
        ],
        exercise: {
          eN: 1,
          title: 'CSS in JS',
          task: 'Write code to select an element with the data-widget-name attribute from the document and read its value.',
          code: '<html>\n <body>\n  <div data-widget-name="menu">Choose the genre</div>\n  <script>/* your code */</script>\n </body>\n</html>',
        },
      },
      {
        stage: 2,
        content: [
          {
            type: 'video',
            material: 'https://www.youtube.com/watch?v=BfaKBs_eQXw',
          },
        ],
        exercise: {
          eN: 1,
          title: 'CSS in JS',
          task: 'Write code to select an element with the data-widget-name attribute from the document and read its value.',
          code: '<html>\n <body>\n  <div data-widget-name="menu">Choose the genre</div>\n  <script>/* your code */</script>\n </body>\n</html>',
        },
      },
    ],
  },
  {
    content: [
      {
        stage: 1,
        content: [
          {
            type: 'video',
            material: 'https://www.youtube.com/watch?v=e5Oib9wkZHs',
          },
        ],
        exercise: {
          eN: 1,
          title: 'CSS in JS',
          task: 'Write code to select an element with the data-widget-name attribute from the document and read its value.',
        },
      },
      {
        stage: 2,
        content: [
          {
            type: 'video',
            material: 'https://www.youtube.com/watch?v=9Pqf_AIT2ZI',
          },
        ],
      },
    ],
  },
];

module.exports = {
  async up(db) {
    await Promise.all(
      COURSE_DATA.map((course, index) =>
        db
          .collection('courses')
          .findOneAndUpdate(
            { title: course.title },
            { $set: { materials: MATERIALS_WITH_EXERCISES[index].content } },
          ),
      ),
    );
  },

  async down(db) {
    await Promise.all(
      COURSE_DATA.map((course, index) =>
        db.collection('courses').findOneAndUpdate(
          { title: course.title },
          {
            $set: {
              materials: OLD_MATERIALS[index].content,
            },
          },
        ),
      ),
    );
  },
};
