import dotenv from 'dotenv';

describe('testing all neccessary envs', () => {
  const stringType = 'string';

  beforeAll(() => {
    dotenv.config();
  });

  describe('ports envs', () => {
    it('port env', () => {
      const port = process.env.PORT;
      expect(port).not.toBeUndefined();
      expect(typeof port).toEqual(stringType);
    });

    it('test port env', () => {
      const testPort = process.env.TEST_PORT;
      expect(testPort).not.toBeUndefined();
      expect(typeof testPort).toEqual(stringType);
    });
  });

  describe('database envs', () => {
    it('dev database url', () => {
      const dbUrl = process.env.DATABASE_URL;
      expect(dbUrl).not.toBeUndefined();
      expect(typeof dbUrl).toEqual(stringType);
    });

    it('backdev database url', () => {
      const dbUrl = process.env.DATABASE_BACKDEV_URL;
      expect(dbUrl).not.toBeUndefined();
      expect(typeof dbUrl).toEqual(stringType);
    });

    it('dev database name', () => {
      const dbName = process.env.DEV_DB_NAME;
      expect(dbName).not.toBeUndefined();
      expect(typeof dbName).toEqual(stringType);
    });

    it('backdev database name', () => {
      const dbName = process.env.BACKDEV_DB_NAME;
      expect(dbName).not.toBeUndefined();
      expect(typeof dbName).toEqual(stringType);
    });

    it('backdev database name', () => {
      const dbName = process.env.BACKDEV_DB_NAME;
      expect(dbName).not.toBeUndefined();
      expect(typeof dbName).toEqual(stringType);
    });
  });

  describe('jwt session envs', () => {
    it('jwt secret', () => {
      const token = process.env.JWT_SECRET;
      expect(token).not.toBeUndefined();
      expect(typeof token).toEqual(stringType);
    });

    it('jwt refresh secret', () => {
      const token = process.env.JWT_REFRESH_SECRET;
      expect(token).not.toBeUndefined();
      expect(typeof token).toEqual(stringType);
    });

    it('jwt refresh expiration time', () => {
      const time = process.env.JWT_EXPIRATION_TIME_REFRESH;
      expect(time).not.toBeUndefined();
      expect(typeof time).toEqual(stringType);
    });

    it('jwt access expiration time', () => {
      const time = process.env.JWT_EXPIRATION_TIME_ACCESS;
      expect(time).not.toBeUndefined();
      expect(typeof time).toEqual(stringType);
    });
  });

  describe('creds envs', () => {
    it('user login', () => {
      const login = process.env.USER_LOGIN;
      expect(login).not.toBeUndefined();
      expect(typeof login).toEqual(stringType);
    });

    it('user password', () => {
      const password = process.env.USER_PASSWORD;
      expect(password).not.toBeUndefined();
      expect(typeof password).toEqual(stringType);
    });
  });
});
