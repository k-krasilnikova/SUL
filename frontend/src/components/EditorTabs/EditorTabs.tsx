/* eslint-disable react/prop-types */
import { Fragment, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getKeyFromPath } from './utils';

interface ITab {
  key: string;
  node: React.ReactNode;
}

interface IProps {
  defaultActiveTab: string;
  tabs: ITab[];
  basePath: string;
}

const EditorTabs: React.FC<IProps> = ({ defaultActiveTab, tabs, basePath }) => {
  const location = useLocation();

  const keyFromPath = getKeyFromPath(location.pathname, basePath);
  const [activeKey, setActiveKey] = useState(keyFromPath || defaultActiveTab);

  useEffect(() => {
    const tab = keyFromPath || defaultActiveTab;
    setActiveKey(tab);
  }, [keyFromPath, defaultActiveTab]);

  return (
    <>
      {tabs.map((tab) => (
        <Fragment key={tab.key}>{tab.key === activeKey && tab.node}</Fragment>
      ))}
    </>
  );
};

export default EditorTabs;
