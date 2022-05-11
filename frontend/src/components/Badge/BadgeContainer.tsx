import { FC } from 'react';

import Badge from './Badge';
import { IBadgeContainerProps } from './types';
import { getBadgeContentByType } from './utils';

const BadgeContainer: FC<IBadgeContainerProps> = ({ type }) => {
  const badgeContent = getBadgeContentByType(type);

  return <Badge badgeContent={badgeContent} />;
};

export default BadgeContainer;
