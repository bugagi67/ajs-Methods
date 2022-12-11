import Character from './Character';

export default class Bowerman extends Character {
  constructor(name, type, atack = 25, defence = 25) {
    super(name, type, atack, defence);
  }
}
