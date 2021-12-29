import axios from 'axios';
import Cookies from 'js-cookie';

import { getError, postError } from 'constants/signConstants';

const runGet = async (baseUrl: string): Promise<Response | Error | void> => {
  try {
    const res = await axios.get(baseUrl);
    const resData = await res.data;
    return resData;
  } catch (error) {
    return new Error(getError);
  }
};

const runPost = async (
  baseUrl: string,
  initialData: string | void,
): Promise<Response | Error | void> => {
  try {
    const res = await axios.post(baseUrl, initialData);
    const resData = await JSON.stringify(res.data);
    Cookies.set('Creds', resData, { secure: true });
  } catch (error) {
    return new Error(postError);
  }
};

export { runGet, runPost };
