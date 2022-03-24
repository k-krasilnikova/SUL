import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useGetCourseMaterials } from 'api/courses';
import { useStartClientCourse, usePassClientCourse, useGetClientCourseInfo } from 'api/myCourses';
import { useGetCourseTest, useStartCourseTest } from 'api/test';

import Loader from 'components/Loader';
import { COURSE_STATUSES } from 'constants/statuses';
import { useToggle } from 'hooks';

import LearningCourse from './LearningCourse';
import Material from './Material';
import CourseInfo from './CourseInfo';
import CourseInfoToggle from './CourseInfoToggle';
import StageControllButton from './StageControllButton';
import StageController from './StageController';
import { StartTestDialog } from './StartTestDialog';

const MIN_STAGE = 1;
const STAGE_CHANGE = 1;
const MAX_STAGE_INITIAL = 1;
const CONTENT_ELEMENT = 0;

const LearningCourseContainer: FC = () => {
  const { courseId } = useParams();

  const [stage, setStage] = useState(1);

  const [isCourseInfoOpen, setCourseInfoOpen] = useToggle();
  const [isStartTestDialognOpen, setStartTestDialognOpen] = useToggle();

  const { data: clientCourseResponse, isLoading: clientCourseIsLoading } =
    useGetClientCourseInfo(courseId);

  const { data: courseMaterialsResponse, isLoading: courseMaterialsIsLoading } =
    useGetCourseMaterials(clientCourseResponse?.course?._id);

  const { data: courseTestResponse } = useGetCourseTest({
    courseId,
    enabled: isStartTestDialognOpen && clientCourseResponse?.status === COURSE_STATUSES.started,
  });

  const { mutate: startClienCourseMutate } = useStartClientCourse(courseId);
  const { mutate: startTestMutate } = useStartCourseTest(courseId);
  const { mutate: passCourseStageMutate } = usePassClientCourse(courseId);

  useEffect(() => {
    const handleStartCourse = () => {
      if (clientCourseResponse?.status === COURSE_STATUSES.approved) {
        startClienCourseMutate(courseId);
      }
    };
    handleStartCourse();
  }, [courseId, clientCourseResponse?.status, startClienCourseMutate]);

  const isQueriesLoading = clientCourseIsLoading || courseMaterialsIsLoading;

  if (isQueriesLoading) {
    return <Loader color="primary" />;
  }

  const isResponsesDefined = clientCourseResponse && courseMaterialsResponse;

  if (!isResponsesDefined) {
    return null;
  }

  const testTimeout = courseTestResponse && courseTestResponse[0]?.test?.timeout;

  const {
    course: { title: courseTitle, description: courseDescription },
  } = clientCourseResponse;

  const courseInfo = { title: courseTitle, description: courseDescription };

  const { materials: courseMaterials } = courseMaterialsResponse;

  const courseMaterial = courseMaterials[stage - 1]?.content[CONTENT_ELEMENT];

  const maxStage = courseMaterials?.length || MAX_STAGE_INITIAL;

  const handleStartTest = () => {
    startTestMutate(courseId);
  };

  const handleStageForward = () => {
    setStage(stage + STAGE_CHANGE);
    passCourseStageMutate(stage);
    if (stage + STAGE_CHANGE === maxStage) {
      passCourseStageMutate(maxStage);
    }
  };

  const handleStageBack = () => {
    setStage(stage - STAGE_CHANGE);
  };

  return (
    <>
      <LearningCourse key={courseMaterialsResponse.materials[stage - 1]._id}>
        <StageController
          isBackDisabled={stage <= MIN_STAGE}
          isForwardDisabled={stage >= maxStage}
          maxStage={maxStage}
          stage={stage}
          handleStageBack={handleStageBack}
          handleStageForward={handleStageForward}
        />
        <Material courseMaterial={courseMaterial} />
        <CourseInfoToggle
          isCourseInfoOpen={isCourseInfoOpen}
          toggleCourseInfoOpen={setCourseInfoOpen}
        />
        <StageControllButton
          isTestEnabled={stage === maxStage}
          handleStageForward={handleStageForward}
          handleStartTestDialogOpen={setStartTestDialognOpen}
        />
        <CourseInfo isCourseInfoOpen={isCourseInfoOpen} courseInfo={courseInfo} />
      </LearningCourse>
      <StartTestDialog
        isOpened={isStartTestDialognOpen}
        size="medium"
        testTimeout={testTimeout}
        handleClose={setStartTestDialognOpen}
        handleStartTest={handleStartTest}
      />
    </>
  );
};

export default LearningCourseContainer;
