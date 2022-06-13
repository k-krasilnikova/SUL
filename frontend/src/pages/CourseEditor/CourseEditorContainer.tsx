/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-syntax */
import { BaseSyntheticEvent, ChangeEvent, FC, useState } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { useParams } from 'react-router';

import useGetCourseEditorData from 'api/admin';
import { useGetSkills } from 'api/skills';
import { INITIAL_NUMBER_POINT, INITIAL_VALUES, RADIX_PARAMETER } from 'constants/courseEditor';
import { courseEditorValidationSchema } from 'validations/schemas';

import CourseEditor from './CourseEditor';
import { ISkillsById } from './types';
import { formatFieldValue } from './utils';

const CourseEditorContainer: FC = () => {
  const params = useParams();
  const [skillsById, setSkillsById] = useState<ISkillsById>({});

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (): void => {},
    validationSchema: courseEditorValidationSchema,
    validateOnBlur: true,
    validateOnChange: true,
  });

  const onSuccessLoadCourseData = (data: any): void => {
    const skills: ISkillsById = {};
    for (const item of data.allSkills) {
      skills[item._id] = item;
    }
    setSkillsById(skills);
    formik.setValues(data, false);
  };

  const { data: courseEditorData, isLoading: isCourseEditorDataLoading } = useGetCourseEditorData(
    params.courseId as string,
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

  const onFieldBlur = (event: BaseSyntheticEvent) => {
    const value = event.target.value || '';
    const formattedValue = formatFieldValue(value);
    formik.setFieldValue(event.target.name, formattedValue);
    formik.handleBlur(event);
  };

  const { data: courseCreatorSkillsData } = useGetSkills();

  let ungroupedSkills = {};
  if (courseCreatorSkillsData) {
    ungroupedSkills = courseCreatorSkillsData.reduce(
      (acc, group) => ({
        ...acc,
        ...group.skills.reduce((j, o) => ({ [o._id]: o, ...j }), {}),
      }),
      {},
    );
  }

  return (
    <FormikProvider value={formik}>
      <CourseEditor
        courseData={courseEditorData}
        isCourseDataLoading={isCourseEditorDataLoading}
        formik={formik}
        handleChangeTechnology={handleChangeTechnology}
        handleChangeCorrectAnswer={handleChangeCorrectAnswer}
        onFieldBlur={onFieldBlur}
        ungroupedSkills={ungroupedSkills}
      />
    </FormikProvider>
  );
};

export default CourseEditorContainer;
