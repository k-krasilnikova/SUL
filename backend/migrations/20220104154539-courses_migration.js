const MOCKED_CPOURSES = [
  {
    title: 'JS for begginers',
    description: 'basic course for biginers',
    technology: ['js', 'html', 'css'],
    requiredSkills: ['learn to read'],
    duration: '123124679',
    materials: [
      {
        content: [
          {
            stage: 1,
            content:
              'https://www.youtube.com/watch?v=VuN8qwZoego&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=1&ab_channel=WesBos',
            isCopleted: false,
          },
          {
            stage: 2,
            content:
              'https://www.youtube.com/watch?v=xu87YWbr4X0&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=2&ab_channel=WesBos',
            isCopleted: false,
          },
          {
            stage: 3,
            content:
              'https://www.youtube.com/watch?v=AHLNzv13c2I&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=3&ab_channel=WesBos',
            isCopleted: false,
          },
        ],
        technology: ['js', 'html', 'css'],
      },
    ],
    testLink: 'https://www.idrlabs.com/hogwarts-house/test.php',
  },
  {
    title: 'Java for Profi ',
    description: 'basic course for biginers',
    technology: ['java', 'sql'],
    requiredSkills: ['java for begginers'],
    duration: '123124679',
    materials: [
      {
        content: [
          {
            stage: 1,
            content:
              'https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&ab_channel=CodeWithHarry',
            isCopleted: false,
          },
          {
            stage: 2,
            content:
              'https://www.youtube.com/watch?v=zIdg7hkqNE0&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=2&ab_channel=CodeWithHarry',
            isCopleted: false,
          },
          {
            stage: 3,
            content:
              'https://www.youtube.com/watch?v=X0zdAG7gfgs&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=3&ab_channel=CodeWithHarry',
            isCopleted: false,
          },
        ],
        technology: ['java'],
      },
    ],
    testLink: 'https://www.idrlabs.com/ru/libertarian/test.php',
  },
  {
    title: 'Python for kids',
    description: 'basic course for biginers',
    technology: ['python', 'pandas', 'django'],
    requiredSkills: ['ability to hear', 'read'],
    duration: '12312679',
    materials: [
      {
        content: [
          {
            stage: 1,
            content:
              'https://www.youtube.com/watch?v=IU4-19ofajg&list=PLQAt0m1f9OHvv2wxPGSCWjgy1qER_FvB6&ab_channel=egoroff_channel',
            isCopleted: false,
          },
          {
            stage: 2,
            content:
              'https://www.youtube.com/watch?v=mOQBZq9WCCY&list=PLQAt0m1f9OHvv2wxPGSCWjgy1qER_FvB6&index=2&ab_channel=egoroff_channel',
            isCopleted: false,
          },
          {
            stage: 3,
            content:
              'https://www.youtube.com/watch?v=fF1ZqTKMR6I&list=PLQAt0m1f9OHvv2wxPGSCWjgy1qER_FvB6&index=3&ab_channel=egoroff_channel',
            isCopleted: false,
          },
        ],
        technology: ['java'],
      },
    ],
    testLink: 'https://www.idrlabs.com/cat-personality/test.php',
  },
];

module.exports = {
  async up(db) {
    await Promise.all(MOCKED_CPOURSES.map((course) => db.collection('courses').insertOne(course)));
  },

  async down(db) {
    await db.collection('courses').drop();
  },
};
