import Daemon from '../js/Daemon';

test('test class Daemon', () => {
  const daemon = new Daemon('daemon', 'Daemon');
  const expected = {
    name: 'daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    atack: 10,
    defence: 40,
  };
  expect(daemon).toEqual(expected);
});

test('test of the entered class name', () => {
  expect(() => {
    const daemon = new Daemon('a', 'Daemon');
    return daemon;
  }).toThrow(new Error('Имя должно содержать от 2х до 10 символов'));
  expect(() => {
    const daemon = new Daemon('qwertyuiopa', 'Daemon');
    return daemon;
  }).toThrow(new Error('Имя должно содержать от 2х до 10 символов'));
});

test('test of the class type being entered', () => {
  expect(() => {
    const daemon = new Daemon('daemon', 'Sigvard');
    return daemon;
  }).toThrow(new Error('Введите корректный тип персонажа'));
});
