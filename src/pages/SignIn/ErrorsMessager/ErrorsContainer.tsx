import { useState, useEffect } from 'react';

import ErrorsMessager from './ErrorsMessenger';

export interface ITextFieldTypes {
  error: {
    login?: string;
    password?: string;
  };
  touched: Record<string, boolean | undefined>;
  labelState?: string;
  labelHandler: {
    [key: string]: string | undefined;
  };
}

const ErrorsMessenger = ({ error, touched }: ITextFieldTypes): JSX.Element => {
  const [keysQueue, setQueue] = useState<string[] | never[]>([]);
  const [fieldKey, setFiledKey] = useState<string | undefined>();

  useEffect(() => {
    const touchedKeys = Object.keys(touched);
    let errorKeys = Object.keys(error);
    errorKeys = errorKeys.filter((key) => touchedKeys.includes(key));
    console.log('in effect1', errorKeys);
    setQueue([...errorKeys]);
  }, [error, touched]);

  useEffect(() => {
    console.log('queue', keysQueue);
    const name = [...keysQueue].shift();
    setFiledKey(name);
    console.log('in effect2', name);
  }, [error, keysQueue]);

  return <ErrorsMessager errorKey={fieldKey} />;
};

export default ErrorsMessenger;
