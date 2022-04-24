import { MATERIAL } from 'constants/materials';

export type TMaterialVariants = typeof MATERIAL[keyof typeof MATERIAL];
