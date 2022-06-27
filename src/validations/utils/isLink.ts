const LINK_PATTERN =
  /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)$/i;

const isLink = (link?: string): boolean => Boolean(link && LINK_PATTERN.test(link));

export default isLink;
