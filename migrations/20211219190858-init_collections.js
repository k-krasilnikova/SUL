/* eslint-disable @typescript-eslint/no-var-requires */
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

const DEFAULT_USERS_DOCS = [
  {
    username: 'admin',
    passwordHash: 'admin',
    email: 'admin@itechart-group.com',
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
    username: 'user',
    passwordHash: 'user',
    email: 'user@itechart-group.com',
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
    username: 'manager',
    passwordHash: 'manager',
    email: 'manager@itechart-group.com',
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

module.exports = {
  async up(db) {
    await Promise.all(
      DEFAULT_USERS_DOCS.map((doc) => {
        const salt = bcrypt.genSaltSync(SALT_ROUNDS);
        // eslint-disable-next-line no-param-reassign
        doc.passwordHash = bcrypt.hashSync(doc.passwordHash, salt);
        return db.collection('users').insertOne(doc);
      }),
    );
  },

  async down(db) {
    await db.collection('users').drop();
  },
};
