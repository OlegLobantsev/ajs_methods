import Bowerman from '../Bowerman';

test('Bowerman', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'abc',
    type: 'Bowerman',
  };
  const received = new Bowerman('abc');
  expect(received).toEqual(expected);
});

test('type error in Bowerman', () => {
  function typeBowerman() {
    return new Bowerman('abc', 'sometype');
  }

  expect(typeBowerman).toThrowError(new Error('Некорректный тип'));
});
