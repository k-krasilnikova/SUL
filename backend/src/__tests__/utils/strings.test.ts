import { combineFullName } from 'utils/combine/combineFullName';
import capitalizeFirstLetter from 'utils/string/capitalizeFirstLetter';
import fullTrim from 'utils/string/fullTrim';

describe('String utils tests', () => {
  it("Capitalize string's first letter", () => {
    const mockedString = 'hello, world!';
    const expected = 'Hello, world!';

    const result = capitalizeFirstLetter(mockedString);
    const resultNoChanges = capitalizeFirstLetter(expected);

    expect(result).toBe(expected);
    expect(resultNoChanges).toBe(expected);
  });

  it('Full trim of a string', () => {
    const mockedString = 'Hello,         world!';
    const expected = 'Hello, world!';

    const result = fullTrim(mockedString);
    const resultNoChanges = fullTrim(expected);

    expect(result).toBe(expected);
    expect(resultNoChanges).toBe(expected);
  });

  it('Combine full name', () => {
    const firstName = 'FirstName';
    const lastName = 'SecondName';

    const expected = `${firstName} ${lastName}`;

    const result = combineFullName(firstName, lastName);

    expect(result).toBe(expected);
  });
});
