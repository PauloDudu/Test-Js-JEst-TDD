const functions = require('./functions');

test('Somar 2 + 3 deve dar 5', () => {
  expect(functions.sum(2, 3)).toBe(5);
});

test('Diminuir 3 de 2 deve resultar 1', () => {
    expect(functions.sub(3, 2)).toBe(1);
})

test('Multiplicar 2 * 3 deve resultar 6', () => {
    expect(functions.mult(2, 3)).toBe(6);
})

test('Dividir 3 de 3 deve resultar 1', () => {
    expect(functions.div(3, 3)).toBe(1);
})