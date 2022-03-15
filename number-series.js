//S1 = 2,4,6,8,10,12,14......
var series = '' ;
var n;
for (var i =1 ; i<10 ;i++){
    n = i * 2; // multiply 2 with each item
    series =  series + n + " ";

}
console.log("Series 1=",series);

//S2 = 1,4,7,10,13,16,18......

series = 1;
n = 1;
for (var i = 1 ; i<10 ; i++){
    n = n +3; // sum 3 with each item
    series +=  " " + n ;

}
console.log("Series 2=",series);

//S3 = 0,3,8,15,24,35,38...... quare kore -1 korte hobe


series = "";
n =1;
for (var i = 1 ; i<10 ; i++){
    n = i*i - 1; // sum 3 with each item
    series +=  " " + n ;

}