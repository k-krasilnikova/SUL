import * as React from 'react';

import { buttonLoader } from 'icons';

import { LoaderIcon } from './styled';

const ButtonLoader: React.FC = () => {
  return (
    <LoaderIcon>
      <img alt="loading" src={buttonLoader} />
    </LoaderIcon>
  );
};

export default ButtonLoader;
