/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseSyntheticEvent, FC, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFormik, FormikProvider } from 'formik';

import { Numbers } from 'enums/numbers';
import { useGetSkills } from 'api/skills';
import { useCreateCourse } from 'api/admin';
import { useGetCoursesPaths, useCallbackPrompt } from 'hooks';
import { PATHS } from 'constants/routes';
import { INITIAL_VALUES, RADIX_PARAMETER, SECONDS_PARAMETER } from 'constants/courseEditor';
import { courseEditorValidationSchema } from 'validations/schemas';
import { formatFieldValue, formatValuesForSubmit } from 'pages/CourseEditor/utils';
import { ConfirmLeavePage } from 'components/Dialogs';

import CourseCreator from './CourseCreator';
import { validators } from './utils';

const CourseCreatorContainer: FC = () => {
  const [isSubmitButton, setSubmitButton] = useState(false);
  const [showPrompt, confirmNavigation, cancelNavigation] = useCallbackPrompt(!isSubmitButton);
  const [isLeavePageDialogOpen, setLeavePageDialogOpen] = useState(false);

  const { mutate: createCourseMutate, isLoading: isCreateCourseDataLoading } = useCreateCourse();

  const handleSubmit = (values: any) => {
    const formattedValues = formatValuesForSubmit(values);
    createCourseMutate(formattedValues);
    setSubmitButton(true);
  };

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: handleSubmit,
    validationSchema: courseEditorValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
  });

  const { coursesPath } = useGetCoursesPaths();
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

  const handleCancelLeavePage = (): void => {
    setLeavePageDialogOpen(false);
    cancelNavigation();
  };

  const handleNavigateBack = (): void => {
    setLeavePageDialogOpen(false);
    confirmNavigation();
  };

  const validateStep = (step: number) => {
    const validator = validators[step];
    return validator(formik);
  };

  const selectedSkills: { [key: string]: boolean } = useMemo(() => {
    return formik.values.technologies.reduce((acc, skill) => ({ ...acc, [skill._id]: true }), {});
  }, [formik.values.technologies]);

  return (
    <FormikProvider value={formik}>
      <CourseCreator
        formik={formik}
        handleChangeCorrectAnswer={handleChangeCorrectAnswer}
        handleChangeDuration={handleChangeDuration}
        onFieldBlur={onFieldBlur}
        isCreateCourseMode={isCreateCourseMode}
        ungroupedSkills={ungroupedSkills}
        coursesPath={coursesPath}
        scrollToTop={scrollToTop}
        courseCreatorRef={courseCreatorRef}
        validateStep={validateStep}
        selectedSkills={selectedSkills}
      />
      <ConfirmLeavePage
        isOpened={isLeavePageDialogOpen || (showPrompt && !isSubmitButton)}
        isLoading={isCreateCourseDataLoading}
        handleCancelLeavePage={handleCancelLeavePage}
        handleLeavePage={handleNavigateBack}
        isCourseCreator
      />
    </FormikProvider>
  );
};

export default CourseCreatorContainer;
