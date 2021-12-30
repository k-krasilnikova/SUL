import { useMutation } from 'react-query';
import putUserToken from '../restApi';

const useGetToken = (baseUrl: string) =>
  useMutation((initialData: string | unknown) => putUserToken(baseUrl, initialData));

export default useGetToken;
