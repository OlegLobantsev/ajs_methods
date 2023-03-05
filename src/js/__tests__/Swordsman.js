import Swordsman from '../Swordsman';

test('Swordsman', () => {
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'abc',
    type: 'Swordsman',
  };
  const received = new Swordsman('abc');
  expect(received).toEqual(expected);
});

test('type error in Swordsman', () => {
  function typeSwordsman() {
    return new Swordsman('abc', 'sometype');
  }

  expect(typeSwordsman).toThrowError(new Error('Некорректный тип'));
});
