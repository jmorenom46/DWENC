class Pokemon {
  constructor(id, name, img, types) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.types = types;
  }

  /*attack(nmove, oponent) {
    let ran = (Math.floor(Math.random() * 17) + 84) / 100;
    if (ran == 0.84) {
      console.log("El ataque ha fallado. ");
    } else {
      let dmg =
        (this.attackStat / oponent.deffense) * this.moves[nmove - 1].dmg * ran;
      let ent = Math.trunc(dmg);
      console.log(
        `${this.name} ataca a ${oponent.name} y causa ${ent} puntos de daño`
      );
      oponent.chp -= ent;
    }
  }

  heal() {
    let vida = this.chp;
    vida += this.mhp / 2;
    vida > this.mhp ? (this.chp = this.mhp) : (this.chp = vida);
  }*/
}

module.exports = Pokemon;
