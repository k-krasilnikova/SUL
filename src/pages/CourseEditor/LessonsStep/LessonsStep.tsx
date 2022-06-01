import { FC } from 'react';
import { FieldArray } from 'formik';

import Loader from 'components/Loader';
import isLastElem from 'utils/helpers/arrays/isLastElem';
import { FormWrapper, SectionName } from 'pages/CourseEditor/styled';
import { IStepProps } from 'pages/CourseEditor/types';
import { EditorTitles } from 'constants/courseEditor';
import { ButtonLabels } from 'constants/ButtonLabels';

import LessonItem from './LessonItem';
import { LessonsStepWrapper, LessonButton } from './styled';

const LessonsStep: FC<IStepProps> = ({ formik, courseData, isCourseDataLoading }) =>
  isCourseDataLoading ? (
    <Loader type="content" />
  ) : (
    <FormWrapper>
      <SectionName>{EditorTitles.lessonStepTitle}</SectionName>
      {courseData &&
        Object.values(formik.values.materials).length &&
        formik.values?.materials.map((material, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <LessonsStepWrapper key={index}>
            <FieldArray name="materials">
              {({ remove, push }) => (
                <>
                  <LessonItem material={material} index={index} formik={formik} />
                  {isLastElem(formik.values.materials, index) ? (
                    <LessonButton variant="mediumOutlined" onClick={() => push({})}>
                      {ButtonLabels.addMoreLessons}
                    </LessonButton>
                  ) : (
                    <LessonButton variant="mediumOutlined" onClick={() => remove(index)}>
                      {ButtonLabels.removeLesson}
                    </LessonButton>
                  )}
                </>
              )}
            </FieldArray>
          </LessonsStepWrapper>
        ))}
    </FormWrapper>
  );

export default LessonsStep;
