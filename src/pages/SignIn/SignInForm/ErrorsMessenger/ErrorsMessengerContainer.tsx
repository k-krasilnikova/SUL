/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { ITextFieldTypes } from 'types/signIn';

import ErrorsMessenger from './ErrorsMessenger';

const ErrorsMessengerContainer: React.FC<ITextFieldTypes> = ({ errors, touched }): JSX.Element => {
  const [keysQueue, setQueue] = useState<string[] | never[]>([]);
  const [fieldKey, setFieldKey] = useState<string | undefined>();

  const getCurrentError = (): string[] | never[] => {
    const touchedKeys = Object.keys(touched);
    let errorKeys = Object.keys(errors);
    errorKeys = errorKeys.filter((key) => touchedKeys.includes(key));
    return errorKeys;
  };

  useEffect(() => {
    const currentErrors = getCurrentError();
    setQueue(currentErrors);
  }, [errors, touched]);

  useEffect(() => {
    const currentName = keysQueue.shift();
    setFieldKey(currentName);
  }, [errors, keysQueue]);

  return <ErrorsMessenger identificator={fieldKey} />;
};

export default ErrorsMessengerContainer;
