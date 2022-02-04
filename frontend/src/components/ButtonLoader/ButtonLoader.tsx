import * as React from 'react';

import { buttonSpinner } from 'icons';

import { Image } from 'components/Image';
import { LoaderIcon } from './styled';

const ButtonLoader: React.FC = () => {
  return (
    <LoaderIcon>
      <Image imageUrl={buttonSpinner} />
    </LoaderIcon>
  );
};

export default ButtonLoader;
