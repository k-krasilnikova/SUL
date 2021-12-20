import { compare } from 'bcrypt';
import { authProvider } from 'db/providers/authProvider';
import { Request, Response } from 'express';
import { generateJWT } from 'utils/auth/authUtils';

const loginController = async (req: Request, res: Response, next: (err?: unknown) => void) => {
  try {
    const { login, password } = req.body;
    const dbUser = await authProvider(login);
    if (!dbUser) {
      throw new Error('user not found');
    }
    const isValidPass = await compare(password, dbUser.password);
    if (!isValidPass) {
      throw new Error('wrong password');
    }
    const token = await generateJWT(dbUser);
    res.status(200).json({
      ...token,
      username: dbUser.username,
      birthday: dbUser.birthday,
      role: dbUser.role,
      avatar: dbUser.avatar,
    });
  } catch (error) {
    next(error);
  }
};

export { loginController };
