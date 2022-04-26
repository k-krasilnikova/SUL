import { IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';

import { convertToTypeUnsafe } from '../../typeConversion/common';
import { MaterialsValidator } from '../schemas/courses';

const validateMaterials = (
  materials: IUpdateCourseBody['materials'],
): IUpdateCourseBody['materials'] | null => {
  try {
    return convertToTypeUnsafe<IUpdateCourseBody['materials']>(
      MaterialsValidator.validateSync(materials),
    );
  } catch {
    return null;
  }
};

export default validateMaterials;
