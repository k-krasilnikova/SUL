/* eslint-disable react/no-array-index-key */

import { FC } from 'react';
import { MenuItem } from '@mui/material';
import { FieldArray } from 'formik';

import Loader from 'components/Loader';
import { ButtonLabels } from 'constants/ButtonLabels';
import { EditorTitles } from 'constants/courseEditor';
import isLastElem from 'utils/helpers/arrays/isLastElem';
import { FormWrapper, SectionName } from 'pages/CourseEditor/styled';

import {
  InnerWrapper,
  SkillButton,
  SkillField,
  SkillsText,
  SkillsTitleWrapper,
  SkillWrapper,
} from './styled';
import { ISkillsStepProps } from '../types';
import { getPointsArr } from '../utils';

const SkillsStep: FC<ISkillsStepProps> = ({
  courseData,
  formik,
  isCourseDataLoading,
  handleChangeTechnology,
  onSkillBlur,
  onSkillPointsBlur,
}) =>
  isCourseDataLoading ? (
    <Loader type="content" />
  ) : (
    <FormWrapper>
      <SectionName>{EditorTitles.skillStepTitile}</SectionName>
      <SkillsTitleWrapper>
        <SkillsText>{EditorTitles.skillDescription}</SkillsText>
      </SkillsTitleWrapper>
      <FieldArray name="technologies" validateOnChange={false}>
        {({ remove, push }) => (
          <>
            {courseData &&
              courseData.allSkills.length &&
              formik.values.technologies.map((technology, index) => (
                <SkillWrapper key={index}>
                  <>
                    <InnerWrapper>
                      <SkillField
                        select
                        variant="outlined"
                        label="Technology"
                        value={technology._id || ''}
                        id={`technologies[${index}]._id`}
                        name={`technologies[${index}]`}
                        onBlur={onSkillBlur}
                        onChange={handleChangeTechnology}
                        error={
                          formik.touched.technologies?.[index]?.name &&
                          Boolean(formik.errors?.technologies?.[index]?.name)
                        }
                        helperText={
                          formik.touched.technologies?.[index]?.name &&
                          formik.errors?.technologies?.[index]?.name
                        }
                      >
                        {courseData &&
                          courseData.allSkills.map((skill) => (
                            <MenuItem key={skill._id} value={skill._id}>
                              {skill.name}
                            </MenuItem>
                          ))}
                      </SkillField>
                      <SkillField
                        select
                        variant="outlined"
                        label="Level"
                        value={technology.points || ''}
                        id={`technologies[${index}].points`}
                        name={`technologies[${index}].points`}
                        onBlur={onSkillPointsBlur}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.technologies?.[index]?.points &&
                          Boolean(formik.errors?.technologies?.[index]?.points)
                        }
                        helperText={
                          formik.touched.technologies?.[index]?.points &&
                          formik.errors?.technologies?.[index]?.points
                        }
                      >
                        {getPointsArr(technology.maxScore).map((point) => (
                          <MenuItem key={point} value={point}>
                            {`${point}/${technology.maxScore}`}
                          </MenuItem>
                        ))}
                      </SkillField>
                    </InnerWrapper>
                    {isLastElem(formik.values.technologies, index) ? (
                      <SkillButton
                        variant="mediumOutlined"
                        disabled={Boolean(formik.errors.technologies)}
                        onClick={() =>
                          push({
                            name: '',
                            points: '',
                          })
                        }
                      >
                        {ButtonLabels.addMoreSkills}
                      </SkillButton>
                    ) : (
                      <SkillButton variant="mediumOutlined" onClick={() => remove(index)}>
                        {ButtonLabels.removeSkill}
                      </SkillButton>
                    )}
                  </>
                </SkillWrapper>
              ))}
          </>
        )}
      </FieldArray>
    </FormWrapper>
  );

export default SkillsStep;
