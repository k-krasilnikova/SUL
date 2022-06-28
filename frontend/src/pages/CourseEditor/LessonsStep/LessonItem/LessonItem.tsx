import { FC } from 'react';
import { MenuItem, TextField } from '@mui/material';

import { ILessonItemProps } from 'pages/CourseEditor/types';
import { Numbers } from 'enums/numbers';
import {
  LESSONS_TYPE,
  LESSONS_TYPE_TITLE_MAP,
  EditorTitles,
  MAX_EXERCISE_TITLE_LENGTH,
  MAX_MATERIAL_LENGTH,
  LESSONS_PLACEHOLDER_MAPPER,
} from 'constants/courseEditor';
import { Field, InputLengthCounter } from 'pages/CourseEditor/DefinitionStep/styled';
import { ContentElementType } from 'enums/materials';

import {
  InputBox,
  InputTitle,
  ItemTitle,
  LessonInnerBox,
  LessonItemWrapper,
  MaterialFieldWrapper,
} from './styled';

const LessonItem: FC<ILessonItemProps> = ({
  formik,
  material,
  index,
  onFieldBlur,
  onLinkFieldBlur,
}) => {
  const isTextType = material.type === ContentElementType.plain;

  return (
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
        >
          {LESSONS_TYPE.map((type) => (
            <MenuItem key={type.value} value={type.value}>
              {type.label}
            </MenuItem>
          ))}
        </Field>
        <InputBox>
          <InputTitle>{LESSONS_TYPE_TITLE_MAP[material.type]}</InputTitle>
          <MaterialFieldWrapper isOnlyTextInput={isTextType}>
            <Field
              multiline={isTextType}
              isTextType={isTextType}
              id={`materials[${index}].material`}
              name={`materials[${index}].material`}
              placeholder={LESSONS_PLACEHOLDER_MAPPER[material.type]}
              value={material.material}
              onChange={formik.handleChange}
              onBlur={isTextType ? onFieldBlur : onLinkFieldBlur}
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
};
export default LessonItem;
