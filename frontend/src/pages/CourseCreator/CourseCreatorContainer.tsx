/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseSyntheticEvent, FC, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useFormik, FormikProvider } from 'formik';
import { useSnackbar } from 'notistack';

import { Numbers } from 'enums/numbers';
import { useGetSkills } from 'api/skills';
import { useCreateCourse } from 'api/admin';
import { PATHS } from 'constants/routes';
import { errorSnackbar, errorSnackbarMessage } from 'constants/snackbarVariant';
import { INITIAL_VALUES, RADIX_PARAMETER, SECONDS_PARAMETER } from 'constants/courseEditor';
import { courseEditorValidationSchema } from 'validations/schemas';
import { formatFieldValue, formatValuesForSubmit } from 'pages/CourseEditor/utils';
import { uploadFile } from 'utils/helpers/uploader';

import CourseCreator from './CourseCreator';

const CourseCreatorContainer: FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { mutate: createCourseMutate } = useCreateCourse();

  const handleSubmit = (values: any) => {
    const formattedValues = formatValuesForSubmit(values);
    createCourseMutate(formattedValues);
  };

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: handleSubmit,
    validationSchema: courseEditorValidationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    enableReinitialize: true,
  });

  const { pathname } = useLocation();
  const isCreateCourseMode = pathname === PATHS.courseCreator;
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

  useEffect(() => {
    if (!formik.isValid && formik.isSubmitting && !formik.isValidating) {
      enqueueSnackbar(errorSnackbarMessage.validationError, errorSnackbar);
    }
  }, [formik.isSubmitting, formik.isValid, formik.isValidating]);

  const handleAddCourseAvatar = async (event: BaseSyntheticEvent) => {
    const fileLink = await uploadFile(event.target.files[Numbers.zero]);
    formik.setFieldValue('avatar', fileLink);
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

  const handleChangeDuration = (event: BaseSyntheticEvent) => {
    const durationString = event.target.value;
    const [hours, minutes] = durationString.split(':');
    const totalSeconds =
      Number(hours) * SECONDS_PARAMETER * SECONDS_PARAMETER + Number(minutes) * SECONDS_PARAMETER;
    formik.setFieldValue(event.target.name, totalSeconds);
  };

  const courseCreatorRef = useRef<HTMLElement>(null);

  const scrollToTop = () => {
    if (courseCreatorRef.current) {
      courseCreatorRef.current.scrollTo({ top: Numbers.zero });
    }
  };

  return (
    <FormikProvider value={formik}>
      <CourseCreator
        formik={formik}
        handleChangeCorrectAnswer={handleChangeCorrectAnswer}
        handleChangeDuration={handleChangeDuration}
        onFieldBlur={onFieldBlur}
        handleAddCourseAvatar={handleAddCourseAvatar}
        isCreateCourseMode={isCreateCourseMode}
        ungroupedSkills={ungroupedSkills}
        scrollToTop={scrollToTop}
        courseCreatorRef={courseCreatorRef}
      />
    </FormikProvider>
  );
};

export default CourseCreatorContainer;
