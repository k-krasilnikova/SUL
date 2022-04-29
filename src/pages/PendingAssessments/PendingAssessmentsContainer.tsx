import { useGetPendingAssessments } from 'api/manager';
import { FC } from 'react';

import PendingAssessments from './PendingAssessments';

const PendingAssessmentsContainer: FC = () => {
  const { data: assessments, isLoading } = useGetPendingAssessments();

  return <PendingAssessments isLoading={isLoading} assessments={assessments} />;
};

export default PendingAssessmentsContainer;
