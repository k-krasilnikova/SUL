import { IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';

const isValidMaterials = (materials: IUpdateCourseBody['materials']): boolean => {
  const validationChecks = materials?.map((material) =>
    Boolean(
      Array.isArray(material.content) &&
        material.content.length &&
        material.content.every(
          (contentElement) => contentElement && typeof contentElement === 'string',
        ),
    ),
  );

  const allChecksPassed = Boolean(validationChecks?.every((validation) => validation));

  return allChecksPassed;
};

export default isValidMaterials;
