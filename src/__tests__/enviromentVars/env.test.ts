import dotenv from 'dotenv';

describe('Testing all neccessary envs', () => {
  const stringType = 'string';

  beforeAll(() => {
    dotenv.config();
  });

  describe('Ports envs', () => {
    it('Port env', () => {
      const port = process.env.PORT;
      expect(port).not.toBeUndefined();
      expect(typeof port).toEqual(stringType);
    });

    it('Test port env', () => {
      const testPort = process.env.TEST_PORT;
      expect(testPort).not.toBeUndefined();
      expect(typeof testPort).toEqual(stringType);
    });
  });

  describe('Database envs', () => {
    it('Dev database url', () => {
      const dbUrl = process.env.DATABASE_URL;
      expect(dbUrl).not.toBeUndefined();
      expect(typeof dbUrl).toEqual(stringType);
    });

    it('Backdev database url', () => {
      const dbUrl = process.env.DATABASE_BACKDEV_URL;
      expect(dbUrl).not.toBeUndefined();
      expect(typeof dbUrl).toEqual(stringType);
    });

    it('Dev database name', () => {
      const dbName = process.env.DEV_DB_NAME;
      expect(dbName).not.toBeUndefined();
      expect(typeof dbName).toEqual(stringType);
    });

    it('Backdev database name', () => {
      const dbName = process.env.BACKDEV_DB_NAME;
      expect(dbName).not.toBeUndefined();
      expect(typeof dbName).toEqual(stringType);
    });

    it('Backdev database name', () => {
      const dbName = process.env.BACKDEV_DB_NAME;
      expect(dbName).not.toBeUndefined();
      expect(typeof dbName).toEqual(stringType);
    });
  });

  describe('Jwt session envs', () => {
    it('Jwt secret', () => {
      const token = process.env.JWT_SECRET;
      expect(token).not.toBeUndefined();
      expect(typeof token).toEqual(stringType);
    });

    it('Jwt refresh secret', () => {
      const token = process.env.JWT_REFRESH_SECRET;
      expect(token).not.toBeUndefined();
      expect(typeof token).toEqual(stringType);
    });

    it('Jwt refresh expiration time', () => {
      const time = process.env.JWT_EXPIRATION_TIME_REFRESH;
      expect(time).not.toBeUndefined();
      expect(typeof time).toEqual(stringType);
    });

    it('Jwt access expiration time', () => {
      const time = process.env.JWT_EXPIRATION_TIME_ACCESS;
      expect(time).not.toBeUndefined();
      expect(typeof time).toEqual(stringType);
    });
  });

  describe('Creds envs', () => {
    it('User login', () => {
      const login = process.env.USER_LOGIN;
      expect(login).not.toBeUndefined();
      expect(typeof login).toEqual(stringType);
    });

    it('User password', () => {
      const password = process.env.USER_PASSWORD;
      expect(password).not.toBeUndefined();
      expect(typeof password).toEqual(stringType);
    });
  });
});
