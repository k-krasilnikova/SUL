import { TitleValidation } from '../schemas/courses';

const validateTitle = (title?: string): string | null => {
  try {
    return TitleValidation.validateSync(title) || null;
  } catch {
    return null;
  }
};

export default validateTitle;
