import { FC } from 'react';

import { AuthorizedLayout } from 'components/Layout';
import Loader from 'components/Loader';
import { Loaders } from 'enums/loader';

import { IPendingAssessmentsProps } from './types';

const PendingAssessments: FC<IPendingAssessmentsProps> = ({ isLoading, assessments }) => (
  <AuthorizedLayout pageName="Pending Assessments">
    {isLoading ? <Loader color="primary" type={Loaders.content} /> : <>{'loaded' || assessments}</>}
  </AuthorizedLayout>
);

export default PendingAssessments;
