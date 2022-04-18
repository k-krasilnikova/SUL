import { MATERIAL, TMaterialVariants } from 'constants/materials';

export const defineMaterialType = (material: string): TMaterialVariants => {
  let type: TMaterialVariants;
  if (
    material.indexOf('www') >= 0 ||
    material.indexOf('.com') >= 0 ||
    material.indexOf('.org') >= 0
  ) {
    type = MATERIAL.video;
  } else {
    type = MATERIAL.text;
  }
  return type;
};
