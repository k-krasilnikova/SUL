import { FC } from 'react';

import useGetAllSkills from 'api/skills/getAllSkills';
import Loader from 'components/Loader';

import SkillsStep from './SkillsStep';
import { IStepProps } from '../types';

const SkillsStepContainer: FC<IStepProps> = ({ courseData, formik }) => {
  const { data: allSkillsResponse, isLoading: isAllSkillsLoading } = useGetAllSkills();

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

  return isAllSkillsLoading ? (
    <Loader type="content" />
  ) : (
    <SkillsStep ungroupedSkills={ungroupedSkills} courseData={courseData} formik={formik} />
  );
};

export default SkillsStepContainer;
