import { FC } from 'react';

import ActionButtons from 'components/EditorTabs/ActionButtons';

import { IEditorTabsProps } from './types';

const EditorTabs: FC<IEditorTabsProps> = ({ currentChild, validateStep, ...props }) => (
  <>
    {currentChild}
    <ActionButtons validateStep={validateStep} {...props} />
  </>
);

export default EditorTabs;
