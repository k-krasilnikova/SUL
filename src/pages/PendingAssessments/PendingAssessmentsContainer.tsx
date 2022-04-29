import { FC } from 'react';

import { useGetPendingAssessments, useManageAssessment } from 'api/manager';
import PendingAssessments from './PendingAssessments';

const PendingAssessmentsContainer: FC = () => {
  const { data: assessments, isLoading } = useGetPendingAssessments();
  const { mutate: manageAssessment, isLoading: isActionLoading } = useManageAssessment();

  return (
    <PendingAssessments
      isLoading={isLoading}
      assessments={assessments}
      manageAssessment={manageAssessment}
      isActionLoading={isActionLoading}
    />
  );
};

export default PendingAssessmentsContainer;
