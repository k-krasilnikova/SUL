import jwt from 'jsonwebtoken';

const generateJWT = async (userData) => {
  try {
    if (!userData._id) {
      throw new Error('wrong user id');
    }
    const { _id: id, email, roles } = userData;
    const timeout = process.env.JWT_EXPIRATION_TIME;
    const refreshTimeout = process.env.JWT_EXPIRATION_TIME;

    const accessToken = await jwt.sign(
      { id, email, roles, exp: timeout },
      `${process.env.JWT_SECRET}`,
    );
    const refreshToken = await jwt.sign(
      { id, email, roles, exp: refreshTimeout },
      `${process.env.JWT_REFRESH_TOKEN}`,
    );
    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error('not generate token');
  }
};

export { generateJWT };
