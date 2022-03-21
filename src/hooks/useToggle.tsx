import { useCallback, useState } from 'react';

const useToggle = (initialState = false): [state: boolean, toggle: (value?: boolean) => void] => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback((value) => {
    setState((currentState) => value ?? !currentState);
  }, []);

  return [state, toggle];
};

export default useToggle;
