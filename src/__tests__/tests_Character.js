import Character from '../js/Character';

test('test class Character', () => {
  const lotriсk = new Character('lotriсk', 'Bowerman', 60, 80);
  const expected = {
    name: 'lotriсk',
    type: 'Bowerman',
    health: 100,
    level: 1,
    atack: 60,
    defence: 80,
  };
  expect(lotriсk).toEqual(expected);
});

test('test of the entered class name', () => {
  expect(() => {
    const lotriсk = new Character('a', 'Bowerman');
    return lotriсk;
  }).toThrow(new Error('Имя должно содержать от 2х до 10 символов'));
  expect(() => {
    const lotriсk = new Character('qwertyuiopa', 'Bowerman');
    return lotriсk;
  }).toThrow(new Error('Имя должно содержать от 2х до 10 символов'));
});

test('test of the class type being entered', () => {
  expect(() => {
    const lotriсk = new Character('lotriсk', 'Sigvard');
    return lotriсk;
  }).toThrow(new Error('Введите корректный тип персонажа'));
});

test('test of the level up method with an acceptable amount of health', () => {
  const lotriсk = new Character('lotriсk', 'Bowerman', 10, 10);
  lotriсk.levelUp();
  const expected = {
    name: 'lotriсk',
    type: 'Bowerman',
    health: 100,
    level: 2,
    atack: 12,
    defence: 12,
  };
  expect(lotriсk).toEqual(expected);
});

test('test of the level up method with 0 health', () => {
  expect(() => {
    const lotriсk = new Character('lotriсk', 'Bowerman', 10, 10);
    lotriсk.health = 0;
    lotriсk.levelUp();
    return lotriсk;
  }).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('checking the damage method with an acceptable amount of health', () => {
  const lotriсk = new Character('lotriсk', 'Bowerman', 10, 10);
  lotriсk.damage(10);
  const expected = {
    name: 'lotriсk',
    type: 'Bowerman',
    health: 91,
    level: 1,
    atack: 10,
    defence: 10,
  };
  expect(lotriсk).toEqual(expected);
});

test('test of the damage method for insufficient health', () => {
  expect(() => {
    const lotriсk = new Character('lotriсk', 'Bowerman', 10, 10);
    lotriсk.health = -1;
    lotriсk.damage(10);
    return lotriсk;
  }).toThrow(new Error('Вы не можете ударить мёртвого персонажа'));
});
