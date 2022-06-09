import { ICourse } from 'interfaces/entities/courses';
import { AvatarValidator } from '../schemas/courses';

const validateAvatar = (avatar?: ICourse['avatar']): ICourse['avatar'] | null | undefined => {
  try {
    return avatar ? AvatarValidator.validateSync(avatar) : undefined;
  } catch {
    return null;
  }
};

export default validateAvatar;
