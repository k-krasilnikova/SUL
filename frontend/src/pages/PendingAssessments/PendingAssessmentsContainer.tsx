import { FC, useCallback, useState } from 'react';

import { useGetPendingAssessments, useManageAssessment } from 'api/manager';
import { AssessmentManagmentAction } from 'enums/api';

import PendingAssessments from './PendingAssessments';

const PendingAssessmentsContainer: FC = () => {
  const [targetId, setTargetId] = useState<string>('');

  const { data: assessmentsRequest, isLoading: isAssessmentsLoading } = useGetPendingAssessments();
  const { mutate: manageAssessment, isLoading: isManageAssessmentLoading } = useManageAssessment();

  const approveAssessmentById = useCallback(
    (requestId: string) => {
      setTargetId(requestId);
      manageAssessment({ id: requestId, action: AssessmentManagmentAction.approve });
    },
    [manageAssessment],
  );

  const declineAssessmentById = useCallback(
    (requestId: string) => {
      setTargetId(requestId);
      manageAssessment({ id: requestId, action: AssessmentManagmentAction.decline });
    },
    [manageAssessment],
  );

  return (
    <PendingAssessments
      targetId={targetId}
      assessments={assessmentsRequest}
      isLoading={isAssessmentsLoading}
      isActionLoading={isManageAssessmentLoading}
      approveAssessmentById={approveAssessmentById}
      declineAssessmentById={declineAssessmentById}
    />
  );
};

export default PendingAssessmentsContainer;
