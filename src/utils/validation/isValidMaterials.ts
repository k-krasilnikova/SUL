import { NOTHING } from 'config/constants';
import { ICourse } from 'interfaces/Ientities/Icourses';

const isValidMaterials = (materials: ICourse['materials']): boolean => {
  const validationChecks = materials.map((material) =>
    Boolean(
      Array.isArray(material.content) &&
        material.content.length > NOTHING &&
        material.content.every(
          (contentElement) => contentElement && typeof contentElement === 'string',
        ),
    ),
  );

  const allChecksPassed = validationChecks.every((validation) => validation);

  return allChecksPassed;
};

export default isValidMaterials;
