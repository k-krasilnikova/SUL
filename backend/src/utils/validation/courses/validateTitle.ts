import { TitleValidator } from '../schemas/courses';

const validateTitle = (title?: string): string | null | undefined => {
  try {
    return title ? TitleValidator.validateSync(title) : undefined;
  } catch {
    return null;
  }
};

export default validateTitle;
