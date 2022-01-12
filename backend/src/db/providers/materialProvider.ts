import MaterialModel from 'db/models/Materials';

const getMaterialsProvider = async () => {
  const materials = await MaterialModel.find().lean();
  if (!materials) {
    throw new Error('materials not found');
  }
  return materials;
};

const getMaterialProvider = async ({ id, stage }: { id: string; stage?: string }) => {
  const material = await MaterialModel.find(
    {
      $and: [{ _id: id }, stage?.length ? { 'content.stage': Number(stage) } : {}],
    },
    stage?.length ? { 'content.$': 1 } : {},
  ).lean();
  if (!material) {
    throw new Error('materials not found');
  }
  return material;
};

export { getMaterialsProvider, getMaterialProvider };
