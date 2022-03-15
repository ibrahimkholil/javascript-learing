// factorial number 
var n = 5;
var  factorial = 1;

// for( var i = n; i>1; i--){
//     factorial *=i;
// }
// console.log( " 5 factorial number is:" + factorial);

// for(var i = 1; i<= 10 ; i++){
//   factorial*=1;

//   console.log("Factorial number",i,"! is",factorial);
// }

// factorialize by funciton with Recursion

// function factorialize(num){
//      if(num < 0){
//          return -1;
//      }else if(num == 0){
//       return 1;
//      }else{
//        //  return (num * factorialize(num - 1));
//          console.log(num );
//          return (num * factorialize(num - 1));
//      }
// }
//
// console.log(factorialize(4));


// recursion function
//  sum the 1 to 100 numbers
// function recursion(num){
//     if (num ===0){
//         return 0;
//     }else {
//         return recursion(num - 1) + num;
//     }
//
// }
//
// console.log(recursion(100000))


n = 1000000000;
console.log( n * (n+1) / 2);
