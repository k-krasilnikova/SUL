import { FC } from 'react';

import Loader from 'components/Loader';
import { Loaders } from 'enums/loader';
import { addAvatarIcon } from 'icons';
import { IImagesUploader } from 'pages/CourseEditor/types';

import { NewAvatarImageWrapper, AddImageIcon, AddImageInput, NewImageLabel } from './styled';

const ImagesUploader: FC<IImagesUploader> = ({ avatarUrl, isUploading, handleAddCourseAvatar }) => (
  <NewAvatarImageWrapper avatarUrl={avatarUrl}>
    {isUploading ? (
      <Loader type={Loaders.component} color="secondary" />
    ) : (
      <AddImageIcon alt="addAvatar" src={addAvatarIcon} />
    )}
    <AddImageInput
      type="file"
      accept="image/*"
      id="avatar"
      name="avatar"
      onChange={handleAddCourseAvatar}
    />
    <NewImageLabel htmlFor="avatar" />
  </NewAvatarImageWrapper>
);

export default ImagesUploader;
