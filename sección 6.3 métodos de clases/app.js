
class Carro {

    constructor(marca1, tipo1, puertas) {

        this.marca = marca1;
        this.tipo = tipo1;
        this.puertas = puertas;

        this.creandoEn = 'hoy';
        this.encendido = false;
        this.gasolina = 100;
    }

    encenderCarro() {
      
        if(this.encendido){
            console.error('El carro no sirve el motor se quemo');
        } else{
            this.encendido = true;
            console.log('El carro esta encendido');
        }
          
    }

    realizarViaje(consumo) {

        if(this.encendido == false){
            console.error("El carro esta apagado, debes encenderlo primero");
        } else if (consumo > this.gasolina){
            console.error("El cosumo es mayor a la gasolina restante")
        } else{
        this.gasolina = this.gasolina - consumo;
        return 'Le queda ' + this.gasolina;
        }
   
     
              
        /*if(this. gasolina){
            console.error('El carro tiene -40 de gasolina');
         
            return 'Le queda ' + this.gasolina;

        } else{
            this.apagado('No se puede realizar viaje por falta de combustible');
        }*/
         
    
      }
}


let carro = new Carro('Maza', 'Sedan', '2');
console.log(carro);