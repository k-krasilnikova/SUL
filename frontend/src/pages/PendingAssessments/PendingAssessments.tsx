import { FC } from 'react';

import { AuthorizedLayout } from 'components/Layout';
import Loader from 'components/Loader';
import { Loaders } from 'enums/loader';

import { IPendingAssessmentsProps } from './types';
import RequestItem from './RequestItem';
import { RequestsWrapper } from './styled';

const PendingAssessments: FC<IPendingAssessmentsProps> = ({ isLoading, assessments, ...props }) => (
  <AuthorizedLayout pageName="Pending Assessments">
    {isLoading ? (
      <Loader color="primary" type={Loaders.content} />
    ) : (
      <RequestsWrapper>
        {assessments?.map((assessment) => (
          <RequestItem
            key={assessment._id}
            user={assessment.user}
            course={assessment.course}
            elapsed={assessment.elapsed}
            clientCourseId={assessment._id}
            {...props}
          />
        ))}
      </RequestsWrapper>
    )}
  </AuthorizedLayout>
);

export default PendingAssessments;
