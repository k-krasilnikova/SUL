import { string, object } from 'yup';

const courseEditorValidationSchema = object().shape({
  title: string()
    .required('Title is required')
    .min(2, 'Title should be of minimum 2 characters length')
    .max(100, 'Title should be of maximum 100 characters length'),
});

export default courseEditorValidationSchema;
