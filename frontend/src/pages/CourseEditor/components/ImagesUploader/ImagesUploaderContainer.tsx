import { FC, BaseSyntheticEvent, useState } from 'react';
import { useSnackbar } from 'notistack';

import { errorSnackbar, errorSnackbarMessage } from 'constants/snackbarVariant';
import { IMAGE_MAX_SIZE } from 'constants/courseEditor';
import { Numbers } from 'enums/numbers';
import { IImagesUploaderContainer } from 'pages/CourseEditor/types';

import ImagesUploader from './ImagesUploader';
import { uploadFile } from './utils/uploader';

const ImagesUploaderContainer: FC<IImagesUploaderContainer> = ({ avatarUrl, setFieldValue }) => {
  const [isUploading, setIsUploading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleAddCourseAvatar = async (event: BaseSyntheticEvent) => {
    const fileToUpload = event.target.files[Numbers.zero];
    if (fileToUpload.size > IMAGE_MAX_SIZE) {
      return enqueueSnackbar(errorSnackbarMessage.fileSizeError, errorSnackbar);
    }
    setIsUploading(true);
    const fileLink = await uploadFile(fileToUpload);
    setIsUploading(false);
    setFieldValue('avatar', fileLink);
  };

  return (
    <ImagesUploader
      avatarUrl={avatarUrl}
      isUploading={isUploading}
      handleAddCourseAvatar={handleAddCourseAvatar}
    />
  );
};

export default ImagesUploaderContainer;
