const getCurrentPageName = () => window.location.pathname.split('/').pop();

export default getCurrentPageName;
