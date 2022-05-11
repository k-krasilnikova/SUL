/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import { Autocomplete, Box, UseAutocompleteProps } from '@mui/material';

import { ButtonLabels } from 'constants/ButtonLabels';
import { ICourse } from 'types/course';

import { BackButton, FormWrapper, InnerWrapper, SectionName } from '../DefinitionStep/styled';
import { SkillButton, SkillField, SkillsText, SkillWrapper } from './styled';
import { IFormik } from '../types';

export interface ISkillsStepProps {
  ungroupedSkills: {
    [key: string]: { group: string; image: string; maxScore: number; name: string; _id: string };
  };
  namesArr: string[];
  courseData?: ICourse;
  formik: IFormik;
  isNextSkillVisible?: boolean;
  handleAddSkill?: () => void;
  handleRemoveSkill?: () => void;
  arrOfObj1: { group: string; image: string; maxScore: number; name: string; _id: string }[];
}

const SkillsStep: FC<ISkillsStepProps> = ({
  ungroupedSkills,
  courseData,
  arrOfObj1,
  formik,
  namesArr,
}) => {
  return (
    <InnerWrapper>
      <BackButton variant="medium" color="primary">
        {ButtonLabels.back}
      </BackButton>
      <FormWrapper>
        <SectionName>Edit course skills</SectionName>
        <Box sx={{ marginTop: '50px', marginBottom: '25px' }}>
          <SkillsText>Achieved skill</SkillsText>
        </Box>
        {courseData &&
          courseData.technologies.map((technology: { skill: string; points: number }, index) => {
            console.log('technology', technology);
            const commonTechnologies = arrOfObj1.filter((commonTechnology) =>
              commonTechnology._id === technology.skill ? commonTechnology.name : null,
            );

            console.log({ commonTechnologies });

            return commonTechnologies.map((commonTechnology) => {
              let pointsArr = [];
              for (let i = 1; i <= commonTechnology.maxScore; i += 1) {
                pointsArr.push(i);
              }
              pointsArr = pointsArr.map((point) => `${point}/${commonTechnology.maxScore}`);
              return (
                <>
                  <SkillWrapper key={commonTechnology._id}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '28px',
                      }}
                    >
                      <Autocomplete
                        value={commonTechnology.name}
                        inputValue={commonTechnology.name}
                        options={namesArr}
                        id="skill"
                        renderInput={(params) => <SkillField {...params} label="Technology" />}
                      />
                      <Autocomplete
                        value={`${technology.points}`}
                        inputValue={`${technology.points}/${commonTechnology.maxScore}`}
                        options={pointsArr}
                        id="points"
                        renderInput={(params) => <SkillField {...params} label="Level" />}
                      />
                    </Box>
                    <SkillButton variant="mediumOutlined">{ButtonLabels.removeSkill}</SkillButton>
                  </SkillWrapper>
                </>
              );
            });
          })}
      </FormWrapper>
    </InnerWrapper>
  );
};

export default SkillsStep;
