import { useState, FC, Children } from 'react';

import { INITIAL_STEP, TAB_STEP } from 'constants/courseEditor';

import { IEditorTabsProps } from './types';
import EditorTabs from './EditorTabs';

const EditorTabsContainer: FC<IEditorTabsProps> = ({ children }) => {
  const [step, setStep] = useState(INITIAL_STEP);
  const childrenArray = Children.toArray(children);
  const currentChild = childrenArray[step];

  const totalSteps = childrenArray.length;
  const isLastStep = step === totalSteps - 1;
  const isFirstStep = step === INITIAL_STEP;

  const handleNextStep = () => {
    setStep(step + TAB_STEP);
  };

  const handlePreviousStep = () => {
    setStep(step - TAB_STEP);
  };

  const handleSubmit = () => {
    // eslint-disable-next-line no-console
    console.log('submit');
  };

  return (
    <EditorTabs
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
      handleSubmit={handleSubmit}
      isFirstStep={isFirstStep}
      isLastStep={isLastStep}
      currentChild={currentChild}
    />
  );
};

export default EditorTabsContainer;
