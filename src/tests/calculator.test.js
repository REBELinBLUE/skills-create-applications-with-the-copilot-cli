const { add, subtract, multiply, divide, calculate } = require('../calculator');

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
    expect(() => calculate(5, '%', 2)).toThrow('Unsupported operator "%"');
  });
});
