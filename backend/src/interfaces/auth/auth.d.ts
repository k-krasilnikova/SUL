import { JwtPayload } from 'jsonwebtoken';

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

interface ITokensDto {
  accessToken?: string;
  refreshToken?: string;
}

export { IAccessJwtPayload, IRefreshJwtPayload, ITokens, ITokensDto };
