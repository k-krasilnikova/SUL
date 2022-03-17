import { useState } from 'react';

import { ClientCourse } from 'types/clientCourse';
import { makeLeftTime } from 'utils/helpers/convertTime';
import { MyButton } from './styled';

const DeclinedWrapper = ({ clientCourse }: { clientCourse?: ClientCourse }): JSX.Element => {
  const [isShowTime, setShowTime] = useState(false);
  return (
    <div onMouseEnter={() => setShowTime(true)} onMouseLeave={() => setShowTime(false)}>
      <MyButton color="primary" variant="mediumContained" disabled>
        {isShowTime && clientCourse ? makeLeftTime(clientCourse?.applyDate, 'dd:hh') : 'Declined'}
      </MyButton>
    </div>
  );
};

export default DeclinedWrapper;
