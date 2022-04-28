/* eslint-disable */

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

const TIME_1M_SEC = 60;
const TIME_1H_SEC = 60 * TIME_1M_SEC;
const TIME_1D_SEC = 24 * TIME_1H_SEC;
const ESTIMATE_TIME_PER_LESSON = 1 * TIME_1D_SEC;

module.exports = {
  async up(db) {
    await db.collection('courses').updateMany({}, { $set: { similarCourses: [] } });
    const courses = await db.collection('courses').find().toArray();
    courses.map(async (course) => {
      const lessons = course.materials.length;

      const test = await db.collection('tests').findOne({ _id: course.test });
      const durationSeconds = course.materials.length * ESTIMATE_TIME_PER_LESSON + test.timeout;

      const days = Math.floor(durationSeconds / TIME_1D_SEC);
      const hours = Math.floor((durationSeconds - days * TIME_1D_SEC) / TIME_1H_SEC);
      const minutes = Math.ceil(
        (durationSeconds - days * TIME_1D_SEC - hours * TIME_1H_SEC) / TIME_1M_SEC,
      );

      const duration = { days, hours, minutes };
      await db
        .collection('courses')
        .findOneAndUpdate({ _id: course._id }, { $set: { lessons, duration } });
    });

    const skills = await Promise.all(
      SKILLS.map(
        async (currentSkill) => await db.collection('skills').findOne({ name: currentSkill.name }),
      ),
    );
    await Promise.all(
      skills.map(async (skill) => {
        const similarCourses = await db
          .collection('courses')
          .find({ 'technologies.skill': skill._id })
          .toArray();
        similarCourses.map(async (similarCourse) => {
          await db.collection('courses').updateMany(
            {
              'technologies.skill': skill._id,
              similarCourses: { $nin: [similarCourse._id] },
              _id: { $ne: similarCourse._id },
            },
            { $push: { similarCourses: similarCourse._id } },
          );
        });
      }),
    );
  },

  async down(db) {
    db.collection('courses').updateMany(
      {},
      { $unset: { similarCourses: 1, lessons: 1, duration: 1 } },
      { multi: true },
    );
  },
};
