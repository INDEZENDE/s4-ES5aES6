                        // ES5


// 1.1- Mostrar en la consola un mensaje que diga... "El numero de generaciones es (numero de generaciones en total)"
var generations=Object.keys(laboratoria.generaciones); //Convierte el objeto a arrreglo
console.log("El numero de generaciones es "+generations.length);
// 1.2- Mostrar en la consola un mensaje que diga ... "La (numero de generacion) tuvo (numero de alumnas en esa generacion) alumnas" [Un mensaje por cada generacion]
for (var generation in laboratoria.generaciones){//Para recorrer el objeto
   console.log("La "+generation+" tuvo" +laboratoria.generaciones[generation].alumnas+" alumnas");
}
// 1.3- Mostrar en la consola un mensaje que diga "El promedio de edad de la (numero de generacion) generacion es de (promedio de numero de alumas en la generacion)" [un mensaje por generacion]
for (var generation in laboratoria.generaciones){//Para recorrer el objeto
   console.log("El promedio de edad de la "+generation+" generación es de " +laboratoria.generaciones[generation]["edad-promedio"]);
}
// 1.4- Mostrar en la consola un mensaje que diga "El nombre mas comun de la (numero de generacion) generacion es: (nombre mas comun de esa generacion)"
for (var generation in laboratoria.generaciones){//Para recorrer el objeto
   console.log("El nombre mas comun de la "+generation+" generación es " +laboratoria.generaciones[generation]["nombre-mas-comun"]);
}

// Alcance 2...

// 2.1- Mostrar en la consola un mensaje que diga... ""El numero total de alumnas en todas las generaciones es: (total de alumnas de todas las generaciones) y en promedio (el promedio de alumnas por generacion) mujeres  cursan Laboratoria cada generacion"
var total=0;
for (var generation in laboratoria.generaciones){//Para recorrer el objeto
   total=total+(laboratoria.generaciones[generation].alumnas);
}
var average= total/generations.length;
console.log("El numero total de alumnas en todas las generaciones es:"+total+ " y en promedio" +average);

// 2.2- Mostrar en consola un mensaje que diga "La edad promedio de las mujeres que cursan laboratoria es:  (promedio de la edad promedio de todas las generaciones)"
var totalAge=0;
for (var generation in laboratoria.generaciones){//Para recorrer el objeto
  totalAge=totalAge+(laboratoria.generaciones[generation]["edad-promedio"]);
}
var averageAge= totalAge/generations.length;
console.log("La edad promedio de las mujeres que cursan laboratoria es "+averageAge);

// 2.3- Mostrar en consola un mensaje que diga "En las (numero de generaciones) los nombres mas comunes fueron (los nombres mas comunes de todas las generaciones separados por una (,)).
// for (var generation in laboratoria.generaciones){//Para recorrer el objeto
// }
// console.log("En las "+generation+" Los nombres más comunes fueron " +laboratoria.generaciones[generation]["nombre-mas-comun"]);






// Alcance 3....

// Crear botones para disparar cada uno de los puntos y pintarlos por medio del DOM










// Alcance 4....

// Agregar la siguiente generacion a la data desde una funcion obteniendo los datos por medio de prompts:

//  "sexta", "alumnas": 120, "edad-promedio": 28, "nombre-mas-comun" : "Silvana"





// ----------------------------Ahora comenta todo el código anterior y escribelo en ES6----------------
