/* eslint-disable react/no-array-index-key */

import { FC } from 'react';
import { FieldArray } from 'formik';

import { ButtonLabels } from 'constants/ButtonLabels';
import { Titles } from 'constants/courseEditor';
import { ILessonsStepProps } from 'pages/CourseEditor/types';

import isLastElem from 'utils/helpers/arrays/isLastElem';
import LessonItem from './LessonItem';
import { LessonsStepContainer, LessonsStepWrapper, LessonsStepTitle } from './styled';
import { SkillButton } from '../SkillsStep/styled';

const LessonsStep: FC<ILessonsStepProps> = ({
  formik,
  courseData,
  selectOption,
  handleChangeOption,
}) => (
  <LessonsStepContainer>
    <LessonsStepTitle>{Titles.lessonStepTitle}</LessonsStepTitle>
    {courseData &&
      formik.values?.materials.map((material, index) => (
        <LessonsStepWrapper key={index}>
          <FieldArray name="materials">
            {({ remove, push }) => (
              <>
                <LessonItem
                  material={material}
                  formik={formik}
                  selectOption={selectOption}
                  handleChangeOption={handleChangeOption}
                />
                {isLastElem(formik.values.materials, index) ? (
                  <SkillButton variant="mediumOutlined" onClick={() => push({})}>
                    {ButtonLabels.addMoreLessons}
                  </SkillButton>
                ) : (
                  <SkillButton variant="mediumOutlined" onClick={() => remove(index)}>
                    {ButtonLabels.removeLesson}
                  </SkillButton>
                )}
              </>
            )}
          </FieldArray>
        </LessonsStepWrapper>
      ))}
  </LessonsStepContainer>
);

export default LessonsStep;
