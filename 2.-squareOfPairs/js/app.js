// 3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas)

                                // ES5

// declara las variables ES5

// var array = [2, 4, 6];
// var array = [-3, 2, -8, 12, 5];
// var array = [1, 2, 3, 4, 5];
//
//
// // declaración de la funcion
//
// function square (array) {
//   var numberSqrt=array.map(function (number) {
//     return number*number});
//   console.log(numberSqrt);
//
// }
// square(array);
                      //  ES6

// Ahora comenta todo el codigo de arriba y escribelo en ES6

// declara variables (let-const)

// arreglo
const array = [2, 4, 6];
// const array = [-3, 2, -8, 12, 5];
// const array = [1, 2, 3, 4, 5];
// declara la funcion y ejecuta el código

let square =array => {
  let numberSqrt=array.map(number =>number*number);
  console.log(numberSqrt);
  return numberSqrt;
}
square(array);







// ejecuta la funcion
