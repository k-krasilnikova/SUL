import MaterialModel from 'db/models/Materials';

const getMaterialsProvider = async () => {
  const materials = await MaterialModel.find();
  if (!materials) {
    throw new Error('materials not found');
  }
  return materials;
};

const getMaterialProvider = async (id: string) => {
  const material = await MaterialModel.find({ _id: id });
  if (!material) {
    throw new Error('materials not found');
  }
  return material;
};

export { getMaterialsProvider, getMaterialProvider };
