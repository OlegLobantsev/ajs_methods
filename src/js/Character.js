export default class Character {
  constructor(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть от 2 до 10 символов');
    } else {
      this.name = name;
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack += (this.attack * 0.2);
      this.defense += (this.defense * 0.2);
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего =)');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defense / 100);
    } else {
      this.health = 0;
    }
  }
}
