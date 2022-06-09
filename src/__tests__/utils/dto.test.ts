import { generateProgressDto } from 'utils/dto/dto';

describe('Dto utils', () => {
  it('Generate progress dto', () => {
    const stage = 2;
    const result = [
      { stage: 1, isCompleted: false },
      { stage: 2, isCompleted: false },
    ];

    const generatedProgress = generateProgressDto(stage);

    expect(generatedProgress).toEqual(result);
  });
});
