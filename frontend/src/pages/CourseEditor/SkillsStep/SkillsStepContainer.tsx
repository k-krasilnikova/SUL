import useGetAllSkills from 'api/skills/getAllSkills';
import { FC } from 'react';
import { ICourse } from 'types/course';
import { IFormik } from '../types';
import SkillsStep from './SkillsStep';

export interface ISkillsStepContProp {
  courseData?: ICourse;
  formik: IFormik;
}

const SkillsStepContainer: FC<ISkillsStepContProp> = ({ courseData, formik }) => {
  const { data: allSkillsResponse } = useGetAllSkills();

  let ungroupedSkills = {};
  if (allSkillsResponse) {
    ungroupedSkills = allSkillsResponse.reduce(
      (acc, group) => ({
        ...acc,
        ...group.skills.reduce((a, s) => ({ [s._id]: s, ...a }), {}),
      }),
      {},
    );
  }

  const arrOfObj1 = Object.entries(ungroupedSkills).map((entry) => entry[1]) as {
    group: string;
    image: string;
    maxScore: number;
    name: string;
    _id: string;
  }[];

  const namesArr = arrOfObj1.map((obj) => obj.name);

  return (
    <SkillsStep
      ungroupedSkills={ungroupedSkills}
      arrOfObj1={arrOfObj1}
      courseData={courseData}
      formik={formik}
      namesArr={namesArr}
    />
  );
};

export default SkillsStepContainer;
