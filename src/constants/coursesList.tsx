const INITIAL_COURSES = [
  {
    _id: '123',
    lessons: 5,
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
            isCompleted: true,
          },
          {
            stage: 2,
            content:
              'https://www.youtube.com/watch?v=xu87YWbr4X0&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=2&ab_channel=WesBos',
            isCompleted: true,
          },
          {
            stage: 3,
            content:
              'https://www.youtube.com/watch?v=xu87YWbr4X0&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=2&ab_channel=WesBos',
            isCompleted: true,
          },
          {
            stage: 4,
            content:
              'https://www.youtube.com/watch?v=xu87YWbr4X0&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=2&ab_channel=WesBos',
            isCompleted: true,
          },
        ],
        technology: ['HTML', 'CSS'],
      },
      {
        content: [
          {
            stage: 1,
            content:
              'https://www.youtube.com/watch?v=VuN8qwZoego&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=1&ab_channel=WesBos',
            isCompleted: true,
          },
          {
            stage: 2,
            content:
              'https://www.youtube.com/watch?v=xu87YWbr4X0&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=2&ab_channel=WesBos',
            isCompleted: false,
          },
          {
            stage: 3,
            content:
              'https://www.youtube.com/watch?v=AHLNzv13c2I&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=3&ab_channel=WesBos',
            isCompleted: false,
          },
        ],
        technology: ['JavaScript'],
      },
    ],
    testLink: 'https://www.idrlabs.com/hogwarts-house/test.php',
  },
  {
    _id: '124',
    lessons: 6,
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
            isCompleted: true,
          },
          {
            stage: 2,
            content:
              'https://www.youtube.com/watch?v=zIdg7hkqNE0&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=2&ab_channel=CodeWithHarry',
            isCompleted: true,
          },
          {
            stage: 3,
            content:
              'https://www.youtube.com/watch?v=X0zdAG7gfgs&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=3&ab_channel=CodeWithHarry',
            isCompleted: true,
          },
        ],
        technology: ['Java'],
      },
    ],
    testLink: 'https://www.idrlabs.com/ru/libertarian/test.php',
  },
];

export default INITIAL_COURSES;
