/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-syntax */
import { FC, useState } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { useParams } from 'react-router';

import { useGetCourseEditorData } from 'api/admin';
import { INITIAL_VALUES } from 'constants/courseEditor';
import courseEditorValidationSchema from 'validations/courseEditorValidationSchema';

import CourseEditor from './CourseEditor';

const CourseEditorContainer: FC = () => {
  const [skillsById, setSkillsById] = useState({});
  console.log(skillsById);

  const params = useParams();
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (): void => {},
    validationSchema: courseEditorValidationSchema,
    validateOnBlur: true,
    validateOnChange: false,
  });

  const onSuccessLoadCourseData = (data: any): void => {
    const skillsByIda: { [key: string]: { _id: string; name: string; maxScore: number } } = {};
    for (const item of data.allSkills) {
      skillsByIda[item._id] = item;
    }
    setSkillsById(skillsByIda);
    formik.setValues({ ...data, skillsById: skillsByIda }, false);
  };

  const { data: courseEditorData, isLoading: isCourseEditorDataLoading } = useGetCourseEditorData(
    params.courseId,
    onSuccessLoadCourseData,
  );

  console.log('fva', formik.values.technologies);

  return (
    <FormikProvider value={formik}>
      <CourseEditor
        courseData={courseEditorData}
        isCourseDataLoading={isCourseEditorDataLoading}
        formik={formik}
      />
    </FormikProvider>
  );
};

export default CourseEditorContainer;
