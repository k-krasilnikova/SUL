import { ICoursePopulated } from 'interfaces/ICourses/IQueryCourses';
import ISkill from 'interfaces/Ientities/ISkill';
import { IGetEditCoursePayloadResponse } from 'interfaces/requests/admin/getEditCoursePayload';

const mapCourseTechnologies = (
  technologies: ICoursePopulated['technologies'],
): IGetEditCoursePayloadResponse['technologies'] =>
  technologies.map((technology) => ({
    _id: technology.skill._id,
    name: technology.skill.name,
    points: technology.points,
  }));

const mapAvailableSkills = (skills: ISkill[]): IGetEditCoursePayloadResponse['allSkills'] =>
  skills.map((skill) => ({ _id: skill._id, name: skill.name, maxScore: skill.maxScore }));

const mapCourseMaterials = (
  materials: ICoursePopulated['materials'],
): IGetEditCoursePayloadResponse['materials'] =>
  materials.map((courseMaterial) => {
    const [{ type, material }] = courseMaterial.content;
    return {
      type,
      material,
      exercise: courseMaterial.exercise,
    };
  });

export { mapAvailableSkills, mapCourseMaterials, mapCourseTechnologies };
