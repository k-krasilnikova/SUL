import { FC } from 'react';

import ActionButtons from 'components/EditorTabs/ActionButtons';

import { IEditorTabsProps } from './types';

const EditorTabs: FC<IEditorTabsProps> = ({ currentChild, handleNextStep, handlePreviousStep }) => (
  <>
    {currentChild}
    <ActionButtons handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />
  </>
);

export default EditorTabs;
