import { FC } from 'react';
import { MenuItem } from '@mui/material';

import Image from 'components/Image';
import Button from 'components/Button';
import { ButtonLabels } from 'constants/ButtonLabels';
import { COURSE_COMPLEXITY } from 'constants/courseEditor';
import { BackButton } from 'pages/LearningCourse/styled';
import { PATHS } from 'constants/routes';
import transformRoute from 'utils/helpers/paths/transformRoute';
import { Link } from 'react-router-dom';

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
  // courseComplexity,
  // handleChange,
  formik,
}) => (
  <InnerWrapper>
    <BackButton
      variant="medium"
      color="primary"
      component={Link}
      to={transformRoute(PATHS.courseEditor, courseData?._id)}
    >
      {ButtonLabels.back}
    </BackButton>
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
        <Image imageUrl={formik.initialValues.avatar} />
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
    <ButtonWrapper>
      <Button variant="mediumContained">{ButtonLabels.next}</Button>
    </ButtonWrapper>
  </InnerWrapper>
);

export default DefinitionStep;
