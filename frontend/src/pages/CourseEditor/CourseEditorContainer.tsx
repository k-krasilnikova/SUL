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

  const params = useParams();
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (): void => {},
    validationSchema: courseEditorValidationSchema,
    validateOnBlur: true,
    validateOnChange: false,
  });

  const handleChangeTechnology = ({ target }: any) => {
    const { value, name } = target;
    console.log(value, name);
    // const skill: any = formik.values.skillsById[value];
    // formik.setFieldValue(name, { ...skill, points: 1 });
  };

  const onSuccessLoadCourseData = (data: any): void => {
    const skillsByIdL: { [key: string]: { _id: string; name: string; maxScore: number } } = {};
    for (const item of data.allSkills) {
      skillsByIdL[item._id] = item;
    }
    setSkillsById(skillsByIdL);
    // setSkillsById(
    //   data.allSkills.reduce(
    //     (prev, skill) = ({...prev, [skill._id]: skill})
    //   )
    // )
    formik.setValues({ ...data, skillsById }, false);
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
        handleChangeTechnology={handleChangeTechnology}
      />
    </FormikProvider>
  );
};

export default CourseEditorContainer;
