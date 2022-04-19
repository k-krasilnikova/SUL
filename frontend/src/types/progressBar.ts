import { VARIANTS } from 'constants/progressBar';

import { TSizeVariants } from './size';

export type TVariantProgressBar = typeof VARIANTS[keyof typeof VARIANTS];
export interface ProgressProps {
  value?: number;
  color?: string;
  textColor?: string;
  text?: string;
  size?: TSizeVariants;
  trailColor?: string;
  variant?: TVariantProgressBar;
}
