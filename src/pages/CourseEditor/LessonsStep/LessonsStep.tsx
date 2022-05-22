import { FC } from 'react';
import { FieldArray } from 'formik';

import { ILessonsStepProps } from 'pages/CourseEditor/types';
import { ButtonLabels } from 'constants/ButtonLabels';
import { Titles } from 'constants/courseEditor';
import isLastElem from 'utils/helpers/arrays/isLastElem';

import LessonItem from './LessonItem';
import { LessonsStepWrapper, LessonButton } from './styled';

import { FormWrapper, SectionName } from '../DefinitionStep/styled';

const LessonsStep: FC<ILessonsStepProps> = ({
  formik,
  lessonsContent,
  courseData,
  selectOption,
  handleChangeOption,
}) => (
  <FormWrapper>
    <SectionName>{Titles.lessonStepTitle}</SectionName>
    {courseData &&
      Object.values(formik.values.materials).length &&
      formik.values?.materials.map((material, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <LessonsStepWrapper key={index}>
          <FieldArray name="materials">
            {({ remove, push }) => (
              <>
                <LessonItem
                  material={material}
                  lessonsContent={lessonsContent}
                  index={index}
                  formik={formik}
                  selectOption={selectOption}
                  handleChangeOption={handleChangeOption}
                />
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
