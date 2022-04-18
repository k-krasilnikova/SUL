export interface ISkill {
  name: string;
  image: string;
  maxScore: number;
  group: string;
}

export interface TechnologyGroup {
  group: {
    name: string;
  };
  achievedSkills: Array<UserSkill>;
  isPrimary: boolean;
}

export interface UserSkill {
  score: number;
  skill: ISkill;
}

export type GroupedSkills = Map<string | number, ISkill[]>;

export type Technologies = Array<TechnologyGroup>;
