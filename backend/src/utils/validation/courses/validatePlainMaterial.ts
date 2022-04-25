import capitalizeFirstLetter from 'utils/string/capitalizeFirstLetter';
import fullTrim from 'utils/string/fullTrim';
import { convertToTypeUnsafe } from 'utils/typeConversion/common';
import { isNotNumbersOnly } from '../strings';
import { MAX_PLAIN_MATERIAL_LENGTH, MIN_PLAIN_MATERIAL_LENGTH } from './constants';

const isValidLength = (material: string): boolean =>
  material.length >= MIN_PLAIN_MATERIAL_LENGTH && material.length <= MAX_PLAIN_MATERIAL_LENGTH;

const validatePlainMaterial = (material?: string): string | null => {
  const materialValue = capitalizeFirstLetter(fullTrim(convertToTypeUnsafe<string>(material)));

  const isValidated =
    isValidLength(materialValue) &&
    isNotNumbersOnly(materialValue) &&
    isNotNumbersOnly(materialValue);

  return isValidated ? materialValue : null;
};

export default validatePlainMaterial;
