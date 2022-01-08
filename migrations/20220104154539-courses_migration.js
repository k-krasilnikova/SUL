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
      {
        _id: '9',
        stage: 3,
        content: [
          'https://www.youtube.com/watch?v=fF1ZqTKMR6I&list=PLQAt0m1f9OHvv2wxPGSCWjgy1qER_FvB6&index=3&ab_channel=egoroff_channel',
        ],
        isCompleted: false,
      },
    ],
    technology: ['java'],
  },
];

const MOCKED_COURSES = [
  {
    title: 'JS for begginers',
    description: 'basic course for begginers',
    technology: ['js', 'html', 'css'],
    requiredSkills: ['html', 'css'],
    duration: '123124679',
    materials: [],
    lessons: 0,
    testLink: 'https://www.idrlabs.com/hogwarts-house/test.php',
  },
  {
    title: 'Java for Profi ',
    description: 'course for people who want rise their level in java',
    technology: ['java', 'sql'],
    requiredSkills: ['java for begginers'],
    duration: '123124679',
    materials: [],
    lessons: 0,
    testLink: 'https://www.idrlabs.com/ru/libertarian/test.php',
  },
  {
    title: 'Python for kids',
    description: 'school level of python programming',
    technology: ['python', 'pandas', 'django'],
    requiredSkills: ['math', 'english'],
    duration: '12312679',
    materials: [],
    lessons: 0,
    testLink: 'https://www.idrlabs.com/cat-personality/test.php',
  },
];

module.exports = {
  async up(db) {
    const materials = await Promise.all(
      MATERIALS.map((material) => db.collection('materials').insertOne(material)),
    );
    await Promise.all(
      MOCKED_COURSES.map((course, indx) => {
        course.materials.push(materials[indx].insertedId);
        return db.collection('courses').insertOne(course);
      }),
    );
    // const courses = await db.collection('courses').find().toArray();
    // const allMat = await db.collection('materials').find().toArray();
    // console.log(courses, allMat);
  },

  async down(db) {
    await db.collection('courses').drop();
    await db.collection('materials').drop();
  },
};
