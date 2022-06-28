import { IFormik } from 'pages/CourseEditor/types';

const validateIfCourseInfoValid = (formik: IFormik): boolean => {
  const fields = ['avatar', 'description', 'title'];
  let valid = true;

  fields.forEach((field) => {
    valid =
      valid &&
      !(field in formik.errors) &&
      formik.values[field as keyof typeof formik.values] !== '';
  });
  return valid;
};

const validateIfCourseSkillsValid = (formik: IFormik): boolean => {
  let valid = true;
  formik.values.technologies.forEach((skill) => {
    valid = valid && !!(skill._id !== '' && skill.points !== '');
  });
  valid = valid && !('technologies' in formik.errors);
  return valid;
};

const validateIfCourseLessonsValid = (formik: IFormik): boolean => {
  let valid = true;
  formik.values.materials.forEach((material) => {
    valid = valid && !!(material.material !== '');
  });
  valid = valid && !('materials' in formik.errors);
  return valid;
};

const validateIfCourseTestValid = (formik: IFormik): boolean => {
  let valid = true;
  valid = valid && !('test' in formik.errors);
  return valid;
};

export const validators: { [key: number]: (formik: IFormik) => boolean } = {
  1: validateIfCourseInfoValid,
  2: validateIfCourseSkillsValid,
  3: validateIfCourseLessonsValid,
  4: validateIfCourseTestValid,
};
