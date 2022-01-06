import { Schema, model } from 'mongoose';

import { IMaterial } from 'interfaces/entities/Imaterials';

const materialSchema = new Schema<IMaterial>({
  courseId: { type: Schema.Types.ObjectId, ref: 'courses' },
  content: [{ stage: Number, content: [{ type: String }], isCompleted: Boolean }],
  technology: [{ type: String }],
});

const MaterialModel = model<IMaterial>('materials', materialSchema);

export { MaterialModel, materialSchema };
