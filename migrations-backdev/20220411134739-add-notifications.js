/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const NOTIFICATIONS = [
  {
    title: 'Declined',
    description: 'Request for course was declined',
    status: 'new',
    courseName: 'JS',
    type: 'user',
  },
  {
    title: 'Approved',
    description: 'Request for course was approved',
    status: 'old',
    courseName: 'Java',
    type: 'user',
  },
];

module.exports = {
  async up(db) {
    await db.createCollection('notifications');

    const users = await db.collection('users');
    const client = await users.findOne({
      username: 'user',
    });

    await Promise.all(
      NOTIFICATIONS.map((notification) => {
        return db.collection('notifications').insertOne({ ...notification, userId: client._id });
      }),
    );
  },
  async down(db) {
    return db.dropCollection('notifications');
  },
};
