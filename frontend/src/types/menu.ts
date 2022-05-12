import { ReactElement } from 'react';

import { BadgeType } from 'enums/badgeType';

export interface IMenuItemProps {
  path: string;
  title: string;
  icon: ReactElement;
  badgeType?: BadgeType;
  withBadge?: boolean;
}

export interface IRolesMenu {
  [key: string]: IMenuItemProps[];
}
