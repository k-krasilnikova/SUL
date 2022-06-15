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
  ButtonsBox,
  InnerWrapper,
  SkillButton,
  SkillField,
  SkillsBox,
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
}) =>
  isCourseDataLoading ? (
    <Loader type="content" />
  ) : (
    <FormWrapper>
      <SectionName>{EditorTitles.skillStepTitile}</SectionName>
      <SkillsTitleWrapper>
        <SkillsText>{EditorTitles.skillDescription}</SkillsText>
      </SkillsTitleWrapper>
      <SkillsBox>
        <FieldArray name="technologies">
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
                          onChange={handleChangeTechnology}
                          error={Boolean(formik.errors?.technologies?.[index]?.name)}
                          helperText={formik.errors?.technologies?.[index]?.name}
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
                          onChange={formik.handleChange}
                          error={Boolean(formik.errors?.technologies?.[index]?.points)}
                          helperText={formik.errors?.technologies?.[index]?.points}
                        >
                          {getPointsArr(technology.maxScore).map((point) => (
                            <MenuItem key={point} value={point}>
                              {`${point}/${technology.maxScore}`}
                            </MenuItem>
                          ))}
                        </SkillField>
                      </InnerWrapper>
                      <ButtonsBox>
                        <SkillButton variant="mediumOutlined" onClick={() => remove(index)}>
                          {ButtonLabels.removeSkill}
                        </SkillButton>
                        {isLastElem(formik.values.technologies, index) && (
                          <SkillButton
                            variant="mediumOutlined"
                            disabled={Boolean(formik.errors.technologies)}
                            onClick={() =>
                              push({
                                _id: '',
                                name: 'Technology',
                                points: 1,
                                maxScore: 5,
                              })
                            }
                          >
                            {ButtonLabels.addMoreSkills}
                          </SkillButton>
                        )}
                      </ButtonsBox>
                    </>
                  </SkillWrapper>
                ))}
            </>
          )}
        </FieldArray>
      </SkillsBox>
    </FormWrapper>
  );

export default SkillsStep;
