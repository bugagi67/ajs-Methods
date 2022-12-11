import Bowerman from './Bowerman';
import Character from './Character';
import Daemon from './Daemon';
import Magician from './Magician';
import Swordsman from './Swordsman';
import Undead from './Undead';
import Zombie from './Zombie';

const bowerman = new Bowerman('asd', 'Bowerman');
const zombie = new Zombie('asd', 'Zombie');
const daemon = new Daemon('asd', 'Daemon');
const magician = new Magician('asd', 'Magician');
const swordsman = new Swordsman('asd', 'Swordsman');
const undead = new Undead('asd', 'Undead');
const character = new Character('asd', 'Undead');

console.log(bowerman);
console.log(zombie);
console.log(daemon);
console.log(magician);
console.log(swordsman);
console.log(undead);
console.log(character);
