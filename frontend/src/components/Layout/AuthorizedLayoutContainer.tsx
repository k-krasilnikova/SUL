import React from 'react';
import { useGetUserInfo } from 'api/userInfo';

import AuthorizedLayout from './AuthorizedLayout';

interface Props {
  pageName: string;
  children: React.ReactNode;
}

const AuthorizedLayoutContainer: React.FC<Props> = ({ pageName, children }) => {
  const { data } = useGetUserInfo();
  return (
    <AuthorizedLayout
      pageName={pageName}
      firstName={data?.firstName}
      lastName={data?.lastName}
      avatar={data?.avatar}
    >
      {children}
    </AuthorizedLayout>
  );
};

export default AuthorizedLayoutContainer;
