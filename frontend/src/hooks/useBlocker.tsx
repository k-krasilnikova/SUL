import { useContext, useEffect } from 'react';
import { UNSAFE_NavigationContext } from 'react-router-dom';
import type { History, Blocker, Transition } from 'history';

const useBlocker = (blocker: Blocker, when = true): void => {
  const navigator = useContext(UNSAFE_NavigationContext).navigator as History;

  useEffect(() => {
    if (!when) return;

    const unblock = navigator.block((tx: Transition) => {
      const autoUnblockingTx = {
        ...tx,
        retry() {
          unblock();
          tx.retry();
        },
      };

      blocker(autoUnblockingTx);
    });

    return unblock;
  }, [navigator, blocker, when]);
};

export default useBlocker;
