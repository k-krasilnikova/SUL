import { FC } from 'react';

import { useGetPendingAssessments, useManageAssessment } from 'api/manager';

import PendingAssessments from './PendingAssessments';

const PendingAssessmentsContainer: FC = () => {
  const { data: assessmentsRequest, isLoading: isAssessmentsLoading } = useGetPendingAssessments();
  const { mutate: manageAssessment, isLoading: isManageAssessmentLoading } = useManageAssessment();

  return (
    <PendingAssessments
      isLoading={isAssessmentsLoading}
      assessments={assessmentsRequest}
      manageAssessment={manageAssessment}
      isActionLoading={isManageAssessmentLoading}
    />
  );
};

export default PendingAssessmentsContainer;
