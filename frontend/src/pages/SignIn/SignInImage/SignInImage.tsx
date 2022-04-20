import React from 'react';

import Image from 'components/Image';
import { signInImage } from 'images';

import { ImageWrapper, SignInImageWrapper } from './styled';

const SignInImage: React.FC = () => (
  <SignInImageWrapper item xs={12} sm={12} md={6} lg={7} xl={6}>
    <ImageWrapper>
      <Image imageUrl={signInImage} />
    </ImageWrapper>
  </SignInImageWrapper>
);

export default SignInImage;
