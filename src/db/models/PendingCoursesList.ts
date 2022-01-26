import { Schema, model } from 'mongoose';

import { IPendingCourse } from 'interfaces/IPendingCoursesList/IPendingCourse';

const pendingCourseSchema = new Schema<IPendingCourse>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  course: { type: Schema.Types.ObjectId, ref: 'Courses' },
  status: { type: Schema.Types.ObjectId, ref: 'clientCourses' },
  time: { type: Date },
});

const PendingCoursesListModel = model<IPendingCourse>(
  'pendingCourseSchema',
  pendingCourseSchema,
  'pendingCourseSchema',
);

export default PendingCoursesListModel;
