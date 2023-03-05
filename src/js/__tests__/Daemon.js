import Daemon from '../Daemon';

test('Daemon', () => {
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'abc',
    type: 'Daemon',
  };
  const received = new Daemon('abc');
  expect(received).toEqual(expected);
});

test('type error in Daemon', () => {
  function typeDaemon() {
    return new Daemon('abc', 'sometype');
  }

  expect(typeDaemon).toThrowError(new Error('Некорректный тип'));
});
