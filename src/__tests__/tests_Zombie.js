import Zombie from '../js/Zombie';

test('test class Zombie', () => {
  const zombie = new Zombie('zombie', 'Zombie');
  const expected = {
    name: 'zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    atack: 40,
    defence: 10,
  };
  expect(zombie).toEqual(expected);
});

test('test of the entered class name', () => {
  expect(() => {
    const zombie = new Zombie('a', 'Zombie');
    return zombie;
  }).toThrow(new Error('Имя должно содержать от 2х до 10 символов'));
  expect(() => {
    const zombie = new Zombie('qwertyuiopa', 'Zombie');
    return zombie;
  }).toThrow(new Error('Имя должно содержать от 2х до 10 символов'));
});

test('test of the class type being entered', () => {
  expect(() => {
    const zombie = new Zombie('zombie', 'Sigvard');
    return zombie;
  }).toThrow(new Error('Введите корректный тип персонажа'));
});
