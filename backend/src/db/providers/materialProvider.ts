import CourseModel from 'db/models/Course';

const getMaterialsProvider = async ({ courseId, stage }: { courseId: string; stage?: string }) => {
  const material = await CourseModel.find(
    {
      $and: [{ _id: courseId }, stage?.length ? { 'materials.stage': Number(stage) } : {}],
    },
    stage?.length ? { 'materials.$': 1 } : { materials: 1 },
  ).lean();
  if (!material) {
    throw new Error('materials not found');
  }
  return material;
};

export { getMaterialsProvider };
