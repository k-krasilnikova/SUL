import { FC, useCallback, useState } from 'react';

import { useGetPendingAssessments, useManageAssessment } from 'api/manager';
import { AssessmentManagmentAction } from 'enums/api';

import PendingAssessments from './PendingAssessments';
import { IActionTarget } from './types';

const PendingAssessmentsContainer: FC = () => {
  const [actionTarget, setActionTarget] = useState<IActionTarget>({
    id: '',
    action: AssessmentManagmentAction.decline,
  });

  const { data: assessmentsRequest, isLoading: isAssessmentsLoading } = useGetPendingAssessments();
  const { mutate: manageAssessment, isLoading: isManageAssessmentLoading } = useManageAssessment();

  const approveAssessmentById = useCallback(
    (requestId: string) => {
      const actionObject = { id: requestId, action: AssessmentManagmentAction.approve };
      setActionTarget(actionObject);
      manageAssessment(actionObject);
    },
    [manageAssessment],
  );

  const declineAssessmentById = useCallback(
    (requestId: string) => {
      const actionObject = { id: requestId, action: AssessmentManagmentAction.decline };
      setActionTarget(actionObject);
      manageAssessment(actionObject);
    },
    [manageAssessment],
  );

  return (
    <PendingAssessments
      actionTarget={actionTarget}
      assessments={assessmentsRequest}
      isLoading={isAssessmentsLoading}
      isActionLoading={isManageAssessmentLoading}
      approveAssessmentById={approveAssessmentById}
      declineAssessmentById={declineAssessmentById}
    />
  );
};

export default PendingAssessmentsContainer;
