export interface ISkill {
  name: string;
  image: string;
  maxScore: number;
  group: string;
}

export interface ITechnologyGroup {
  group: {
    name: string;
  };
  achievedSkills: IUserSkill[];
  isPrimary: boolean;
}

export interface IUserSkill {
  score: number;
  skill: ISkill;
}

export type GroupedSkills = Map<string | number, ISkill[]>;

export type Technologies = ITechnologyGroup[];
