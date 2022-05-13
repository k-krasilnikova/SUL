import { DescriptionValidator } from '../schemas/courses';

const validateDescription = (description?: string): string | null | undefined => {
  try {
    return description ? DescriptionValidator.validateSync(description) : undefined;
  } catch {
    return null;
  }
};

export default validateDescription;
