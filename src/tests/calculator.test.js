const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require('../calculator');

// ─── Addition ────────────────────────────────────────────────────────────────
describe('add', () => {
  test('2 + 3 = 5 (image example)', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds two positive numbers', () => {
    expect(add(10, 5)).toBe(15);
  });

  test('adds a positive and a negative number', () => {
    expect(add(10, -3)).toBe(7);
  });

  test('adds two negative numbers', () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test('adds zero to a number (identity)', () => {
    expect(add(7, 0)).toBe(7);
  });

  test('adds two zeros', () => {
    expect(add(0, 0)).toBe(0);
  });

  test('adds decimal numbers', () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe('subtract', () => {
  test('10 - 4 = 6 (image example)', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts two positive numbers', () => {
    expect(subtract(20, 8)).toBe(12);
  });

  test('subtracts a larger number from a smaller one (negative result)', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtracts a negative number (becomes addition)', () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test('subtracts zero (identity)', () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test('subtracts a number from itself gives zero', () => {
    expect(subtract(5, 5)).toBe(0);
  });

  test('subtracts decimal numbers', () => {
    expect(subtract(5.5, 2.5)).toBeCloseTo(3.0);
  });
});

// ─── Multiplication ───────────────────────────────────────────────────────────
describe('multiply', () => {
  test('45 * 2 = 90 (image example)', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies two positive numbers', () => {
    expect(multiply(4, 7)).toBe(28);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiply(6, -3)).toBe(-18);
  });

  test('multiplies two negative numbers (positive result)', () => {
    expect(multiply(-4, -5)).toBe(20);
  });

  test('multiplies by zero gives zero', () => {
    expect(multiply(99, 0)).toBe(0);
  });

  test('multiplies by one (identity)', () => {
    expect(multiply(13, 1)).toBe(13);
  });

  test('multiplies decimal numbers', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

// ─── Division ─────────────────────────────────────────────────────────────────
describe('divide', () => {
  test('20 / 5 = 4 (image example)', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides two positive numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divides resulting in a decimal', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('divides a negative number', () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test('divides two negative numbers (positive result)', () => {
    expect(divide(-15, -3)).toBe(5);
  });

  test('divides zero by a number gives zero', () => {
    expect(divide(0, 5)).toBe(0);
  });

  test('divides by one (identity)', () => {
    expect(divide(8, 1)).toBe(8);
  });

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed.');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed.');
  });
});

// ─── calculate (operator dispatch) ───────────────────────────────────────────
describe('calculate', () => {
  test('dispatches + to addition', () => {
    expect(calculate(2, '+', 3)).toBe(5);
  });

  test('dispatches - to subtraction', () => {
    expect(calculate(10, '-', 4)).toBe(6);
  });

  test('dispatches * to multiplication', () => {
    expect(calculate(45, '*', 2)).toBe(90);
  });

  test('dispatches / to division', () => {
    expect(calculate(20, '/', 5)).toBe(4);
  });

  test('throws on division by zero via calculate', () => {
    expect(() => calculate(10, '/', 0)).toThrow('Division by zero is not allowed.');
  });

  test('throws on unsupported operator', () => {
    expect(() => calculate(5, '^', 2)).toThrow('Unsupported operator "^"');
  });

  test('dispatches % to modulo', () => {
    expect(calculate(5, '%', 2)).toBe(1);
  });

  test('dispatches ** to power', () => {
    expect(calculate(2, '**', 3)).toBe(8);
  });
});

// ─── Modulo ───────────────────────────────────────────────────────────────────
describe('modulo', () => {
  test('5 % 2 = 1 (image example)', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('returns zero when evenly divisible', () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test('works with a larger divisor', () => {
    expect(modulo(3, 7)).toBe(3);
  });

  test('works with negative dividend', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test('works with negative divisor', () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test('returns zero when dividend is zero', () => {
    expect(modulo(0, 5)).toBe(0);
  });

  test('works with decimal numbers', () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });
});

// ─── Power ────────────────────────────────────────────────────────────────────
describe('power', () => {
  test('2 ^ 3 = 8 (image example)', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('raises a number to the power of 0 gives 1', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('raises a number to the power of 1 (identity)', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('raises a number to a negative exponent', () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test('raises a negative base to an even exponent (positive result)', () => {
    expect(power(-3, 2)).toBe(9);
  });

  test('raises a negative base to an odd exponent (negative result)', () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test('raises 0 to a positive power gives 0', () => {
    expect(power(0, 5)).toBe(0);
  });

  test('works with decimal base', () => {
    expect(power(2.5, 2)).toBeCloseTo(6.25);
  });
});

// ─── Square Root ──────────────────────────────────────────────────────────────
describe('squareRoot', () => {
  test('√16 = 4 (image example)', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('square root of 9 is 3', () => {
    expect(squareRoot(9)).toBe(3);
  });

  test('square root of 0 is 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('square root of 1 is 1', () => {
    expect(squareRoot(1)).toBe(1);
  });

  test('square root of a non-perfect square returns decimal', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142135);
  });

  test('square root of a large number', () => {
    expect(squareRoot(10000)).toBe(100);
  });

  // Edge case: negative input
  test('throws an error for negative numbers', () => {
    expect(() => squareRoot(-1)).toThrow('Square root of a negative number is not allowed.');
  });

  test('throws an error for any negative number', () => {
    expect(() => squareRoot(-100)).toThrow('Square root of a negative number is not allowed.');
  });
});
