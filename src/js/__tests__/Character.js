import Character from '../Character';
import Zombie from '../Zombie';

test('Character', () => {
  const expected = {
    health: 100,
    level: 1,
    name: 'abc',
  };
  const received = new Character('abc');
  expect(received).toEqual(expected);
});

test('throw in Character', () => {
  function throwCharacter() {
    return new Character('0123456789!');
  }

  expect(throwCharacter).toThrowError(new Error('Имя должно быть от 2 до 10 символов'));
});

test('levelUp', () => {
  const recieved = new Zombie('abc', 'Zombie');
  recieved.health = 0;

  expect(() => recieved.levelUp()).toThrow('Нельзя повысить левел умершего =)');
});

test('damage', () => {
  const recieved = new Zombie('abc', 'Zombie');
  const expectedHealth = 0;
  recieved.damage(500);
  recieved.health = 0;

  expect(recieved.health).toEqual(expectedHealth);
});
