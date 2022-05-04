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
        {assessments?.map(({ _id, user, course, elapsed }) => (
          <RequestItem
            key={_id}
            user={user}
            course={course}
            elapsed={elapsed}
            clientCourseId={_id}
            {...props}
          />
        ))}
      </RequestsWrapper>
    )}
  </AuthorizedLayout>
);

export default PendingAssessments;
