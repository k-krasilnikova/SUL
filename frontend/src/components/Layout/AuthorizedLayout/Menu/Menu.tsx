import { FC } from 'react';

import CustomNavLink from 'components/CustomNavLink';
import { IMenuProps } from 'components/Layout/types';

import Badge from './Badge';

import {
  MenuTabs,
  MenuTabsWrapper,
  StyledListItemIcon,
  ItemText,
  SqueezeButton,
  StyledArrow,
} from './styled';

const Menu: FC<IMenuProps> = ({
  menuItemsList,
  classes,
  isMobileVersion,
  isSqueeze,
  toggleSqueeze,
}) => {
  const {
    active: activeClassName,
    inactive: inactiveClassName,
    default: defaultClassName,
  } = classes;

  return (
    <MenuTabs isMobileVersion={isMobileVersion}>
      {!isMobileVersion && (
        <SqueezeButton onClick={toggleSqueeze}>
          <StyledArrow isSqueeze={isSqueeze} />
        </SqueezeButton>
      )}
      <MenuTabsWrapper isMobileVersion={isMobileVersion}>
        {menuItemsList.map(({ icon, title, path, badgeType, withBadge }) => (
          <CustomNavLink
            key={title}
            to={path}
            activeClassName={activeClassName}
            inactiveClassName={inactiveClassName}
            defaultClassName={defaultClassName}
          >
            <StyledListItemIcon isMobileVersion={isMobileVersion}>{icon}</StyledListItemIcon>
            <ItemText isSqueeze={isSqueeze} isMobileVersion={isMobileVersion}>
              {title}
            </ItemText>
            {withBadge && <Badge type={badgeType} />}
          </CustomNavLink>
        ))}
      </MenuTabsWrapper>
    </MenuTabs>
  );
};

export default Menu;
