export interface ITab {
  key: string;
  node: React.ReactNode;
}

export interface IEditorTabsProps {
  defaultActiveTab: string;
  tabs: ITab[];
  basePath: string;
}
