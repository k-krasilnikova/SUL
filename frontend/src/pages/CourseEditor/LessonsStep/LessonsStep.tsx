import { FC } from 'react';
import { FieldArray } from 'formik';

import { ILessonsStepProps } from 'pages/CourseEditor/types';
import { ButtonLabels } from 'constants/ButtonLabels';
import { Titles } from 'constants/courseEditor';
import isLastElem from 'utils/helpers/arrays/isLastElem';

import LessonItem from './LessonItem';
import { LessonsStepContainer, LessonsStepWrapper, LessonsStepTitle, LessonButton } from './styled';

const LessonsStep: FC<ILessonsStepProps> = ({
  formik,
  courseData,
  selectOption,
  handleChangeOption,
}) => (
  <LessonsStepContainer>
    <LessonsStepTitle>{Titles.lessonStepTitle}</LessonsStepTitle>
    {courseData &&
      Object.values(formik.values.materials).length &&
      formik.values?.materials.map((material, index) => (
        <LessonsStepWrapper key={formik.values.materials[index].stage}>
          <FieldArray name="materials">
            {({ remove, push }) => (
              <>
                <LessonItem
                  index={index}
                  material={material}
                  formik={formik}
                  selectOption={selectOption}
                  handleChangeOption={handleChangeOption}
                />
                {isLastElem(formik.values.materials, index) ? (
                  <LessonButton variant="mediumOutlined" onClick={() => push(material)}>
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
  </LessonsStepContainer>
);

export default LessonsStep;
