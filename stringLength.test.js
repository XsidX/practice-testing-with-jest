const stringLength = require('./stringLength');

it('should return the length of a string', () => {
  const str = 'hello';
  const result = stringLength(str);
  expect(result).toBe(str.length);
});

it('should throw an error if the string is greater than 10 characters, or empty', () => {
  const str = 'hello world';
  const result = () => stringLength(str);
  expect(result).toThrowError();
});
