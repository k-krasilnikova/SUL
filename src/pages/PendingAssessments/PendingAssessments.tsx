import { FC } from 'react';

import { AuthorizedLayout } from 'components/Layout';

const PendingAssessments: FC = () => (
  <AuthorizedLayout pageName="Pending Assessments">
    <>hello world</>
  </AuthorizedLayout>
);

export default PendingAssessments;
