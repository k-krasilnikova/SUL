/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react-hooks/exhaustive-deps */
import { BaseSyntheticEvent, ChangeEvent, FC, useRef, useState } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { useParams } from 'react-router';

import { useGetSkills } from 'api/skills';
import { useGetCourseEditorData, useEditCourseData } from 'api/admin';
import { INITIAL_NUMBER_POINT, INITIAL_VALUES, RADIX_PARAMETER } from 'constants/courseEditor';
import { Numbers } from 'enums/numbers';
import { courseEditorValidationSchema } from 'validations/schemas';
import { useCallbackPrompt } from 'hooks';
import { ConfirmLeavePage } from 'components/Dialogs';

import CourseEditor from './CourseEditor';
import { ISkillsById } from './types';
import { formatFieldValue, formatValuesForSubmit, convertSecondsToString } from './utils';

const CourseEditorContainer: FC = () => {
  const params = useParams();
  const courseEditorRef = useRef<HTMLElement>(null);
  const [skillsById, setSkillsById] = useState<ISkillsById>({});
  const [isSubmitButton, setSubmitButton] = useState(false);
  const [showPrompt, confirmNavigation, cancelNavigation] = useCallbackPrompt(!isSubmitButton);
  const [isLeavePageDialogOpen, setLeavePageDialogOpen] = useState(false);

  const { mutate: editCourseDataMutate, isLoading: isEditCourseDataMutateLoading } =
    useEditCourseData(params.courseId);

  const handleSubmit = (values: any) => {
    const formattedValues = formatValuesForSubmit(values);
    editCourseDataMutate(formattedValues);
    setSubmitButton(true);
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
    const convertedDuration = convertSecondsToString(courseData.test.timeout);
    formik.setValues(
      {
        ...courseData,
        test: {
          ...courseData.test,
          timeout: convertedDuration,
        },
      },
      false,
    );
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

  const handleCancelLeavePage = (): void => {
    setLeavePageDialogOpen(false);
    cancelNavigation();
  };

  const handleNavigateBack = (): void => {
    setLeavePageDialogOpen(false);
    confirmNavigation();
  };

  const validateStep = () => {
    return formik?.isValid;
  };

  return (
    <FormikProvider value={formik}>
      <CourseEditor
        courseData={courseEditorData}
        isCourseDataLoading={isCourseEditorDataLoading}
        formik={formik}
        handleChangeTechnology={handleChangeTechnology}
        handleChangeCorrectAnswer={handleChangeCorrectAnswer}
        onFieldBlur={onFieldBlur}
        onSkillBlur={onSkillBlur}
        onSkillPointsBlur={onSkillPointsBlur}
        ungroupedSkills={ungroupedSkills}
        editCourseDataMutate={editCourseDataMutate}
        isEditCourseDataMutateLoading={isEditCourseDataMutateLoading}
        scrollToTop={scrollToTop}
        courseEditorRef={courseEditorRef}
        validateStep={validateStep}
      />
      <ConfirmLeavePage
        isOpened={isLeavePageDialogOpen || (showPrompt && !isSubmitButton)}
        isLoading={isEditCourseDataMutateLoading}
        handleCancelLeavePage={handleCancelLeavePage}
        handleLeavePage={handleNavigateBack}
        isCourseEditor
      />
    </FormikProvider>
  );
};

export default CourseEditorContainer;
