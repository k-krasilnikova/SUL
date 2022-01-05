import CourseModel from '../src/db/models/Course';

const MOCKED_COURSES = [
  {
    info: {
      title: 'JS for begginers',
      description: 'basic course for biginers',
      technology: ['js', 'html', 'css'],
      requiredSkills: ['learn to read'],
      duration: '123124679',
      materials: [],
      testLink: 'https://www.idrlabs.com/hogwarts-house/test.php',
    },
    materials: {
      content: [
        {
          stage: 1,
          content: [
            'https://www.youtube.com/watch?v=VuN8qwZoego&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=1&ab_channel=WesBos',
          ],
          isCompleted: false,
        },
        {
          stage: 2,
          content: [
            'https://www.youtube.com/watch?v=xu87YWbr4X0&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=2&ab_channel=WesBos',
          ],
          isCompleted: false,
        },
        {
          stage: 3,
          content: [
            'https://www.youtube.com/watch?v=AHLNzv13c2I&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=3&ab_channel=WesBos',
          ],
          isCompleted: false,
        },
      ],
      technology: ['js', 'html', 'css'],
    },
  },
  {
    info: {
      title: 'Java for Profi ',
      description: 'basic course for biginers',
      technology: ['java', 'sql'],
      requiredSkills: ['java for begginers'],
      duration: '123124679',
      materials: [],
      testLink: 'https://www.idrlabs.com/ru/libertarian/test.php',
    },
    materials: {
      content: [
        {
          stage: 1,
          content: [
            'https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&ab_channel=CodeWithHarry',
          ],
          isCompleted: false,
        },
        {
          stage: 2,
          content: [
            'https://www.youtube.com/watch?v=zIdg7hkqNE0&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=2&ab_channel=CodeWithHarry',
          ],
          isCompleted: false,
        },
        {
          stage: 3,
          content: [
            'https://www.youtube.com/watch?v=X0zdAG7gfgs&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&index=3&ab_channel=CodeWithHarry',
          ],
          isCompleted: false,
        },
      ],
      technology: ['java'],
    },
  },
  {
    info: {
      title: 'Python for kids',
      description: 'basic course for biginers',
      technology: ['python', 'pandas', 'django'],
      requiredSkills: ['ability to hear', 'read'],
      duration: '12312679',
      materials: [],
      testLink: 'https://www.idrlabs.com/cat-personality/test.php',
    },
    materials: {
      content: [
        {
          stage: 1,
          content: [
            'https://www.youtube.com/watch?v=IU4-19ofajg&list=PLQAt0m1f9OHvv2wxPGSCWjgy1qER_FvB6&ab_channel=egoroff_channel',
          ],
          isCompleted: false,
        },
        {
          stage: 2,
          content: [
            'https://www.youtube.com/watch?v=mOQBZq9WCCY&list=PLQAt0m1f9OHvv2wxPGSCWjgy1qER_FvB6&index=2&ab_channel=egoroff_channel',
          ],
          isCompleted: false,
        },
        {
          stage: 3,
          content: [
            'https://www.youtube.com/watch?v=fF1ZqTKMR6I&list=PLQAt0m1f9OHvv2wxPGSCWjgy1qER_FvB6&index=3&ab_channel=egoroff_channel',
          ],
          isCompleted: false,
        },
      ],
      technology: ['java'],
    },
  },
];

async function migrateToCoursesUp() {
  await Promise.all(
    MOCKED_COURSES.map((course) => {
      const newModel = new CourseModel(course.info);
      newModel.materials.push(course.materials);
      return newModel.save();
    }),
  );
}

export default migrateToCoursesUp;
