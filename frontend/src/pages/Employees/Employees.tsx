import React from 'react';

import { AuthorizedLayout } from 'components/Layout';

const Employees: React.FC = () => (
  <AuthorizedLayout pageName="Employees">
    <div>Employees should be here</div>
  </AuthorizedLayout>
);

export default Employees;
