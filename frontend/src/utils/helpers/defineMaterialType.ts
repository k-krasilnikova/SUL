import { MATERIAL } from 'constants/materials';

export const defineMaterialType = (material: string): string => {
  let type: string;
  if (material.indexOf('www') >= 0 || material.indexOf('.com') || material.indexOf('.org')) {
    type = MATERIAL.video;
  } else {
    type = MATERIAL.text;
  }
  return type;
};
