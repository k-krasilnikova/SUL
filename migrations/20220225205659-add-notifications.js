module.exports = {
  async up(db, client) {
    await db.createCollection('notifications');
  },

  async down(db, client) {
    return db.dropCollection('notifications');
  }
};
