

let dia = -10; // 1= lunes, 2= martes...
// 0 es el domingo


switch (dia) {

  case 0:
    console.log('Es el domingo');
    break;

  case 1:
    console.log('Es lunes');
    break;
  case 2:
    console.log('Es martes');
    break;
  case 3:
    console.log('Es miercoles');
    break;
  case 4:
    console.log('Es jueves');
    break;
  case 5:
    console.log('Es viernes');
    break;
  case 6:
    console.log('Es sabado');
    break;

  default:
    console.log('El dia ingresado no es permitido');
}