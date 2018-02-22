//                 // ES5
// function findPairForSum(array, number)
// {
//   var newArray=[];
//   var finalArray=[];
//   for(i=0;i<array.length;i++){
//     if (array[i]<=number){
//       newArray.push(array[i]);
//     }
//   }
//
//   for(j=0;j<newArray.length;j++){
//     for(i=0;i<newArray.length;i++){
//       if((newArray[j]+newArray[i])===number)
//       {
//       finalArray.push(newArray[j]);
//       }
//     }
//   }
//
//   return (finalArray);
// }
// var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// console.log(pair);
                    // ES6

// Ahora comenta todo el código anterior y pasalo a ES6


const findPairForSum = (array, number) => {
  let newArray = [];
  let finalArray = [];
  for (let i of array) {
    if (i<=number){
      newArray.push(i);
    }
  }

 for (let j of array){
   for (let i of array){
     if( j + i === number){
       finalArray.push(j);
      }
   }
 }
 return(finalArray);
}
const pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair);
