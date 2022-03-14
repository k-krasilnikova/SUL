import React, { useState } from 'react';

import { useGetClientCourses } from 'api/myCourses';
import { WINDOW_SIZE } from 'constants/windowWidth';
import { getWindowWidth } from 'utils/helpers/getWindowWidth';
import { formatTimeout } from 'utils/helpers/convertTestTimeout';
import { DISABLE_TIMEOUT_DAYS } from 'constants/time';

import MyCoursesList from './MyCoursesList';

const makeLeftTime = (date: string | undefined) => {
  if (!date) {
    return date;
  }
  const applyDate = new Date(date);
  return formatTimeout(
    applyDate.setDate(applyDate.getDate() + DISABLE_TIMEOUT_DAYS) - Date.now(),
    'hh:mm',
  );
};

const MyCoursesContainer: React.FC = () => {
  const [isShow, setShowTime] = useState(false);
  const { data: clientCourses, isLoading } = useGetClientCourses();
  const disableLinkWidth =
    window.innerWidth < WINDOW_SIZE.sm.width ? WINDOW_SIZE.xs.name : WINDOW_SIZE.sm.name;
  const disableLink = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (disableLinkWidth === WINDOW_SIZE.sm.name) {
      event.preventDefault();
    }
  };

  const windowWidth = getWindowWidth();

  return (
    <MyCoursesList
      clientCourses={clientCourses?.filter((item) => item.course)}
      isLoading={isLoading}
      disableLink={disableLink}
      windowWidth={windowWidth}
      setShowTime={setShowTime}
      isShowTime={isShow}
      makeLeftTime={makeLeftTime}
    />
  );
};

export default MyCoursesContainer;
