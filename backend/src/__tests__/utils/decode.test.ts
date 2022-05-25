import decodeAndFormatSearchParams from 'utils/decode/decodeSearchParams';

describe('Tests for decode util', () => {
  it('Decode and preparing regex for searching', () => {
    const inputText = 'C++';
    const resultText = 'C\\+\\+';
    const decodedText = decodeAndFormatSearchParams(inputText);

    expect(decodedText).toBe(resultText);
  });
});
