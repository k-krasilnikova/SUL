import { NextFunction } from 'express';

import { getAllGroupsWithSkills, getAllSkillsByGroup } from 'db/providers/skillProvider';
import {
  TGetAllSkillsRequest,
  TGetAllSkillsResponse,
} from 'interfaces/requests/skills/getAllSkills';

const getAllSkills = async (
  req: TGetAllSkillsRequest,
  res: TGetAllSkillsResponse,
  next: NextFunction,
) => {
  try {
    const searchStr = req.query;
    const skillsGroups = await getAllGroupsWithSkills(searchStr);
    if (skillsGroups.length) {
      res.json(skillsGroups);
      return;
    }
    const skills = await getAllSkillsByGroup(searchStr);
    res.json(skills);
  } catch (error) {
    next(error);
  }
};

export default getAllSkills;
