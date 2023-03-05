import Character from './Character';

export default class Bowerman extends Character {
  constructor(name, type = 'Bowerman') {
    super(name);
    if (type !== 'Bowerman') {
      throw new Error('Некорректный тип');
    } else {
      this.type = type;
    }
    this.attack = 25;
    this.defence = 25;
  }
}
