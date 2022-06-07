import { ICourse } from 'interfaces/entities/courses';

const addMaterialStages = (materials: ICourse['materials']): ICourse['materials'] =>
  materials.map((material, index) => ({
    content: material.content,
    stage: index + 1,
    exercise: material.exercise,
  }));

export { addMaterialStages };
