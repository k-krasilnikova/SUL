import { getAllGroupsWithSkills, getAllSkillsByGroup } from 'db/providers/skillProvider';
import { NextFunction, Request, Response } from 'express';

const getAllSkills = async (req: Request, res: Response, next: NextFunction) => {
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
