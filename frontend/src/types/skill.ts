export interface Skill {
  name: string;
  image: string;
  score: number;
  maxScore: number;
  group: string;
}

export type GroupedSkills = Map<string | number, Skill[]>;
