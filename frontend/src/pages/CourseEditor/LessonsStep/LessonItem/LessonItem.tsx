import { FC } from 'react';
import { MenuItem, TextField } from '@mui/material';

import { ContentElementType } from 'enums/materials';
import { ILessonItemProps } from 'pages/CourseEditor/types';
import { Numbers } from 'enums/numbers';
import {
  LESSONS_TYPE,
  LESSONS_TYPE_TITLE_MAP,
  EditorTitles,
  MAX_MATERIAL_LENGTH,
  EXERCISE_MAX_TITLE_LENGTH,
} from 'constants/courseEditor';
import { Field, InputLengthCounter } from 'pages/CourseEditor/DefinitionStep/styled';

import {
  InputBox,
  InputTitle,
  ItemTitle,
  LessonInnerBox,
  LessonItemWrapper,
  MaterialFieldWrapper,
  MaterialTextFieldWrapper,
} from './styled';

const LessonItem: FC<ILessonItemProps> = ({ formik, material, index, onFieldBlur }) => (
  <LessonItemWrapper>
    <ItemTitle>
      {EditorTitles.lessonCount} {index + Numbers.one}
    </ItemTitle>
    <LessonInnerBox>
      <Field
        select
        value={material.type}
        id={`materials[${index}].type`}
        name={`materials[${index}].type`}
        onChange={formik.handleChange}
        error={Boolean(formik.errors?.materials?.[index]?.type)}
        helperText={formik.errors?.materials?.[index]?.type}
      >
        {LESSONS_TYPE.map((type) => (
          <MenuItem key={type.value} value={type.value}>
            {type.label}
          </MenuItem>
        ))}
      </Field>
      <InputBox>
        <InputTitle>{LESSONS_TYPE_TITLE_MAP[material.type]}</InputTitle>
        {material.type === ContentElementType.presentation ||
        material.type === ContentElementType.video ? (
          <MaterialFieldWrapper>
            <Field
              id={`materials[${index}].material`}
              name={`materials[${index}.material`}
              placeholder={material.material}
              value={material.material}
              onChange={formik.handleChange}
              inputProps={{
                maxLength: 5000,
              }}
              autoComplete="off"
              error={Boolean(formik.errors?.materials?.[index]?.material)}
              helperText={formik.errors?.materials?.[index]?.material}
            />
            <InputLengthCounter>{`${formik.values.materials?.[index]?.material.length}/${MAX_MATERIAL_LENGTH}`}</InputLengthCounter>
          </MaterialFieldWrapper>
        ) : (
          <MaterialTextFieldWrapper>
            <TextField
              multiline
              id={`materials[${index}].material`}
              name={`materials[${index}.material`}
              value={material.material}
              onChange={formik.handleChange}
              onBlur={onFieldBlur}
              autoComplete="off"
              inputProps={{
                maxLength: 5000,
              }}
              error={Boolean(formik.errors?.materials?.[index]?.material)}
              helperText={formik.errors?.materials?.[index]?.material}
            />
            <InputLengthCounter>{`${formik.values.materials?.[index]?.material.length}/${MAX_MATERIAL_LENGTH}`}</InputLengthCounter>
          </MaterialTextFieldWrapper>
        )}
        <InputTitle>{EditorTitles.exerciseTitle}</InputTitle>
        <MaterialFieldWrapper>
          <Field
            id={`materials[${index}].exercise.title`}
            name={`materials[${index}].exercise.title`}
            placeholder={material?.exercise?.title}
            value={material?.exercise?.title}
            onChange={formik.handleChange}
            onBlur={onFieldBlur}
            inputProps={{
              maxLength: 400,
            }}
            autoComplete="off"
            error={Boolean(formik.errors?.materials?.[index]?.exercise?.title)}
            helperText={formik.errors?.materials?.[index]?.exercise?.title}
          />
          <InputLengthCounter>{`${
            material?.exercise?.title?.length ? material?.exercise?.title?.length : Numbers.zero
          }/${EXERCISE_MAX_TITLE_LENGTH}`}</InputLengthCounter>
        </MaterialFieldWrapper>
        <InputTitle>{EditorTitles.exerciseDescription}</InputTitle>
        <TextField
          multiline
          id={`materials[${index}].exercise.task`}
          name={`materials[${index}].exercise.task`}
          value={material?.exercise?.task}
          onChange={formik.handleChange}
          onBlur={onFieldBlur}
          error={Boolean(formik.errors?.materials?.[index]?.exercise?.task)}
          helperText={formik.errors?.materials?.[index]?.exercise?.task}
        />
      </InputBox>
    </LessonInnerBox>
  </LessonItemWrapper>
);

export default LessonItem;
