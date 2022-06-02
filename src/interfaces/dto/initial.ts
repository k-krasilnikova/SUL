import { ITokensDto } from 'interfaces/Iauth/authInterfaces';
import { TUserDataToClient } from 'interfaces/Ientities/Iusers';

export type TInitialDTO = TUserDataToClient & (ITokensDto | undefined);
