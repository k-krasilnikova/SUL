import Cookies from 'js-cookie';
import { uniqAccessToken } from 'api/authConstants';

const token = Cookies.get(uniqAccessToken);
let accessToken = '';
token ? (accessToken = JSON.parse(token)) : (accessToken = '');

export default accessToken;
