import { DescriptionValidator } from '../schemas/courses';

const validateDescription = (description?: string): string | null => {
  try {
    return DescriptionValidator.validateSync(description) || null;
  } catch {
    return null;
  }
};

export default validateDescription;
