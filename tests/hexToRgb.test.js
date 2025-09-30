const { hexToRgb } = require('../index');  // import function from index.js

describe('hexToRgb function', () => {
  test('Converts #FFFFFF to { r: 255, g: 255, b: 255 }', () => {
    expect(hexToRgb('#FFFFFF')).toEqual({ r: 255, g: 255, b: 255 });
  });

  test('Converts 000000 to { r: 0, g: 0, b: 0 }', () => {
    expect(hexToRgb('000000')).toEqual({ r: 0, g: 0, b: 0 });
  });

  test('Converts #FF5733 to { r: 255, g: 87, b: 51 }', () => {
    expect(hexToRgb('#FF5733')).toEqual({ r: 255, g: 87, b: 51 });
  });

  test('Throws error on invalid hex input', () => {
    expect(() => hexToRgb('ZZZZZZ')).toThrow('Invalid HEX format');
  });
});
