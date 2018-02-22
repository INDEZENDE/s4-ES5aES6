// En este ejercicio deberas crear tu solción en ES5, asegurarte que funcione

// var correctPassword= "laboratoria"
// var password=prompt("Ingresa la contraseña")
// function user (password) {
//   if ((password.length===0)||(password!=correctPassword)) {
//     console.log("falso");
//   }
//   else {
//     console.log("correcto");
//   }
// }
// user(password);

// comenta todo lo anterior y escribelo en ES6

const correctPassword= "laboratoria"
let password=prompt("Ingresa la contraseña")
user = password =>{
  if ((password.length===0)||(password!=correctPassword)) {
    console.log("falso");
  }
  else {
    console.log("correcto");
  }
}
user(password);
