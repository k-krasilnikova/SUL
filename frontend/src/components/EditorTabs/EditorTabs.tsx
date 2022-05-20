import { FC } from 'react';

import ActionButtons from 'components/EditorTabs/ActionButtons';

import { IEditorTabsProps } from './types';

const EditorTabs: FC<IEditorTabsProps> = ({
  currentChild,
  handleNextStep,
  handlePreviousStep,
  handleSubmit,
  isFirstStep,
  isLastStep,
}) => (
  <>
    {currentChild}
    <ActionButtons
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
      handleSubmit={handleSubmit}
      isFirstStep={isFirstStep}
      isLastStep={isLastStep}
    />
  </>
);

export default EditorTabs;
