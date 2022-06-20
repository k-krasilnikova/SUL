import { useCallback, useState } from 'react';

const useToggle = (initialState = false): [state: boolean, toggle: () => void] => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => {
    setState((currentState) => !currentState);
  }, []);

  return [state, toggle];
};

export default useToggle;
