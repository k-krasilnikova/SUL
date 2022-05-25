import { useEffect, FC } from 'react';

import { useLocation } from 'react-router';

const ScrollToTop: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
