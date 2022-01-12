import { Schema, model } from 'mongoose';

import { IMaterial } from 'interfaces/Ientities/Imaterials';

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

const MaterialModel = model('materials', materialSchema);

export default MaterialModel;
