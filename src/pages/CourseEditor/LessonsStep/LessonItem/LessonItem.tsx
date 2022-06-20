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
  MAX_EXERCISE_TITLE_LENGTH,
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
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={
          formik.touched.materials?.[index]?.type &&
          Boolean(formik.errors?.materials?.[index]?.type)
        }
        helperText={
          formik.touched.materials?.[index]?.type && formik.errors?.materials?.[index]?.type
        }
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
              placeholder={
                material.type === ContentElementType.presentation
                  ? 'Material presentation link'
                  : 'Material video link'
              }
              value={material.material}
              onChange={formik.handleChange}
              inputProps={{
                maxLength: MAX_MATERIAL_LENGTH,
              }}
              autoComplete="off"
              error={
                formik.touched.materials?.[index]?.material &&
                Boolean(formik.errors?.materials?.[index]?.material)
              }
              helperText={
                formik.touched.materials?.[index]?.material &&
                formik.errors?.materials?.[index]?.material
              }
            />
            <InputLengthCounter>{`${formik.values.materials?.[index]?.material.length}/${MAX_MATERIAL_LENGTH}`}</InputLengthCounter>
          </MaterialFieldWrapper>
        ) : (
          <MaterialTextFieldWrapper>
            <TextField
              multiline
              id={`materials[${index}].material`}
              name={`materials[${index}.material`}
              placeholder="Text material"
              value={material.material}
              onChange={formik.handleChange}
              onBlur={onFieldBlur}
              autoComplete="off"
              inputProps={{
                maxLength: MAX_MATERIAL_LENGTH,
              }}
              error={Boolean(formik.errors?.materials?.[index]?.material)}
              helperText={formik.errors?.materials?.[index]?.material}
            />
            <InputLengthCounter>
              {`${formik.values.materials?.[index]?.material.length}/${MAX_MATERIAL_LENGTH}`}
            </InputLengthCounter>
          </MaterialTextFieldWrapper>
        )}
        <InputTitle>{EditorTitles.exerciseTitle}</InputTitle>
        <MaterialFieldWrapper>
          <Field
            id={`materials[${index}].exercise.title`}
            name={`materials[${index}].exercise.title`}
            placeholder="Exercise title"
            value={material?.exercise?.title}
            onChange={formik.handleChange}
            onBlur={onFieldBlur}
            inputProps={{
              maxLength: MAX_EXERCISE_TITLE_LENGTH,
            }}
            autoComplete="off"
            error={
              formik.touched.materials?.[index]?.exercise?.title &&
              Boolean(formik.errors?.materials?.[index]?.exercise?.title)
            }
          />
          <InputLengthCounter>{`${
            material?.exercise?.title?.length ? material?.exercise?.title?.length : Numbers.zero
          }/${MAX_EXERCISE_TITLE_LENGTH}`}</InputLengthCounter>
        </MaterialFieldWrapper>
        <InputTitle>{EditorTitles.exerciseDescription}</InputTitle>
        <TextField
          multiline
          placeholder="Exercise description"
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
