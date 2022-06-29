import { FC } from 'react';

import Loader from 'components/Loader';
import PageTitle from 'components/PageTitle';
import NoContent from 'components/NoContent';
import { Loaders } from 'enums/loader';
import { NO_REQUESTS } from 'constants/messages';

import { IPendingAssessmentsProps } from './types';
import RequestItem from './RequestItem';
import { RequestsWrapper } from './styled';

const PendingAssessments: FC<IPendingAssessmentsProps> = ({ isLoading, assessments, ...props }) => (
  <PageTitle title="Pending Assessments">
    {isLoading ? (
      <Loader type={Loaders.content} />
    ) : assessments?.length ? (
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
    ) : (
      <NoContent message={NO_REQUESTS} />
    )}
  </PageTitle>
);

export default PendingAssessments;
