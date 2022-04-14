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

export type GroupedSkills = Map<string | number, Skill>;

export interface SkillsList {
  name: string;
  skills: Skill[];
}

export type Technologies = Array<TechnologyGroup>;
