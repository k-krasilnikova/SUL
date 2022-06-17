/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react-hooks/exhaustive-deps */
import { BaseSyntheticEvent, ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { useParams } from 'react-router';

import { useGetSkills } from 'api/skills';
import { useGetCourseEditorData, useEditCourseData } from 'api/admin';
import {
  INITIAL_NUMBER_POINT,
  INITIAL_VALUES,
  RADIX_PARAMETER,
  SECONDS_PARAMETER,
} from 'constants/courseEditor';
import { errorSnackbar, errorSnackbarMessage } from 'constants/snackbarVariant';
import { Numbers } from 'enums/numbers';
import { useSnackbar } from 'notistack';
import { courseEditorValidationSchema } from 'validations/schemas';
import { uploadFile } from 'utils/helpers/uploader';

import CourseEditor from './CourseEditor';
import { ISkillsById } from './types';
import { formatFieldValue, formatValuesForSubmit } from './utils';

const CourseEditorContainer: FC = () => {
  const params = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const courseEditorRef = useRef<HTMLElement>(null);
  const [skillsById, setSkillsById] = useState<ISkillsById>({});

  const { mutate: editCourseDataMutate, isLoading: isEditCourseDataMutateLoading } =
    useEditCourseData(params.courseId);

  const handleSubmit = (values: any) => {
    const formattedValues = formatValuesForSubmit(values);
    editCourseDataMutate(formattedValues);
  };

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: handleSubmit,
    validationSchema: courseEditorValidationSchema,
    validateOnBlur: true,
    validateOnChange: true,
  });

  const onSuccessLoadCourseData = (data: any): void => {
    const skills: ISkillsById = {};
    const { allSkills, ...courseData } = data;
    for (const item of allSkills) {
      skills[item._id] = item;
    }
    setSkillsById(skills);
    formik.setValues(courseData, false);
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

  const handleAddCourseAvatar = async (event: BaseSyntheticEvent) => {
    const fileLink = await uploadFile(event.target.files[Numbers.zero]);
    formik.setFieldValue('avatar', fileLink);
  };

  useEffect(() => {
    if (!formik.isValid && formik.isSubmitting && !formik.isValidating) {
      enqueueSnackbar(errorSnackbarMessage.validationError, errorSnackbar);
    }
  }, [formik.isSubmitting, formik.isValid, formik.isValidating]);

  const handleChangeCorrectAnswer = (event: BaseSyntheticEvent) => {
    formik.setFieldValue(event.target.name, Number.parseInt(event.target.value, RADIX_PARAMETER));
  };

  const onFieldBlur = (event: BaseSyntheticEvent) => {
    const value = event.target.value || '';
    const formattedValue = formatFieldValue(value);
    formik.setFieldValue(event.target.name, formattedValue);
    formik.handleBlur(event);
  };

  const handleChangeDuration = (event: BaseSyntheticEvent) => {
    const durationString = event.target.value;
    const [hours, minutes] = durationString.split(':');
    const totalSeconds =
      Number(hours) * SECONDS_PARAMETER * SECONDS_PARAMETER + Number(minutes) * SECONDS_PARAMETER;
    formik.setFieldValue(event.target.name, totalSeconds);
  };

  const scrollToTop = () => {
    if (courseEditorRef.current) {
      courseEditorRef.current.scrollTo({ top: Numbers.zero });
    }
  };

  const onSkillBlur = (event: BaseSyntheticEvent) => {
    formik.setFieldTouched(`${event.target.name}.name`);
    formik.validateField(event.target.name);
  };

  const onSkillPointsBlur = (event: BaseSyntheticEvent) => {
    formik.setFieldTouched(`${event.target.name}.points`);
    formik.validateField(event.target.name);
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
        handleChangeDuration={handleChangeDuration}
        handleAddCourseAvatar={handleAddCourseAvatar}
        onFieldBlur={onFieldBlur}
        onSkillBlur={onSkillBlur}
        onSkillPointsBlur={onSkillPointsBlur}
        ungroupedSkills={ungroupedSkills}
        editCourseDataMutate={editCourseDataMutate}
        isEditCourseDataMutateLoading={isEditCourseDataMutateLoading}
        scrollToTop={scrollToTop}
        courseEditorRef={courseEditorRef}
      />
    </FormikProvider>
  );
};

export default CourseEditorContainer;
