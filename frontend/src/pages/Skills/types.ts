import { ChangeEvent, ClipboardEvent, KeyboardEvent } from 'react';
import { ISkills, SkillsList } from 'types/skill';

export interface ISkillsPageProps extends ISkills {
  isLoading?: boolean;
  searchInputValue: string;
  searchSkills: (event: ChangeEvent<HTMLInputElement>) => void;
  checkSpace: (event: KeyboardEvent) => void;
  checkPastedValue: (event: ClipboardEvent) => void;
  skillFounded: SkillsList[];
}
