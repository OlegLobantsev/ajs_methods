import Magician from '../Magician';

test('Magician', () => {
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'abc',
    type: 'Magician',
  };
  const received = new Magician('abc');
  expect(received).toEqual(expected);
});

test('type error in Magician', () => {
  function typeMagician() {
    return new Magician('abc', 'sometype');
  }

  expect(typeMagician).toThrowError(new Error('Некорректный тип'));
});
