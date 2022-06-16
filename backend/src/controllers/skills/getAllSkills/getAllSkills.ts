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
    const { search, order } = req.query;
    const skills = await getAllSkillsByGroup({ search, order });
    res.json(skills);
  } catch (error) {
    next(error);
  }
};

export default getAllSkills;
