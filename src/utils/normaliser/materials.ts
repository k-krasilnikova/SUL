import { ICourse } from 'interfaces/Ientities/Icourses';

const addMaterialStages = (materials: ICourse['materials']): ICourse['materials'] =>
  materials.map((material, index) => ({ content: material.content, stage: index + 1 }));

export { addMaterialStages };
