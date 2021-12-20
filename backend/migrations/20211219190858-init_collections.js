const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

module.exports = {
  async up(db, client) {
    DEFAULT_USERS_DOCS.map(async (doc) => {
      const salt = bcrypt.genSaltSync(SALT_ROUNDS);
      doc.passwordHash = bcrypt.hashSync(doc.passwordHash, salt);
      await db.collection('users').insertOne(doc);
    });
    // await db.collection('skills');
    // await db.collection('courses');
    // await db.collection('userSkills');
    // await db.collection('userCourses');
  },

  async down(db, client) {
    await db.collection('users').drop();
    // await db.collection('skills').drop();
    // await db.collection('courses').drop();
    // await db.collection('userSkills').drop();
    // await db.collection('userCourses').drop();
  },
};

const DEFAULT_USERS_DOCS = [
  {
    name: 'admin',
    passwordHash: 'admin',
    role: 'admin',
    firstName: 'Admin',
    lastName: 'Admin',
    position: 'Software Engineer',
    skills: [],
    courses: [],
    employees: [],
    avatar: '',
    birthday: '1970-01-01T00:00:00Z',
    skype: 'admin',
  },
  {
    name: 'user',
    passwordHash: 'user',
    role: 'employee',
    firstName: 'User',
    lastName: 'User',
    position: 'Software Engineer',
    skills: [],
    courses: [],
    employees: [],
    avatar: '',
    birthday: '1970-01-01T00:00:00Z',
    skype: 'user',
  },
  {
    name: 'manager',
    passwordHash: 'manager',
    role: 'manager',
    firstName: 'Manager',
    lastName: 'Manager',
    position: 'Team Manager',
    skills: [],
    courses: [],
    employees: [],
    avatar: '',
    birthday: '1970-01-01T00:00:00Z',
    skype: 'user',
  },
];
