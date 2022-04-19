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
  achievedSkills: Array<IUserSkill>;
  isPrimary: boolean;
}

export interface IUserSkill {
  score: number;
  skill: ISkill;
}

export type GroupedSkills = Map<string | number, ISkill[]>;

export type Technologies = Array<TechnologyGroup>;
