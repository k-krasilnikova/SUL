import { FC, BaseSyntheticEvent, useState, useRef } from 'react';
import { useSnackbar } from 'notistack';

import { errorSnackbar } from 'constants/snackbarVariant';
import { Numbers } from 'enums/numbers';
import { IImagesUploaderContainer } from 'pages/CourseEditor/types';

import ImagesUploader from './ImagesUploader';
import { uploadFile, checkingUploadedFile } from './utils';

const ImagesUploaderContainer: FC<IImagesUploaderContainer> = ({ avatarUrl, setFieldValue }) => {
  const [isUploading, setIsUploading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const ref = useRef<HTMLInputElement>(null);

  const handleAddCourseAvatar = async (event: BaseSyntheticEvent) => {
    const fileToUpload: File = event.target.files[Numbers.zero];

    if (fileToUpload) {
      const errorMessage = checkingUploadedFile(fileToUpload);
      if (errorMessage) {
        if (ref.current) {
          ref.current.value = '';
        }
        enqueueSnackbar(errorMessage, errorSnackbar);
        return;
      }

      setIsUploading(true);
      const fileLink = await uploadFile(fileToUpload);
      setIsUploading(false);
      setFieldValue('avatar', fileLink);
    }
  };

  return (
    <ImagesUploader
      ref={ref}
      avatarUrl={avatarUrl}
      isUploading={isUploading}
      handleAddCourseAvatar={handleAddCourseAvatar}
    />
  );
};

export default ImagesUploaderContainer;
