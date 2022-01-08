import { Schema, model } from 'mongoose';

import { IMaterial } from 'interfaces/entities/Imaterials';

const materialSchema = new Schema<IMaterial>({
  content: [
    {
      _id: { type: String },
      stage: { type: Number },
      content: [{ type: String }],
      isCompleted: Boolean,
    },
  ],
  technology: [{ type: String }],
});

const MaterialModel = model<IMaterial>('materials', materialSchema);

export default MaterialModel;
