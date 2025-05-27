console.log("Hello there from folder 2")

//var   ----> in older js
var age=22;  
console.log(age);
age='Piyush';
console.log(age);


//var has a global scope while let & const has a local scope    
if(true){
var age1='24';
}
console.log(age1);


//let and const will throw an error
if(true){
   let age3='29';
}
//console.log(age3);

//JS is loosely type language means you dont need to define that wheather it is int float or double at runtime it will assign dynamically but defined at runtime
                      
console.log(age4); //this will throw an error
//const age4=25; -------> this will give you an error because it don't work with const

var age4=25; //later on,you define then it will give undefine in above line print
console.log(age4); //this will print 25 now


//const ----> u can't change the value (re-assign) of const
// also in the case of const you must need to assign the value you can't do it like let and var where you can do let a; var a; and assign the value late on.
//but, can do const age=30 and then add 10 in that via console.log(age+10);

                    