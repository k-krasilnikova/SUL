/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-syntax */
import { BaseSyntheticEvent, ChangeEvent, FC, useState } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { useParams } from 'react-router';

import { useGetCourseEditorData } from 'api/admin';
import { INITIAL_NUMBER_POINT, INITIAL_VALUES, RADIX_PARAMETER } from 'constants/courseEditor';
import courseEditorValidationSchema from 'validations/courseEditorValidationSchema';

import CourseEditor from './CourseEditor';
import { ISkillsById } from './types';

const CourseEditorContainer: FC = () => {
  const params = useParams();
  const [skillsById, setSkillsById] = useState<ISkillsById>({});

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (): void => {},
    validationSchema: courseEditorValidationSchema,
    validateOnBlur: true,
    validateOnChange: false,
  });

  const onSuccessLoadCourseData = (data: any): void => {
    const skills: { [key: string]: { _id: string; name: string; maxScore: number } } = {};
    for (const item of data.allSkills) {
      skills[item._id] = item;
    }
    setSkillsById(skills);
    formik.setValues(data, false);
  };

  const { data: courseEditorData, isLoading: isCourseEditorDataLoading } = useGetCourseEditorData(
    params.courseId,
    onSuccessLoadCourseData,
  );

  const handleChangeTechnology = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    const skill = skillsById[value];
    formik.setFieldValue(name, { ...skill, points: INITIAL_NUMBER_POINT });
  };

  const handleChangeCorrectAnswer = (event: BaseSyntheticEvent) => {
    formik.setFieldValue(event.target.name, Number.parseInt(event.target.value, RADIX_PARAMETER));
  };

  console.log('val:', formik.values.test.questions);

  return (
    <FormikProvider value={formik}>
      <CourseEditor
        courseData={courseEditorData}
        isCourseDataLoading={isCourseEditorDataLoading}
        formik={formik}
        handleChangeTechnology={handleChangeTechnology}
        handleChangeCorrectAnswer={handleChangeCorrectAnswer}
      />
    </FormikProvider>
  );
};

export default CourseEditorContainer;
