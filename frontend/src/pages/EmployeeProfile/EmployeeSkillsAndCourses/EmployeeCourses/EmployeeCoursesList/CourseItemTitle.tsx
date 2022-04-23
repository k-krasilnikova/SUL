import React, { useState } from 'react';

import { CourseTitle, HoverCourseTitle } from './styled';

export interface ICourseItemTitleProps {
  title: string;
}

const CourseItemTitle: React.FC<ICourseItemTitleProps> = ({ title }) => {
  const [isShown, setIsShown] = useState(false);

  const showCourseInfo = () => {
    setIsShown(true);
  };

  const hideCourseInfo = () => {
    setIsShown(false);
  };
  return (
    <>
      <CourseTitle onMouseEnter={showCourseInfo} onMouseLeave={hideCourseInfo}>
        {title.slice(0, 40)}
      </CourseTitle>
      {isShown && <HoverCourseTitle> {title}</HoverCourseTitle>}
    </>
  );
};

export default CourseItemTitle;
