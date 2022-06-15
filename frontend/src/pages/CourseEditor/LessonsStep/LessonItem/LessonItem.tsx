import { FC } from 'react';
import { MenuItem } from '@mui/material';

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
  InputTextArea,
  ItemTitle,
  LessonInnerBox,
  LessonItemWrapper,
  MaterialFieldWrapper,
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
        <MaterialFieldWrapper>
          {material.type === ContentElementType.video ||
          material.type === ContentElementType.presentation ? (
            <Field
              id={`materials[${index}].material`}
              name={`materials[${index}.material`}
              placeholder={material.material}
              value={material.material}
              onChange={formik.handleChange}
              error={Boolean(formik.errors?.materials?.[index]?.material)}
              helperText={formik.errors?.materials?.[index]?.material}
            />
          ) : (
            <InputTextArea
              multiline
              id={`materials[${index}].material`}
              name={`materials[${index}.material`}
              value={material.material}
              onChange={formik.handleChange}
              onBlur={onFieldBlur}
              error={Boolean(formik.errors?.materials?.[index]?.material)}
              helperText={formik.errors?.materials?.[index]?.material}
            />
          )}
          <InputLengthCounter>{`${formik.values.materials?.[index]?.material.length}/${MAX_MATERIAL_LENGTH}`}</InputLengthCounter>
        </MaterialFieldWrapper>
        <InputTitle>{EditorTitles.exerciseTitle}</InputTitle>
        <MaterialFieldWrapper>
          <Field
            id={`materials[${index}].exercise.title`}
            name={`materials[${index}].exercise.title`}
            placeholder={material?.exercise?.title}
            value={material?.exercise?.title}
            onChange={formik.handleChange}
            onBlur={onFieldBlur}
            error={Boolean(formik.errors?.materials?.[index]?.exercise?.title)}
            helperText={formik.errors?.materials?.[index]?.exercise?.title}
          />
          <InputLengthCounter>{`${
            material?.exercise?.title?.length ? material?.exercise?.title?.length : Numbers.zero
          }/${EXERCISE_MAX_TITLE_LENGTH}`}</InputLengthCounter>
        </MaterialFieldWrapper>
        <InputTitle>{EditorTitles.exerciseDescription}</InputTitle>
        <InputTextArea
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
