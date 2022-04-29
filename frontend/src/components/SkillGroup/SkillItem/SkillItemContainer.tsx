import { FC, useState } from 'react';

import SkillItem from './SkillItem';
import { ISkillItemContainerProps } from '../types';

const SkillItemContainer: FC<ISkillItemContainerProps> = ({ name, skillImage }) => {
  const [isSkillNameShown, setSkillNameShown] = useState(false);

  const showSkillName = () => {
    setSkillNameShown(true);
  };

  const hideSkillName = () => {
    setSkillNameShown(false);
  };

  return (
    <SkillItem
      key={name}
      name={name}
      skillImage={skillImage}
      isSkillNameShown={isSkillNameShown}
      showSkillName={showSkillName}
      hideSkillName={hideSkillName}
    />
  );
};

export default SkillItemContainer;
