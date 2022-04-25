import { MaterialContentType } from 'enums/materials';
import { IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';
import { convertToTypeUnsafe } from 'utils/typeConversion/common';

import isValidText from './isValidText';
import validatePlainMaterial from './validatePlainMaterial';

const isValidContentType = (type: MaterialContentType): boolean => {
  const existingTypeValues = Object.values(MaterialContentType);
  return existingTypeValues.some((typeValue) => typeValue === type);
};

const validateMaterials = (
  materials: IUpdateCourseBody['materials'],
): IUpdateCourseBody['materials'] | null => {
  if (!materials?.length) {
    return null;
  }

  const validationChecks = materials?.map((material) =>
    Boolean(
      Array.isArray(material.content) &&
        material.content.length &&
        material.content.every(
          (contentElement) =>
            contentElement &&
            isValidContentType(contentElement.type) &&
            (contentElement.type === MaterialContentType.plain
              ? validatePlainMaterial(contentElement.material)
              : true) &&
            isValidText(contentElement.material),
        ),
    ),
  );

  const allChecksPassed = Boolean(validationChecks?.every((validation) => validation));

  const validMaterials = materials.map((material) => {
    const validMaterialContent = material.content.map((contentElement) => {
      const validMaterial =
        contentElement.type === MaterialContentType.plain
          ? convertToTypeUnsafe<string>(validatePlainMaterial(contentElement.material))
          : contentElement.material;
      return { ...contentElement, material: validMaterial };
    });
    return { ...material, content: validMaterialContent };
  });

  return allChecksPassed ? validMaterials : null;
};

export default validateMaterials;
