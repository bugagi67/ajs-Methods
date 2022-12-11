import Magician from '../js/Magician';

test('test class Magician', () => {
  const magician = new Magician('magician', 'Magician');
  const expected = {
    name: 'magician',
    type: 'Magician',
    health: 100,
    level: 1,
    atack: 10,
    defence: 40,
  };
  expect(magician).toEqual(expected);
});

test('test of the entered class name', () => {
  expect(() => {
    const magician = new Magician('a', 'Magician');
    return magician;
  }).toThrow(new Error('Имя должно содержать от 2х до 10 символов'));
  expect(() => {
    const magician = new Magician('qwertyuiopa', 'Magician');
    return magician;
  }).toThrow(new Error('Имя должно содержать от 2х до 10 символов'));
});

test('test of the class type being entered', () => {
  expect(() => {
    const magician = new Magician('magician', 'Sigvard');
    return magician;
  }).toThrow(new Error('Введите корректный тип персонажа'));
});
