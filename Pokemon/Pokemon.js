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

  attack(nmove, oponent) {
    let ran = (Math.floor(Math.random() * 17) + 84) / 100;
    if (ran == 0.84) {
      console.log("El ataque ha fallado. ");
    } else {
      let dmg =
        (this.attackStat / oponent.deffense) * this.moves[nmove - 1].dmg * ran;
      let ent = Math.trunc(dmg);
      console.log(
        `${this.name} ataca a ${oponent.name} y causa ${ent} puntos de daño`
      )
      oponent.chp -= ent;
    }
  }

  heal() {
    let vida = this.chp;
    vida += this.mhp / 2;
    vida > this.mhp ? (this.chp = this.mhp) : (this.chp = vida);
  }
}

module.exports = Pokemon;
