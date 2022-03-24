

let carro1 = {
    marca: 'Toyota',
    tipo: 'Sedan',
    puertas: 3,
    creadoEn: 'hoy'
};

class Carro {

      constructor(marca1, tipo1, puertas) {

      this.marca = marca1;
      this.tipo = tipo1;
      this.puertas = puertas;

      this.CreandoEn = 'hoy';
      }

}

let carro2 = new Carro('Maza', 'Sedan', '2');

console.log(carro1);
console.log(carro2);