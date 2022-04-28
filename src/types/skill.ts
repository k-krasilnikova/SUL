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

export interface ITechnology {
  points: IUserSkill['score'];
  skill: IUserSkill['skill'];
}

export interface ISkillsListProps {
  name: string;
  skills: ISkill[];
}

export type TGroupedSkills = Map<string | number, ISkill[]>;

export type Technologies = ITechnologyGroup[];
