import { errorSnackbarMessage } from 'constants/snackbarVariant';
import { IMAGE_MAX_SIZE } from 'constants/courseEditor';

const checkingUploadedFile = (fileToUpload: File): string | undefined => {
  if (!fileToUpload.type.includes('image')) {
    return errorSnackbarMessage.fileTypeError;
  }

  if (fileToUpload.size > IMAGE_MAX_SIZE) {
    return errorSnackbarMessage.fileSizeError;
  }
};

export default checkingUploadedFile;
