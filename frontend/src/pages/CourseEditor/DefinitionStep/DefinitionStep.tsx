import { FC } from 'react';
import { MenuItem } from '@mui/material';

import Image from 'components/Image';
import { COURSE_COMPLEXITY } from 'constants/courseEditor';

import {
  AvatarWrapper,
  DescriptionField,
  DescriptionWrapper,
  Field,
  FormWrapper,
  ImageWrapper,
  SecondaryText,
  SectionName,
  SectionWrapper,
} from './styled';
import { IStepProps } from '../types';

const DefinitionStep: FC<IStepProps> = ({ formik }) => (
  <>
    <FormWrapper>
      <SectionName>Course details</SectionName>
      <SectionWrapper>
        <Field
          variant="outlined"
          id="title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <Field
          select
          value={formik.values.complexity}
          onChange={formik.handleChange}
          variant="outlined"
          id="complexity"
          name="complexity"
        >
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
        <Image imageUrl={formik.values.avatar} />
      </ImageWrapper>
      <DescriptionWrapper>
        <SectionName>Description</SectionName>
      </DescriptionWrapper>
      <DescriptionField
        multiline
        id="description"
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
      />
    </FormWrapper>
  </>
);

export default DefinitionStep;
