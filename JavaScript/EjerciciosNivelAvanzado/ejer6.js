//Crear clase Circulo con atributo radio y metodo para calcular area

class Circulo {
  constructor(radio) {
    this.radio = radio;
  }

  calcArea(radio) {
    let area = Math.PI * radio ** 2;
    return area;
  }
}
