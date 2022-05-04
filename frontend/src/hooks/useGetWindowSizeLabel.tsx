import { useState, useEffect } from 'react';

import { getWindowLabelByWidth } from 'utils/helpers/getWindowLabelByWidth';

const useGetWindowSizeLabel = (): string => {
  const [sizeLabel, setSizeLabel] = useState(getWindowLabelByWidth());

  useEffect(() => {
    const handleResize = () => {
      setSizeLabel(getWindowLabelByWidth());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return sizeLabel;
};

export default useGetWindowSizeLabel;
