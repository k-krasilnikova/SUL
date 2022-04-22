const NOTIFICATIONS = [
  {
    title: 'Declined',
    description: 'Request for course was declined',
    status: 'new',
  },
  {
    title: 'Approved',
    description: 'Request for course was approved',
    status: 'old',
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
  async down(db, client) {
    return db.dropCollection('notifications');
  },
};
