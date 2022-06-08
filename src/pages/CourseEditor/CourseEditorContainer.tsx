/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-syntax */
import { BaseSyntheticEvent, ChangeEvent, FC, useState } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { useParams } from 'react-router';
// import { useSnackbar } from 'notistack';

import useGetCourseEditorData from 'api/admin';
import useEditCourseData from 'api/admin/editCourseData';
import { INITIAL_NUMBER_POINT, INITIAL_VALUES, RADIX_PARAMETER } from 'constants/courseEditor';
// import { errorSnackbar, errorSnackbarMessage } from 'constants/snackbarVariant';
import { courseEditorValidationSchema } from 'validations/schemas';

import CourseEditor from './CourseEditor';
import { ISkillsById } from './types';
import { formatFieldValue } from './utils';

const CourseEditorContainer: FC = () => {
  const params = useParams();
  // const { enqueueSnackbar } = useSnackbar();
  const [skillsById, setSkillsById] = useState<ISkillsById>({});

  const { mutate: editCourseDataMutate } = useEditCourseData(params.courseId);

  const handleSubmit = (values: any) => {
    // const formattedValues = {
    //   ...values,
    //   materials: [
    //     {
    //       content: values.materials,
    //     },
    //   ],
    //   technologies: values.technologies.map((technology: any) => ({
    //     skill: technology._id,
    //     points: technology.points,
    //   })),
    //   test: {
    //     title: values.test.title,
    //     timeout: values.test.timeout,
    //     questions: values.test.questions.map((question: any) => ({
    //       question: question.question,
    //       correctAnswer: question.correctAnswer,
    //       answers: question.answers,
    //     })),
    //   },
    // };

    const formattedValues = {
      avatar: values.avatar,
      title: values.title,
      description: values.description,
      materials: [
        {
          content: values.materials,
        },
      ],
      technologies: values.technologies.map((technology: any) => ({
        skill: technology._id,
        points: technology.points,
      })),
      test: {
        title: values.test.title,
        timeout: values.test.timeout,
        questions: values.test.questions.map((question: any) => ({
          question: question.question,
          correctAnswer: question.correctAnswer,
          answers: question.answers,
        })),
      },
    };

    console.log('values', values);
    console.log('formattedValues', formattedValues);
    editCourseDataMutate(formattedValues);
  };

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: handleSubmit,
    validationSchema: courseEditorValidationSchema,
    validateOnBlur: true,
    validateOnChange: true,
  });

  // useEffect(() => {
  //   if (!formik.isValid && !formik.isValidating && formik.isSubmitting) {
  //     enqueueSnackbar(errorSnackbarMessage.validationError, errorSnackbar);
  //   }
  // }, [formik.isSubmitting, formik.isValid, formik.isValidating, enqueueSnackbar]);

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

  const handleChangeCorrectAnswer = (event: BaseSyntheticEvent) => {
    formik.setFieldValue(event.target.name, Number.parseInt(event.target.value, RADIX_PARAMETER));
  };

  const onFieldBlur = (event: BaseSyntheticEvent) => {
    const value = event.target.value || '';
    const formattedValue = formatFieldValue(value);
    formik.setFieldValue(event.target.name, formattedValue);
    formik.handleBlur(event);
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
        editCourseDataMutate={editCourseDataMutate}
      />
    </FormikProvider>
  );
};

export default CourseEditorContainer;
