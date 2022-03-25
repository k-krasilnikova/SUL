import { ButtonPropsVariantOverrides } from '@mui/material/Button';
import { OverridableStringUnion } from '@material-ui/types';

export type VariantProps = OverridableStringUnion<
  'text' | 'outlined' | 'contained',
  ButtonPropsVariantOverrides
>;
