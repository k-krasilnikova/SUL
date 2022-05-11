import { ReactNode } from 'react';

export interface ITab {
  key: string;
  node: ReactNode;
}

export interface IEditorTabsProps {
  defaultActiveTab: string;
  tabs: ITab[];
  basePath: string;
}
