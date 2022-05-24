import { NextFunction } from 'express';

import { getAllSkillsByGroup } from 'db/providers/skillProvider';
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
    const skills = await getAllSkillsByGroup(searchStr);
    res.json(skills);
  } catch (error) {
    next(error);
  }
};

export default getAllSkills;
