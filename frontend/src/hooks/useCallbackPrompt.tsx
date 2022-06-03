/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import type { Action } from 'history';

import { PATHS } from 'constants/routes';
import { useBlocker } from 'hooks';

const useCallbackPrompt = (
  when: boolean,
): [showPrompt: boolean, confirmNavigation: () => void, cancelNavigation: () => void] => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPrompt, setShowPrompt] = useState(false);
  const [lastLocation, setLastLocation] = useState<{
    retry(): void;
    action: Action;
    location: Location;
  } | null>(null);
  const [confirmedNavigation, setConfirmedNavigation] = useState(false);

  const cancelNavigation = useCallback(() => {
    setShowPrompt(false);
  }, []);

  // handle blocking when user click on another route prompt will be shown
  const handleBlockedNavigation = useCallback(
    (nextLocation) => {
      if (!confirmedNavigation && nextLocation.location.pathname === PATHS.signIn) {
        nextLocation.retry();
      }
      // in if condition we are checking next location and current location are equals or not
      if (!confirmedNavigation && nextLocation.location.pathname !== location.pathname) {
        setShowPrompt(true);
        setLastLocation(nextLocation);
        return false;
      }
      return true;
    },
    [confirmedNavigation],
  );

  const confirmNavigation = useCallback(() => {
    setShowPrompt(false);
    setConfirmedNavigation(true);
  }, []);

  useEffect(() => {
    if (confirmedNavigation && lastLocation) {
      navigate(lastLocation.location.pathname);
    }
  }, [confirmedNavigation, lastLocation]);

  useBlocker(handleBlockedNavigation, when);

  return [showPrompt, confirmNavigation, cancelNavigation];
};

export default useCallbackPrompt;
