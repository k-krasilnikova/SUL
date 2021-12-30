import axios from 'axios';
import Cookies from 'js-cookie';

import { postError, uniqAccessToken, uniqUserId } from './authConstants';

const putUserToken = async (
  baseUrl: string,
  initialData: string | unknown,
): Promise<Response | Error | void> => {
  try {
    const response = await axios.post(baseUrl, initialData);
    const responseData = await response.data;
    console.log(`object`, response);
    const resAccess = JSON.stringify(responseData.accessToken);
    const resUserId = JSON.stringify(responseData._id);
    Cookies.set(uniqAccessToken, resAccess, { secure: true });
    Cookies.set(uniqUserId, resUserId, { secure: true });
  } catch (error) {
    return new Error(postError);
  }
};

export default putUserToken;
