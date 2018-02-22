                            // ES5

// declara la variable
// var array = [10, 20, 30, 20, 30, 40, 60];
// // escribe tu funcion
// function average (array) {
//   var add=0;
//   for (var i=0; i<array.length; i++ ){
//      add+=(array[i]);
//   }
//   var result=add/array.length;
//   console.log("El promedio de este arreglo es:"+result);
// }
// average(array);

                              //ES6
// Comenta todo lo anterior y escribelo en ES6
// declara la variable
const array = [10, 20, 30, 20, 30, 40, 60];
// escribe tu funcion
average = array=> {
  let add=0
  array.forEach(numero => {
      add = numero+add;
    });
  let result=add/array.length;
  console.log("El promedio de este arreglo es:"+result);
}
average(array);
