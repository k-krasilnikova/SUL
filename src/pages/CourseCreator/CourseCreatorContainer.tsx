import { BaseSyntheticEvent, FC, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useFormik, FormikProvider } from 'formik';

import { Numbers } from 'enums/numbers';
import { useGetSkills } from 'api/skills';
import { PATHS } from 'constants/routes';
import { INITIAL_VALUES, RADIX_PARAMETER } from 'constants/courseEditor';
import { courseEditorValidationSchema } from 'validations/schemas';
import { formatFieldValue } from 'pages/CourseEditor/utils';

import CourseCreator from './CourseCreator';

const CourseCreatorContainer: FC = () => {
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (): void => {},
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

  const handleAddCourseAvatar = (event: BaseSyntheticEvent) => {
    formik.setFieldValue(
      'avatar',
      URL.createObjectURL(event.target.files[Numbers.zero] as Blob | MediaSource),
    );
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
