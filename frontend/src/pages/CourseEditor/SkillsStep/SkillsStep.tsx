/* eslint-disable react/no-array-index-key */

import { FC } from 'react';
import { MenuItem } from '@mui/material';
import { FieldArray } from 'formik';

import { ButtonLabels } from 'constants/ButtonLabels';
import isLastElem from 'utils/helpers/arrays/isLastElem';

import {
  InnerWrapper,
  SkillButton,
  SkillField,
  SkillsText,
  SkillsTitleWrapper,
  SkillWrapper,
} from './styled';
import { FormWrapper, SectionName } from '../DefinitionStep/styled';
import { ISkillsStepProps } from '../types';
import { getPointsArr } from '../utils';

const SkillsStep: FC<ISkillsStepProps> = ({ ungroupedSkills, courseData, formik }) => (
  <FormWrapper>
    <SectionName>Edit course skills</SectionName>
    <SkillsTitleWrapper>
      <SkillsText>Achieved skill</SkillsText>
    </SkillsTitleWrapper>
    {courseData &&
      Object.values(ungroupedSkills).length &&
      formik.values?.technologies?.map((technology: { skill: string; points: number }, index) => (
        <SkillWrapper key={index}>
          <FieldArray name="technologies">
            {({ remove, push }) => (
              <>
                <InnerWrapper>
                  <SkillField
                    select
                    value={technology.skill}
                    label="Technology"
                    onChange={formik.handleChange}
                    variant="outlined"
                    id={`technologies[${index}].skill`}
                    name={`technologies[${index}].skill`}
                  >
                    <MenuItem key="null" value={-1}>
                      select skill
                    </MenuItem>
                    {Object.values(ungroupedSkills).map((option) => (
                      <MenuItem key={option._id} value={option._id}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </SkillField>
                  <SkillField
                    select
                    value={technology.points}
                    label="Level"
                    onChange={formik.handleChange}
                    variant="outlined"
                    id={`technologies[${index}].points`}
                    name={`technologies[${index}].points`}
                  >
                    {getPointsArr(ungroupedSkills?.[technology.skill]?.maxScore || 0).map(
                      (option) => (
                        <MenuItem key={option} value={option}>
                          {`${option}/${ungroupedSkills?.[technology.skill]?.maxScore || 0}`}
                        </MenuItem>
                      ),
                    )}
                  </SkillField>
                </InnerWrapper>
                {isLastElem(formik.values.technologies, index) ? (
                  <SkillButton variant="mediumOutlined" onClick={() => push({})}>
                    {ButtonLabels.addMoreSkills}
                  </SkillButton>
                ) : (
                  <SkillButton variant="mediumOutlined" onClick={() => remove(index)}>
                    {ButtonLabels.removeSkill}
                  </SkillButton>
                )}
              </>
            )}
          </FieldArray>
        </SkillWrapper>
      ))}
  </FormWrapper>
);

export default SkillsStep;
