import { useState } from 'react';

import { ClientCourse } from 'types/clientCourse';
import { makeLeftTime } from 'utils/helpers/convertTime';
import { MyButton } from './styled';

const DeclinedWrapper = ({
  clientCourse,
  timeout,
}: {
  clientCourse?: ClientCourse;
  timeout: number;
}): JSX.Element => {
  const [isShowTime, setShowTime] = useState(false);
  return (
    <div onMouseEnter={() => setShowTime(true)} onMouseLeave={() => setShowTime(false)}>
      <MyButton color="primary" variant="mediumContained" disabled>
        {isShowTime && clientCourse
          ? makeLeftTime(clientCourse?.applyDate, 'dd:hh', timeout)
          : 'Declined'}
      </MyButton>
    </div>
  );
};

export default DeclinedWrapper;
