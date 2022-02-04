export interface SkillListItem {
  name: string;
  image: string;
  score: number;
  maxScore: number;
}

export interface Skill {
  skillGroup: string;
  skillList: Array<SkillListItem>;
}
