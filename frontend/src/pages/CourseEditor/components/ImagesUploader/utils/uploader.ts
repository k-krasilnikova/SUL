import { base } from '@uploadcare/upload-client';

const UPLOAD_RESOURCE = 'https://ucarecdn.com/';
const UPLOAD_SEPARATOR = '/';
const UPLOAD_KEY = '45051be24beea6bdcb3b';

export const getFileLink = (fileUuid: string): string =>
  UPLOAD_RESOURCE.concat(fileUuid, UPLOAD_SEPARATOR);

export const uploadFile = async (file: Buffer | Blob | File): Promise<string> => {
  const fileUuid = await base(file, { publicKey: UPLOAD_KEY });
  const fileLink = getFileLink(fileUuid.file);
  return fileLink || '';
};
