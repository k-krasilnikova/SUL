import { useCallback } from 'react';
import { useBlocker } from './useBlocker';

export const usePrompt = (message?: string, when = true) => {
  const blocker = useCallback(
    (tx) => {
      // eslint-disable-next-line no-alert
      if (window.confirm(message)) tx.retry();
    },
    [message],
  );

  useBlocker(blocker, when);
};
