import Undead from '../js/Undead';

test('test class Undead', () => {
  const undead = new Undead('undead', 'Undead');
  const expected = {
    name: 'undead',
    type: 'Undead',
    health: 100,
    level: 1,
    atack: 40,
    defence: 10,
  };
  expect(undead).toEqual(expected);
});

test('test of the entered class name', () => {
  expect(() => {
    const undead = new Undead('a', 'Undead');
    return undead;
  }).toThrow(new Error('Имя должно содержать от 2х до 10 символов'));
  expect(() => {
    const undead = new Undead('qwertyuiopa', 'Undead');
    return undead;
  }).toThrow(new Error('Имя должно содержать от 2х до 10 символов'));
});

test('test of the class type being entered', () => {
  expect(() => {
    const undead = new Undead('undead', 'Sigvard');
    return undead;
  }).toThrow(new Error('Введите корректный тип персонажа'));
});
