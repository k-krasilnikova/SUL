/* eslint-disable react/no-array-index-key */

import { FC } from 'react';
import { MenuItem } from '@mui/material';
import { FieldArray } from 'formik';

import { ButtonLabels } from 'constants/ButtonLabels';
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

const SkillsStep: FC<ISkillsStepProps> = ({ courseData, formik }) => {
  return (
    <FormWrapper>
      <SectionName>Edit course skills</SectionName>
      <SkillsTitleWrapper>
        <SkillsText>Achieved skill</SkillsText>
      </SkillsTitleWrapper>
      {courseData &&
        courseData.allSkills.length &&
        formik.values.technologies.map((technology, index) => (
          <SkillWrapper key={index}>
            <FieldArray name="technologies">
              {({ remove, push }) => (
                <>
                  <InnerWrapper>
                    <SkillField
                      select
                      value={technology._id || ''}
                      label="Technology"
                      // onChange={handleTechnologiChange}
                      variant="outlined"
                      id={`technologies[${index}]._id`}
                      name={`technologies[${index}]`}
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
                      value={technology.points || ''}
                      label="Level"
                      onChange={formik.handleChange}
                      variant="outlined"
                      id={`technologies[${index}].points`}
                      name={`technologies[${index}].points`}
                    >
                      {getPointsArr(technology.maxScore).map((option) => (
                        <MenuItem key={option} value={option}>
                          {`${option}/${technology.maxScore}`}
                        </MenuItem>
                      ))}
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
};

export default SkillsStep;
