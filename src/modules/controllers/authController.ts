import { compare } from 'bcrypt';
import { authProvider, saveTokenProvider } from 'db/providers/authProvider';
import { Request, Response } from 'express';
import { IUser } from 'interfaces/db/entities';
import { generateJWT } from 'utils/auth/authUtils';

const loginController = async (req: Request, res: Response, next: (err?: unknown) => void) => {
  try {
    const { login, password } = req.body;
    const dbUser: IUser = await authProvider(login);
    const isValidPass = await compare(password, dbUser.passwordHash);
    if (!isValidPass) {
      throw new Error('wrong password');
    }
    const token = await generateJWT(dbUser);
    await saveTokenProvider(token.refreshToken, dbUser);
    res.status(200).json({
      ...token,
      position: dbUser.position,
      firstName: dbUser.firstName,
      lastName: dbUser.lastName,
      birthday: dbUser.birthday,
      courses: dbUser.courses,
      role: dbUser.role,
      skills: dbUser.skills,
      skype: dbUser.skills,
      avatar: dbUser.avatar,
    });
  } catch (error) {
    next(error);
  }
};

export { loginController };
