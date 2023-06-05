import { it, expect, describe } from 'vitest';
import { resultTextConstructor } from './resultTextConstructor';

describe('resultTextConstructor', () => {
  it('should always return a string', () => {
    // ARRANGE
    const valueNoArg = resultTextConstructor();
    const value1 = 1;
    const value2 = 'invalid';
    const value3 = 'false';

    // ACT
    const result1 = valueNoArg;
    const result2 = resultTextConstructor(value1);
    const result3 = resultTextConstructor(value2);
    const result4 = resultTextConstructor(value3);
    // ASSERT
    expect(result1).toBeTypeOf('string');
    expect(result2).toBeTypeOf('string');
    expect(result3).toBeTypeOf('string');
    expect(result4).toBeTypeOf('string');
  });

  it("return 'Result: undefined' upon being called with no arguments", () => {
    // ARRANGE AND ACT
    const result = resultTextConstructor();

    // ASSERT
    expect(result).toBe('Result: undefined');
  });

  it('should return a string that contains the calculation result if a number is provided as a result', () => {
    const result = 5;

    const resultText = resultTextConstructor(result);

    expect(resultText).toContain(result.toString());
  });

  it("return 'Invalid input, you must enter valid numbers.', upon receiving 'invalid' as an argument", () => {
    // ARRANGE AND ACT
    const result = resultTextConstructor('invalid');

    // ASSERT
    expect(result).toBe('Invalid input. You must enter valid numbers.');
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = 'invalid';

    const resultText = resultTextConstructor(result);

    expect(resultText).toContain('Invalid');
  });

  it("return an empty string upon receiving 'no-calc' as an argument", () => {
    // ARRANGE
    const value = 'no-calc';
    //ACT
    const result = resultTextConstructor(value);

    // ASSERT
    expect(result).toBe('');
  });
});
