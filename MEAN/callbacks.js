//Example 1
function runner(x,y){
    console.log("working");
    x(y);
    console.log("end")
}
runner(function(z){console.log(z+1)}, 4);

//Exampel 2
function runner(x, y, b){
    console.log("working");
    x(y, b-1); 
    console.log("end")
}
runner(function(z,a){console.log(z+a)}, 4, 5);