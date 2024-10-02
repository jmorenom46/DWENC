class Pokemon {
  constructor(name, type, chp, mhp, attackStat, deffense, moves) {
    this.name = name;
    this.type = type;
    this.chp = chp;
    this.mhp = mhp;
    this.attackStat = attackStat;
    this.deffense = deffense;
    this.moves = moves;
  }

  attack(oponent) {
    let ran = Math.floor(Math.random() * 16) + 85;
    //Damage = (Attack / Defense) * Move Damage * Random Factor
    if (ran == 0) {
      console.log("El ataque ha fallado. ");
    } else {
      let dmg = (this.attackStat / oponent.deffense) * this.moves.dmg * ran;
      return dmg;
    }
  }

  heal() {
    this.chp += this.mhp / 2;
  }
}

module.exports = Pokemon;