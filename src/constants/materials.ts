export const MATERIAL = {
  text: 'text',
  video: 'video',
} as const;

export type TMaterialVariants = typeof MATERIAL[keyof typeof MATERIAL];
