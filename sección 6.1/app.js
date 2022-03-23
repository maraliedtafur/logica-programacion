let persona1 = {
    nombre: 'Maralied',
    edad: 23,
    altura: 1.58
};

let persona2 = {
    nombre: 'Luis',
    edad: 20,
    altura: 1.60

};

let persona3 = {
    nombre: 'Rafael',
    edad: 27,
    altura: 1.79
};

let personas = [persona1, persona2, persona3];

console.log (personas);

for(let i = 0; i < personas.length; i ++){
    console.log( personas[i].nombre + "--" + personas[i].edad + '  '  + personas[i].altura);
}