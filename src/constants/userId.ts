import Cookies from 'js-cookie';
import { uniqUserId } from 'api/authConstants';

const identificator = Cookies.get(uniqUserId);
let userId = '';
identificator ? (userId = JSON.parse(identificator)) : (userId = '');

export default userId;
