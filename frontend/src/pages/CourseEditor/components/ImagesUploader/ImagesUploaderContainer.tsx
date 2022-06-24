import { FC, BaseSyntheticEvent, useState } from 'react';
import { useSnackbar } from 'notistack';

import { errorSnackbar, errorSnackbarMessage } from 'constants/snackbarVariant';
import { Numbers } from 'enums/numbers';
import { IImagesUploaderContainer } from 'pages/CourseEditor/types';

import ImagesUploader from './ImagesUploader';
import { uploadFile } from './utils/uploader';

const MAX_SIZE = 10 * 1024 * 1024;

const ImagesUploaderContainer: FC<IImagesUploaderContainer> = ({ avatarUrl, setFieldValue }) => {
  const [isUploading, setIsUploading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleAddCourseAvatar = async (event: BaseSyntheticEvent) => {
    const fileToUpload = event.target.files[Numbers.zero];
    if (fileToUpload.size > MAX_SIZE) {
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
