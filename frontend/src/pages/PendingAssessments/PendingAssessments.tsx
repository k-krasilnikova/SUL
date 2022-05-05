import { FC } from 'react';

import { AuthorizedLayout } from 'components/Layout';
import Loader from 'components/Loader';
import { Loaders } from 'enums/loader';

import { IPendingAssessmentsProps } from './types';
import RequestItem from './RequestItem';
import { RequestsWrapper } from './styled';

const PendingAssessments: FC<IPendingAssessmentsProps> = ({
  isLoading,
  assessments,
  targetId,
  ...props
}) => (
  <AuthorizedLayout pageName="Pending Assessments">
    {isLoading ? (
      <Loader color="primary" type={Loaders.content} />
    ) : (
      <RequestsWrapper>
        {assessments?.map(({ _id, user, course, elapsed }) => {
          const isTargetRequest = targetId === _id;
          return (
            <RequestItem
              key={_id}
              user={user}
              course={course}
              elapsed={elapsed}
              clientCourseId={_id}
              isTargetRequest={isTargetRequest}
              {...props}
            />
          );
        })}
      </RequestsWrapper>
    )}
  </AuthorizedLayout>
);

export default PendingAssessments;
