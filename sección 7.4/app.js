let numeros = [1,6,8,4,2,7,10,3,5];
let numeroMayor = 0;


for(let i = 0; i <= numeros.length; i ++){

if ( numeroMayor < numeros[i]){
    numeroMayor = numeros[i];
}

}

console.log('numero mayor es:  ' +  numeroMayor);