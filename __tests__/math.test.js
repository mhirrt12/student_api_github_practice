const math = require('../math');

test('adds numbers', () => {
  expect(math.add(2, 3)).toBe(5);
});

test('subtracts numbers', () => {
  expect(math.subtract(10, 4)).toBe(6);
});

test('multiplies numbers', () => {
  expect(math.multiply(5, 4)).toBe(20);
});

test('divides numbers', () => {
  expect(math.divide(20, 5)).toBe(4);
});

test('division by zero throws error', () => {
  expect(() => math.divide(5, 0)).toThrow(
    'Division by zero'
  );
});