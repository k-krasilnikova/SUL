import { JwtPayload } from 'jsonwebtoken';

interface ILoginPayload {
  login: string;
  password: string;
}

interface IAccessJwtPayload extends JwtPayload {
  id: string;
  role: string;
}

interface IRefreshJwtPayload extends JwtPayload {
  id: string;
}

interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export { ILoginPayload, IAccessJwtPayload, IRefreshJwtPayload, ITokens };
