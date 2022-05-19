import { useState, FC, Children } from 'react';

import { INITIAL_STEP, TAB_STEP } from 'constants/courseEditor';

import { IEditorTabsProps } from './types';
import EditorTabs from './EditorTabs';

const EditorTabsContainer: FC<IEditorTabsProps> = ({ children }) => {
  const [step, setStep] = useState(INITIAL_STEP);
  const childrenArray = Children.toArray(children);
  const currentChild = childrenArray[step];

  const handleNextStep = () => {
    setStep(step + TAB_STEP);
  };

  const handlePreviousStep = () => {
    setStep(step - TAB_STEP);
  };

  return (
    <EditorTabs
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
      currentChild={currentChild}
    />
  );
};

export default EditorTabsContainer;
