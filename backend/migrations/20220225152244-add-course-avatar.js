const AVATARS = ['https://ucarecdn.com/6c336531-1fe4-4daf-ba45-28b76b45ff46/js.png', 'https://ucarecdn.com/ef78d112-c5e8-4829-94eb-777d059f82bf/java.png', 'https://ucarecdn.com/0168bc80-6cd0-444f-b173-70ef1ff1071c/python.png', 'https://ucarecdn.com/e5f818ce-1eef-47c8-91a9-7f78d5e96194/scala.png', 'https://ucarecdn.com/f388ccb9-1fc6-4803-97b4-ea7b25629ac8/kotlin.png',]

module.exports = {
  async up(db) {
    const coursesCollection = await db.collection('courses');
    await coursesCollection.find({}).forEach(
      async (course, index) => {
        await coursesCollection.updateOne(
          { _id: course._id },
          {
            $set: {
              avatar: AVATARS[index],
            },
          },
        );
      }
    );
  },

  async down(db) {
    const courses = await db.collection('courses');
    await courses.updateMany(
      {},
      {
        $unset: {
          avatar: '',
        },
      },
    );
  }
};
