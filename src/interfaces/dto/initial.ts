import { ITokensDto } from 'interfaces/auth/auth';
import { TUserDataToClient } from 'interfaces/entities/users';

export type TInitialDTO = TUserDataToClient & (ITokensDto | undefined);
