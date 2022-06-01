import { FC } from 'react';

import ActionButtons from 'components/EditorTabs/ActionButtons';

import { IEditorTabsProps } from './types';

const EditorTabs: FC<IEditorTabsProps> = ({ currentChild, ...props }) => (
  <>
    {currentChild}
    <ActionButtons {...props} />
  </>
);

export default EditorTabs;
