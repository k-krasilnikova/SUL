export interface Skill {
  group: string;
  name: string;
  image: string;
  maxScore: number;
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
  skill: Skill;
}

export interface ISkillsListProps {
  name: string;
  skills: Skill[];
}

export type TGroupedSkills = Map<string | number, Skill>;

export type Technologies = Array<TechnologyGroup>;
