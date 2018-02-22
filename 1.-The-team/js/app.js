         // ES5

// declaracion de las variables

// var [teachersTeam, members] = [
//   'formacion',
//      ['Amalia',
//       'Karla',
//       'Silvana',
//       'Manu',
//       'Jonh',
//       'Mike'
//     ],
// ];
//
// var formatTeamMessage = function (teachersTeam, members) {
//   var message = 'Hay ' + members.length + " " + 'personas en el equipo de' + " " + teachersTeam + "\n" + "Ellos son" + " " + members.join(", ") + ".";
//   console.log(message)
//   return message;
// };
//
// formatTeamMessage(teachersTeam, members);

// Ahora comenta todo el código anterior y escribelo en ES6


                            //  ES6
// declaracion de las variables

const [teamName, product] = [//En el arreglo teamName= formación y product='Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike'
  'formacion', ['Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike'],
];


const formatTeamMessage = (teamName, people) => {//Se crea la función "formatTeamMessage", la cual tiene 2 parámetros (teamName, people)
const message = `Hay ${people.length} ${""} personas en el equipo de${""}${teamName }
Ellos son${" "}${people.join(", ")}${"."}`;
console.log(message)
return message;

}
// Se manda a llamar a la función asignandole los argumentos de acuerdo al arreglo
formatTeamMessage(teamName, product);
