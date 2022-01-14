import { Schema, model } from 'mongoose';

import { IMaterial } from 'interfaces/Ientities/Imaterials';

const materialSchema = new Schema<IMaterial>({
  content: [
    {
      _id: { type: String },
      stage: { type: Number, unique: true },
      content: [{ type: String }],
      isCompleted: Boolean,
    },
  ],
  technology: [{ type: String }],
});

const MaterialModel = model<IMaterial>('Materials', materialSchema, 'materials');

export default MaterialModel;
