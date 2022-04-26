import { Fragment, useState, useEffect, FC } from 'react';
import { useLocation } from 'react-router-dom';

import { IEditorTabsProps } from './types';
import { getKeyFromPath } from './utils';

const EditorTabs: FC<IEditorTabsProps> = ({ defaultActiveTab, tabs, basePath }) => {
  const location = useLocation();

  const keyFromPath = getKeyFromPath(location.pathname, basePath);
  const [activeKey, setActiveKey] = useState(keyFromPath || defaultActiveTab);

  useEffect(() => {
    const tab = keyFromPath || defaultActiveTab;
    setActiveKey(tab);
  }, [keyFromPath, defaultActiveTab]);

  const activeTab = tabs.find((tab) => tab.key === activeKey);

  return <Fragment key={activeTab?.key}>{activeTab?.node}</Fragment>;
};

export default EditorTabs;
