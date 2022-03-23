function describirPersona( p ) {



     console.log( `${ p.nombre } tiene una edad de ${ p.edad } y mide ${ p.estatura } ` );



}


let persona = {
    nombre: 'Maralied',
    edad: 23,
    estatura: 1.58 
}

describirPersona(persona);