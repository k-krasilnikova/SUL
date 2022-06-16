import { FC } from 'react';
import { MenuItem } from '@mui/material';

import Image from 'components/Image';
import Loader from 'components/Loader';
import { EditorTitles, COURSE_COMPLEXITY } from 'constants/courseEditor';
import { FormWrapper, SectionName } from 'pages/CourseEditor/styled';
import { addAvatarIcon } from 'icons';

import {
  AvatarWrapper,
  DescriptionField,
  DescriptionWrapper,
  Field,
  ImageWrapper,
  SecondaryText,
  SectionWrapper,
  NewAvatarImageWrapper,
  AddImageInput,
  NewImageLabel,
  AddImageIcon,
} from './styled';
import { IStepProps } from '../types';

const DefinitionStep: FC<IStepProps> = ({
  formik,
  isCourseDataLoading,
  onFieldBlur,
  handleAddCourseAvatar,
}) =>
  isCourseDataLoading ? (
    <Loader type="content" />
  ) : (
    <>
      <FormWrapper>
        <SectionName>{EditorTitles.definitionStepTitle}</SectionName>
        <SectionWrapper>
          <Field
            variant="outlined"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={onFieldBlur}
            error={Boolean(formik.errors?.title)}
            helperText={formik.errors?.title}
          />
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
          <NewAvatarImageWrapper>
            <AddImageIcon alt="addAvatar" src={addAvatarIcon} />
            <AddImageInput
              type="file"
              accept="image/*"
              id="avatar"
              name="avatar"
              multiple
              onChange={handleAddCourseAvatar}
            />
            <NewImageLabel htmlFor="avatar">
              <Image imageUrl={formik.values.avatar} newImage />
            </NewImageLabel>
          </NewAvatarImageWrapper>
        </ImageWrapper>
        <DescriptionWrapper>
          <SectionName>{EditorTitles.definitionStepDescription}</SectionName>
        </DescriptionWrapper>
        <DescriptionField
          multiline
          id="description"
          name="description"
          value={formik.values.description}
          onBlur={onFieldBlur}
          onChange={formik.handleChange}
          error={Boolean(formik.errors?.description)}
          helperText={formik.errors?.description}
        />
      </FormWrapper>
    </>
  );

export default DefinitionStep;
