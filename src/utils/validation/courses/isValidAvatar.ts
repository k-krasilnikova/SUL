/* eslint-disable no-useless-escape */

import { IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';

const LINK_PATTERN =
  /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/i;

const isLink = (link: string): boolean => LINK_PATTERN.test(link);

const isValidAvatar = (avatar: IUpdateCourseBody['avatar']): boolean =>
  Boolean(avatar && typeof avatar === 'string' && isLink(avatar));

export default isValidAvatar;
