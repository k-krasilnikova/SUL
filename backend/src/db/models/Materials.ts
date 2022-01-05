import { Schema, model } from 'mongoose';

import { IMaterial } from 'interfaces/entities/Imaterials';

const materialSchema = new Schema<IMaterial>({
  content: [
    { stage: { type: Number }, content: [{ type: String }], isCompleted: { type: Boolean } },
  ],
  technology: [{ type: String }],
});

const MaterialModel = model<IMaterial>('Materials', materialSchema);

export { MaterialModel, materialSchema };
