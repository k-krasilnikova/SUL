import { IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';
import { ICourse } from 'interfaces/Ientities/Icourses';

import { convertToTypeUnsafe } from '../../typeConversion/common';
import { MaterialsValidator } from '../schemas/courses';

const validateMaterials = (
  materials: IUpdateCourseBody['materials'],
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
