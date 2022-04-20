import { OverridableStringUnion } from '@material-ui/types';
import { ButtonPropsVariantOverrides } from '@mui/material/Button';

export type VariantProps = OverridableStringUnion<
  'text' | 'outlined' | 'contained',
  ButtonPropsVariantOverrides
>;

export type TColorVariants =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning'
  | 'inherit';
