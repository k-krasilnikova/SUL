import React, { useState } from 'react';

import { useGetUserInfo } from 'api/userInfo';
import { setMenuToggle } from 'utils/helpers/menuHelpers/setMenuToggle';
import { getMenuToggle } from 'utils/helpers/menuHelpers/getMenuToggle';

import AuthorizedLayout from './AuthorizedLayout';
import { useLayOutStyles } from './styled';

interface Props {
  pageName: string;
  children: React.ReactNode;
}

const AuthorizedLayoutContainer: React.FC<Props> = ({ pageName, children }) => {
  const { data } = useGetUserInfo();
  const currentMenuStatus = getMenuToggle();
  const [isSqueeze, setSqueeze] = useState<boolean | undefined>(currentMenuStatus);
  const handleSqueeze = () => {
    const toggleStatus = setMenuToggle();
    setSqueeze(toggleStatus);
  };
  const classes = useLayOutStyles();

  return (
    <AuthorizedLayout
      pageName={pageName}
      firstName={data?.firstName}
      lastName={data?.lastName}
      avatar={data?.avatar}
      isSqueeze={isSqueeze}
      handleSqueeze={handleSqueeze}
      classes={classes}
    >
      {children}
    </AuthorizedLayout>
  );
};

export default AuthorizedLayoutContainer;
