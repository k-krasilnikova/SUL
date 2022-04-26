import { TitleValidator } from '../schemas/courses';

const validateTitle = (title?: string): string | null => {
  try {
    return TitleValidator.validateSync(title) || null;
  } catch {
    return null;
  }
};

export default validateTitle;
