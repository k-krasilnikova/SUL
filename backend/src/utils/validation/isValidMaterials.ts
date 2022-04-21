import { MaterialContentType } from 'enums/materials';
import { IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';
import isValidTitle from './isValidTitle';

const isValidContentType = (type: MaterialContentType): boolean => {
  const existingTypeValues = Object.values(MaterialContentType);
  return existingTypeValues.some((typeValue) => typeValue === type);
};

const isValidMaterials = (materials: IUpdateCourseBody['materials']): boolean => {
  if (!materials?.length) {
    return false;
  }

  const validationChecks = materials?.map((material) =>
    Boolean(
      Array.isArray(material.content) &&
        material.content.length &&
        material.content.every(
          (contentElement) =>
            contentElement &&
            isValidContentType(contentElement.type) &&
            isValidTitle(contentElement.material),
        ),
    ),
  );

  const allChecksPassed = Boolean(validationChecks?.every((validation) => validation));

  return allChecksPassed;
};

export default isValidMaterials;
