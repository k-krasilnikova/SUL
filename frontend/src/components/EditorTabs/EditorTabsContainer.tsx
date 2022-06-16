import { useState, FC, Children } from 'react';

import { MIN_STEP, TAB_STEP } from 'constants/courseEditor';

import { IEditorTabsContainerProps } from './types';
import EditorTabs from './EditorTabs';

const EditorTabsContainer: FC<IEditorTabsContainerProps> = ({
  children,
  scrollToTop,
  ...props
}) => {
  const [step, setStep] = useState(MIN_STEP);
  const childrenArray = Children.toArray(children);
  const currentChild = childrenArray[step - TAB_STEP];

  const maxStep = childrenArray.length;

  const isSubmitEnabled = step === maxStep;

  const handlePreviousStep = () => {
    if (step > MIN_STEP) {
      scrollToTop();
      setStep(step - TAB_STEP);
    }
  };

  const handleNextStep = () => {
    scrollToTop();
    setStep(step + TAB_STEP);
  };

  return (
    <EditorTabs
      step={step}
      isSubmitEnabled={isSubmitEnabled}
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
      currentChild={currentChild}
      {...props}
    />
  );
};

export default EditorTabsContainer;
