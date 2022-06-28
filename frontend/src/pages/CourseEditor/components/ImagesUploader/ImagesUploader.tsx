import { ForwardedRef, forwardRef } from 'react';

import Loader from 'components/Loader';
import { Loaders } from 'enums/loader';
import { addAvatarIcon } from 'icons';
import { IImagesUploader } from 'pages/CourseEditor/types';

import { NewAvatarImageWrapper, AddImageIcon, AddImageInput, NewImageLabel } from './styled';

const ImagesUploader = (
  { avatarUrl, isUploading, handleAddCourseAvatar }: IImagesUploader,
  ref: ForwardedRef<HTMLInputElement>,
) => (
  <NewAvatarImageWrapper avatarUrl={avatarUrl}>
    {isUploading ? (
      <Loader type={Loaders.component} color="secondary" />
    ) : (
      <AddImageIcon alt="addAvatar" src={addAvatarIcon} />
    )}
    <AddImageInput
      ref={ref}
      type="file"
      accept="image/*"
      id="avatar"
      name="avatar"
      onChange={handleAddCourseAvatar}
    />
    <NewImageLabel htmlFor="avatar" />
  </NewAvatarImageWrapper>
);

export default forwardRef(ImagesUploader);
