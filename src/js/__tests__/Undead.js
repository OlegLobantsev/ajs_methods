import Undead from '../Undead';

test('Undead', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'abc',
    type: 'Undead',
  };
  const received = new Undead('abc');
  expect(received).toEqual(expected);
});

test('type error in Undead', () => {
  function typeUndead() {
    return new Undead('abc', 'sometype');
  }

  expect(typeUndead).toThrowError(new Error('Некорректный тип'));
});
