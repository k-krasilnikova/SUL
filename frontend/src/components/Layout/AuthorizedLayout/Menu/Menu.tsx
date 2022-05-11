import { FC } from 'react';

import Badge from 'components/Badge';
import CustomNavLink from 'components/CustomNavLink';
import { IMenuProps } from 'components/Layout/types';

import {
  MenuTabs,
  MenuTabsWrapper,
  StyledListItemIcon,
  ItemText,
  SqueezeButton,
  StyledArrow,
} from './styled';

const Menu: FC<IMenuProps> = ({ menuItemsList, classes, isSqueeze, toggleSqueeze }) => {
  const {
    active: activeClassName,
    inactive: inactiveClassName,
    default: defaultClassName,
  } = classes;

  return (
    <MenuTabs>
      <SqueezeButton onClick={toggleSqueeze}>
        <StyledArrow isSqueeze={isSqueeze} />
      </SqueezeButton>
      <MenuTabsWrapper>
        {menuItemsList.map(({ icon, title, path, badgeType, withBadge }) => (
          <CustomNavLink
            key={title}
            to={path}
            activeClassName={activeClassName}
            inactiveClassName={inactiveClassName}
            defaultClassName={defaultClassName}
          >
            <StyledListItemIcon>{icon}</StyledListItemIcon>
            <ItemText isSqueeze={isSqueeze}>{title}</ItemText>
            {withBadge && <Badge type={badgeType} />}
          </CustomNavLink>
        ))}
      </MenuTabsWrapper>
    </MenuTabs>
  );
};

export default Menu;
