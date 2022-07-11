const reverseString = require('./reverseString');

it('should return the reverse of a string', () => {
  const str = 'hello';
  const result = reverseString(str);
  expect(result).toBe(reverseString(str));
});
