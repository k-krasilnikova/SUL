import { Schema, model } from 'mongoose';

import { IMaterial } from 'interfaces/entities/Imaterials';

const materialSchema = new Schema<IMaterial>({
  _id: { type: Schema.Types.ObjectId },
  content: [{ stage: { type: Number }, content: [{ type: String }] }],
  technology: [{ types: String }],
});

const MaterialModel = model<IMaterial>('Materials', materialSchema);

export default MaterialModel;
