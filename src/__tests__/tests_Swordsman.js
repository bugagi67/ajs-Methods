import Swordsman from '../js/Swordsman';

test('test class Bowerman', () => {
  const swordsman = new Swordsman('swordsman', 'Swordsman');
  const expected = {
    name: 'swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    atack: 40,
    defence: 10,
  };
  expect(swordsman).toEqual(expected);
});

test('test of the entered class name', () => {
  expect(() => {
    const swordsman = new Swordsman('a', 'Swordsman');
    return swordsman;
  }).toThrow(new Error('Имя должно содержать от 2х до 10 символов'));
  expect(() => {
    const swordsman = new Swordsman('qwertyuiopa', 'Swordsman');
    return swordsman;
  }).toThrow(new Error('Имя должно содержать от 2х до 10 символов'));
});

test('test of the class type being entered', () => {
  expect(() => {
    const swordsman = new Swordsman('swordsman', 'Sigvard');
    return swordsman;
  }).toThrow(new Error('Введите корректный тип персонажа'));
});
