import { BaseSyntheticEvent } from 'react';
import { TextField } from '@mui/material';

import { ContentElementType } from 'enums/materials';
import { IFormik } from 'pages/CourseEditor/types';
import { MAX_MATERIAL_LENGTH } from 'constants/courseEditor';
import { Field, InputLengthCounter } from 'pages/CourseEditor/DefinitionStep/styled';

import { MaterialFieldWrapper, MaterialTextFieldWrapper } from './styled';

interface InputProps {
  formik: IFormik;
  material: {
    type: string;
    plain?: string;
    presentation?: string;
    video?: string;
    exercise?: { eN: number; title?: string; task: string; code: string };
  };
  index: number;
  onFieldBlur?: (event: BaseSyntheticEvent) => void;
}

type TinputMapper = {
  [key in ContentElementType]: (props: InputProps) => React.ReactElement;
};

const INPUT_MAPPER: TinputMapper = {
  [ContentElementType.plain]: ({ formik, material, index, onFieldBlur }: InputProps) => {
    console.log('TEXT TEXT TEXT TEXT');
    return (
      <MaterialTextFieldWrapper>
        <TextField
          multiline
          id={`materials[${index}].plain`}
          name={`materials[${index}.plain`}
          placeholder="Text material"
          value={material.plain}
          onChange={formik.handleChange}
          onBlur={onFieldBlur}
          autoComplete="off"
          inputProps={{
            maxLength: MAX_MATERIAL_LENGTH,
          }}
          error={
            formik.touched.materials?.[index]?.plain &&
            Boolean(formik.errors?.materials?.[index]?.plain)
          }
          helperText={
            formik.touched.materials?.[index]?.plain && formik.errors?.materials?.[index]?.plain
          }
        />
        <InputLengthCounter>
          {`${formik.values.materials?.[index]?.plain.length}/${MAX_MATERIAL_LENGTH}`}
        </InputLengthCounter>
      </MaterialTextFieldWrapper>
    );
  },
  [ContentElementType.presentation]: ({ formik, material, index, onFieldBlur }: InputProps) => {
    console.log('SLIDES SLIDES SLIDES');

    return (
      <MaterialFieldWrapper>
        <Field
          id={`materials[${index}].presentation`}
          name={`materials[${index}].presentation`}
          placeholder="Material presentation link"
          value={material.presentation}
          onChange={formik.handleChange}
          onBlur={onFieldBlur}
          autoComplete="off"
          error={
            formik.touched.materials?.[index]?.presentation &&
            Boolean(formik.errors?.materials?.[index]?.presentation)
          }
          helperText={
            formik.touched.materials?.[index]?.presentation &&
            formik.errors?.materials?.[index]?.presentation
          }
        />
        <InputLengthCounter>{`${formik.values.materials?.[index]?.presentation.length}/${MAX_MATERIAL_LENGTH}`}</InputLengthCounter>
      </MaterialFieldWrapper>
    );
  },
  [ContentElementType.video]: ({ formik, material, index, onFieldBlur }: InputProps) => {
    console.log('video video video video');
    return (
      <MaterialFieldWrapper>
        <Field
          id={`materials[${index}].video`}
          name={`materials[${index}].video`}
          placeholder="Material video link"
          value={material.video}
          onChange={formik.handleChange}
          onBlur={onFieldBlur}
          autoComplete="off"
          error={
            formik.touched.materials?.[index]?.video &&
            Boolean(formik.errors?.materials?.[index]?.video)
          }
          helperText={
            formik.touched.materials?.[index]?.video && formik.errors?.materials?.[index]?.video
          }
        />
        <InputLengthCounter>{`${formik.values.materials?.[index]?.video.length}/${MAX_MATERIAL_LENGTH}`}</InputLengthCounter>
      </MaterialFieldWrapper>
    );
  },
};

export default INPUT_MAPPER;
