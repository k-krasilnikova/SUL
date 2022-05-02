import { FC } from 'react';
import { MenuItem } from '@mui/material';

import Image from 'components/Image';
import Button from 'components/Button';
import { ButtonLabels } from 'constants/ButtonLabels';
import { COURSE_COMPLEXITY } from 'constants/courseEditor';
import { BackButton } from 'pages/LearningCourse/styled';

import {
  AvatarWrapper,
  ButtonWrapper,
  DescriptionField,
  DescriptionWrapper,
  Field,
  FormWrapper,
  ImageWrapper,
  InnerWrapper,
  SecondaryText,
  SectionName,
  SectionWrapper,
} from './styled';
import { IDefinitionStepProps } from '../types';

const DefinitionStep: FC<IDefinitionStepProps> = ({
  courseData,
  courseComplexity,
  handleChange,
}) => (
  <InnerWrapper>
    <BackButton variant="medium" color="primary">
      {ButtonLabels.back}
    </BackButton>
    <FormWrapper>
      <SectionName>Course details</SectionName>
      <SectionWrapper>
        <Field variant="outlined" defaultValue={courseData?.title} />
        <Field select value={courseComplexity} onChange={handleChange} variant="outlined">
          {COURSE_COMPLEXITY.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Field>
      </SectionWrapper>
      <AvatarWrapper>
        <SectionName>Avatar</SectionName>
        <SecondaryText>(Max size: 10Mb)</SecondaryText>
      </AvatarWrapper>
      <ImageWrapper>
        <Image imageUrl={courseData?.avatar} />
      </ImageWrapper>
      <DescriptionWrapper>
        <SectionName>Description</SectionName>
      </DescriptionWrapper>
      <DescriptionField multiline defaultValue={courseData && courseData?.description} />
    </FormWrapper>
    <ButtonWrapper>
      <Button variant="mediumContained">{ButtonLabels.next}</Button>
    </ButtonWrapper>
  </InnerWrapper>
);

export default DefinitionStep;
