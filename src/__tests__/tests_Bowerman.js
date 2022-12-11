import Bowerman from '../js/Bowerman';

test('test class Bowerman', () => {
  const bowerman = new Bowerman('bowerman', 'Bowerman');
  const expected = {
    name: 'bowerman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    atack: 25,
    defence: 25,
  };
  expect(bowerman).toEqual(expected);
});

test('test of the entered class name', () => {
  expect(() => {
    const bowerman = new Bowerman('a', 'Bowerman');
    return bowerman;
  }).toThrow(new Error('Имя должно содержать от 2х до 10 символов'));
  expect(() => {
    const bowerman = new Bowerman('qwertyuiopa', 'Bowerman');
    return bowerman;
  }).toThrow(new Error('Имя должно содержать от 2х до 10 символов'));
});

test('test of the class type being entered', () => {
  expect(() => {
    const bowerman = new Bowerman('bowerman', 'Sigvard');
    return bowerman;
  }).toThrow(new Error('Введите корректный тип персонажа'));
});
