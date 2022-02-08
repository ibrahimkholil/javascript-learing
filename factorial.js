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

function factorialize(num){
     if(num < 0){
         return -1;
     }else if(num == 0){
      return 1;
     }else{
         return (num * factorialize(num - 1));
     }
}

console.log(factorialize(4));