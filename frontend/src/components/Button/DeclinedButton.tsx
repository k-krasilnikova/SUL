import { useState } from 'react';

import { CompletedButton } from 'pages/MyCourses/styled';
import { ClientCourse } from 'types/clientCourse';
import { makeLeftTime } from 'utils/helpers/convertTime';

const DeclinedButton = ({ clientCourse }: { clientCourse?: ClientCourse }): JSX.Element => {
  const [isShowTime, setShowTime] = useState(false);
  return (
    <div onMouseEnter={() => setShowTime(true)} onMouseLeave={() => setShowTime(false)}>
      <CompletedButton color="primary" variant="mediumContained" disabled>
        {isShowTime && clientCourse ? makeLeftTime(clientCourse?.applyDate, 'dd:hh') : 'Declined'}
      </CompletedButton>
    </div>
  );
};

export default DeclinedButton;
