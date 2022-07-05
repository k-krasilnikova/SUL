import { FC } from 'react';
import { FieldArray } from 'formik';

import Loader from 'components/Loader';
import { ButtonLabels } from 'constants/ButtonLabels';
import { EditorTitles } from 'constants/courseEditor';
import isLastElem from 'utils/helpers/arrays/isLastElem';
import { FormWrapper, SectionName } from 'pages/CourseEditor/styled';
import { IStepProps } from 'pages/CourseEditor/types';
import { Numbers } from 'enums/numbers';

import LessonItem from './LessonItem';
import { LessonsStepWrapper, LessonButton } from './styled';
import { ButtonsBox } from '../SkillsStep/styled';

const LessonsStep: FC<IStepProps> = ({ formik, courseData, isCourseDataLoading, ...props }) =>
  isCourseDataLoading ? (
    <Loader type="content" />
  ) : (
    <FormWrapper>
      <SectionName>{EditorTitles.lessonStepTitle}</SectionName>
      <FieldArray name="materials">
        {({ remove, push }) => (
          <>
            {Object.values(formik.values.materials).length &&
              formik.values?.materials.map((material, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <LessonsStepWrapper key={index}>
                  <LessonItem material={material} index={index} formik={formik} {...props} />
                  <ButtonsBox>
                    <LessonButton
                      variant="mediumOutlined"
                      onClick={() => {
                        remove(index);
                        if (formik.values.materials.length === Numbers.one) {
                          push({
                            type: 'video',
                            material: '',
                            exercise: {
                              title: '',
                              task: '',
                            },
                          });
                        }
                      }}
                    >
                      {ButtonLabels.removeLesson}
                    </LessonButton>
                    {isLastElem(formik.values.materials, index) && (
                      <LessonButton
                        variant="mediumOutlined"
                        onClick={() =>
                          push({
                            type: 'video',
                            material: '',
                            exercise: {},
                          })
                        }
                        disabled={!!formik.errors.materials}
                      >
                        {ButtonLabels.addMoreLessons}
                      </LessonButton>
                    )}
                  </ButtonsBox>
                </LessonsStepWrapper>
              ))}
          </>
        )}
      </FieldArray>
    </FormWrapper>
  );

export default LessonsStep;
