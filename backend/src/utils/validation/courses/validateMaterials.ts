import { ICourse } from 'interfaces/entities/courses';
import { IEditCoursePayload } from 'interfaces/requests/common/payloads';

import { convertToTypeUnsafe } from '../../typeConversion/common';
import { MaterialsValidator } from '../schemas/courses';

const validateMaterials = (
  materials: IEditCoursePayload['materials'],
): ICourse['materials'] | null | undefined => {
  try {
    return materials
      ? convertToTypeUnsafe<ICourse['materials']>(MaterialsValidator.validateSync(materials))
      : undefined;
  } catch {
    return null;
  }
};

export default validateMaterials;
