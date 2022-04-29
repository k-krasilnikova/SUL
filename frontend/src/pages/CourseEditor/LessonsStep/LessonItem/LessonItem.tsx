import { FC, ChangeEvent } from 'react';

import {
  LessonItemWrapper,
  LessonItemTitle,
  LessonInput,
  InputSelect,
  SelectItem,
  VideoInput,
} from './styled';

export interface ILessonItemProps {
  handleChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  selectOption: string;
}

const LessonItem: FC<ILessonItemProps> = ({ handleChange, selectOption }) => (
  <LessonItemWrapper>
    <LessonItemTitle>Lesson № 1</LessonItemTitle>
    <LessonInput>
      <InputSelect onChange={handleChange}>
        <SelectItem value="video" label="Video">
          {selectOption}
        </SelectItem>
        <SelectItem value="text" label="Text">
          {selectOption}
        </SelectItem>
      </InputSelect>
      {selectOption === 'video' && (
        <div>
          <div>Video URL</div>
          <VideoInput type="link" value="" />
        </div>
      )}
    </LessonInput>

    <div>Add course files and description</div>
  </LessonItemWrapper>
);

export default LessonItem;
