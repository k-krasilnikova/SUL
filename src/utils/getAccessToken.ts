const accessTokenGetter = () => {
  const cookies = document.cookie.split(';');
  for (let cookie = 0; cookie < cookies.length; cookie++) {
    if (/accessToken=/.test(cookies[cookie])) {
      const accessToken = cookies[cookie].slice(cookies[cookie].indexOf('=') + 1);
      return accessToken;
    }
  }
};

export default accessTokenGetter;
