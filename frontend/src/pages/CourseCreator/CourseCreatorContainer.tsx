/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-syntax */
import { BaseSyntheticEvent, FC } from 'react';
import { useFormik, FormikProvider } from 'formik';

import { useGetSkills } from 'api/skills';
import { INITIAL_VALUES, RADIX_PARAMETER } from 'constants/courseEditor';
import { courseEditorValidationSchema } from 'validations/schemas';
import { formatFieldValue } from 'pages/CourseEditor/utils';
import { useLocation } from 'react-router-dom';
import { ICourseCreatorContainer } from './types';
import CourseCreator from './CourseCreateor';
import { PATHS } from '../../constants/routes';

const CourseCreatorContainer: FC<ICourseCreatorContainer> = () => {
  const { pathname } = useLocation();
  const isCreateCourseMode = pathname === PATHS.createCourse;

  // const [skillsById, setSkillsById] = useState<ISkillsById>({});

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (): void => {},
    validationSchema: courseEditorValidationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    enableReinitialize: true,
  });

  // const { data: courseEditorData, isLoading: isCourseEditorDataLoading } = useGetCourseEditorData(
  //   params.courseId as string,
  //   onSuccessLoadCourseData,
  // );

  // const onSuccessLoadCourseData = (data: any): void => {
  //   const skills: ISkillsById = {};
  //   for (const item of data.allSkills) {
  //     skills[item._id] = item;
  //   }
  //   setSkillsById(skills);
  //   formik.setValues(data, false);
  // };

  const { data: courseDateCreateCourse } = useGetSkills();

  let unGroupedSkills = {};
  if (courseDateCreateCourse) {
    unGroupedSkills = courseDateCreateCourse.reduce(
      (acc, group) => ({
        ...acc,
        ...group.skills.reduce((j, o) => ({ [o._id]: o, ...j }), {}),
      }),
      {},
    );
  }

  // const handleChangeTechnology = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { value, name } = event.target;
  //   const skill = skillsById[value];
  //   formik.setFieldValue(name, { ...skill, points: INITIAL_NUMBER_POINT });
  // };

  // console.log( 'formik values');

  const handleChangeCorrectAnswer = (event: BaseSyntheticEvent) => {
    formik.setFieldValue(event.target.name, Number.parseInt(event.target.value, RADIX_PARAMETER));
  };

  const onFieldBlur = (event: BaseSyntheticEvent) => {
    const value = event.target.value || '';
    const formattedValue = formatFieldValue(value);
    formik.setFieldValue(event.target.name, formattedValue);
    formik.handleBlur(event);
  };
  const handleAddCourseAvatar = (event: BaseSyntheticEvent) => {
    formik.setFieldValue(
      'avatar',
      URL.createObjectURL(event.target.files[0] as Blob | MediaSource),
    );
  };

  // console.log(courseDateCreateCourse, 'COURSE DATAAA');
  // console.log(formik.values, 'formik values');

  return (
    <FormikProvider value={formik}>
      <CourseCreator
        courseDateCreateCourse={courseDateCreateCourse}
        // isCourseDataLoading={isCourseEditorDataLoading}
        formik={formik}
        handleChangeCorrectAnswer={handleChangeCorrectAnswer}
        onFieldBlur={onFieldBlur}
        handleAddCourseAvatar={handleAddCourseAvatar}
        isCreateCourseMode={isCreateCourseMode}
        unGroupedSkills={unGroupedSkills}
      />
    </FormikProvider>
  );
};

export default CourseCreatorContainer;
