import { FC } from 'react';
import { MenuItem, TextField } from '@mui/material';

import Image from 'components/Image';
import Loader from 'components/Loader';
import {
  EditorTitles,
  COURSE_COMPLEXITY,
  MAX_TITLE_LENGTH,
  MAX_DESCRIPTION_LENGTH,
} from 'constants/courseEditor';
import { FormWrapper, SectionName } from 'pages/CourseEditor/styled';

import {
  AvatarWrapper,
  DescriptionFieldWrapper,
  DescriptionWrapper,
  Field,
  FieldWrapper,
  ImageWrapper,
  InputLengthCounter,
  SecondaryText,
  SectionWrapper,
} from './styled';
import { IStepProps } from '../types';

const DefinitionStep: FC<IStepProps> = ({ formik, isCourseDataLoading, onFieldBlur }) =>
  isCourseDataLoading ? (
    <Loader type="content" />
  ) : (
    <>
      <FormWrapper>
        <SectionName>{EditorTitles.definitionStepTitle}</SectionName>
        <SectionWrapper>
          <FieldWrapper>
            <Field
              variant="outlined"
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={onFieldBlur}
              error={Boolean(formik.errors?.title)}
              helperText={formik.errors?.title}
            />
            <InputLengthCounter>{`${formik.values.title.length}/${MAX_TITLE_LENGTH}`}</InputLengthCounter>
          </FieldWrapper>
          <Field
            select
            value={formik.values.complexity || ''}
            onChange={formik.handleChange}
            variant="outlined"
            id="complexity"
            name="complexity"
          >
            {COURSE_COMPLEXITY.map((complexity) => (
              <MenuItem key={complexity.value} value={complexity.value}>
                {complexity.label}
              </MenuItem>
            ))}
          </Field>
        </SectionWrapper>
        <AvatarWrapper>
          <SectionName>{EditorTitles.avatarTitle}</SectionName>
          <SecondaryText>{EditorTitles.avatarDescription}</SecondaryText>
        </AvatarWrapper>
        <ImageWrapper>
          <Image imageUrl={formik.values.avatar} />
        </ImageWrapper>
        <DescriptionWrapper>
          <SectionName>{EditorTitles.definitionStepDescription}</SectionName>
        </DescriptionWrapper>
        <DescriptionFieldWrapper>
          <TextField
            multiline
            id="description"
            name="description"
            value={formik.values.description}
            onBlur={onFieldBlur}
            onChange={formik.handleChange}
            error={Boolean(formik.errors?.description)}
            helperText={formik.errors?.description}
          />
          <InputLengthCounter>{`${formik.values.description.length}/${MAX_DESCRIPTION_LENGTH}`}</InputLengthCounter>
        </DescriptionFieldWrapper>
      </FormWrapper>
    </>
  );

export default DefinitionStep;
