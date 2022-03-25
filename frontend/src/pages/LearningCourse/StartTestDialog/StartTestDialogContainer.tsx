import { FC } from 'react';
import { useParams } from 'react-router';

import { useGetCourseTest, useStartCourseTest } from 'api/test';

import StartTestDialog from './StartTestDialog';
import { IContainerProps } from './types';

const StartTestDialogContainer: FC<IContainerProps> = (props) => {
  const { courseId } = useParams();

  const { data: courseTestResponse, isLoading: courseTestIsLoading } = useGetCourseTest({
    courseId,
  });

  const { mutate: startTestMutate } = useStartCourseTest(courseId);

  const testTimeout = courseTestResponse && courseTestResponse[0]?.test?.timeout;

  const handleStartTest = () => startTestMutate(null);

  return (
    <StartTestDialog
      isLoading={courseTestIsLoading}
      testTimeout={testTimeout}
      handleStartTest={handleStartTest}
      {...props}
    />
  );
};

export default StartTestDialogContainer;
