const getCurrentPageName = (): string | undefined => window.location.pathname.split('/').pop();

export default getCurrentPageName;
