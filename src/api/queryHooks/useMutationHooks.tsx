/* eslint-disable no-unused-vars */
import { useMutation } from 'react-query';
import { runPost } from '../restApi';

const usePostWrapper = (baseUrl: string, initialData: string): any =>
  useMutation((initialData) => runPost(baseUrl, initialData), {});

const useDeleteQuery = (baseUrl: string, initialData: string): any =>
  useMutation((initialData) => runPost(baseUrl, initialData), {});

export { usePostWrapper, useDeleteQuery };
