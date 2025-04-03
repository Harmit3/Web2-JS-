console.log("Hello world!");

//chunk of code which you can call anywhere and peint whatevr you have assign the task in that functions
function Hello(){
    console.log("Hey there! How are you?");
}

Hello();
Hello();
Hello();
Hello();


function add(a,b){ //arguments
    return a+b;

}

console.log(add(2,5));  //parameters



function mul(a,b){
    return a*b;
}

let ans=mul(3,7);
console.log(ans);



//unlimited arguments accept by functions
function addNumber(){   
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum=arguments[i]+sum;
    }
    return sum;
}
let b=addNumber(5,10,15,1,1,1,1,1,9);
console.log(b);


//unlimited arguments by spread operators
function addNumberSpread(...numbers){   
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum=arguments[i]+sum;
    }
    return sum;
}

let c=addNumber(5,10,15,20);
console.log(c);



//arrow function (introduced in ES6 latest version of js version)

//1.Syntax

function Hello(){
    console.log("Hey there! How are you?");
}
Hello();

const sayHello=()=>{   //arrow function
   console.log("Hello world!")
}
sayHello();

const add1=(a,b)=>{
   return a+b;
}

const add2=(a,b)=>a+b;   //this is one linear function,only use when return one specific thing

let plus=add1(7,8);
console.log(plus);


//***************************************************//
//2.argument keyword is not udse in arrow 
// functions only spread operator will work
//***************************************************//


function add3(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
       sum=sum+arguments[i];
    }
    return sum;
}

let d=add3(2,3,4,5,6);
console.log(d);

// const add4=()=>{
//     let sum=0;
//     for(let i=0;i<arguments.length;i++){
//        sum=sum+arguments[i];
//     }
//     return sum;
// }
// let e=add4(2,3,4,5,6,7);
// console.log(e);

const add5=(...sumOf)=>{
    let sum=0;
    for(let i=0;i<sumOf.length;i++){
       sum=sum+sumOf[i];
    }
    return sum;
}
let f=add5(2,3,4,5,6,7);
console.log(f);



//3. Hoisting   ---> define function later and print it before
//because js keep functions in the memory on top and then execute another commands

//***************************************************//
// Hoisting only works in normal function not in arrow function 
//**************************************************//
sayHelloThere();

function sayHelloThere(){
    console.log("Hello there it is a function sayHelloThere");
}




//4.This keyword
const obj={
    value:20,
    myFunction:function sayThanks(){
        console.log(this.value);//and this.value ----> will print 20
        console.log("Value is" + this);  //so when we wrote down just this------> refer to object (obj)
        
    },

}
obj.myFunction();
//prints value inside obj which is 20 in our case because 
//myFunction is normal function and it points to that obj [object object]


                

// if it is an arrow function then this will point to console so when you 
// print obj1.myFunction it will give undefined--------> in case of this.value
// and for this--------->it will point to window object (refers to browser) because arrow function has global scope so point to global window

const obj1={
    value:21,
    myFunction:()=>{
        console.log(this);         //window object browser
        console.log(this.value);   //undefined
    },

}
obj1.myFunction();


//Summary :- In short

//this in normal function points to caller and 
//this in arrow function points to window object because arrow function has global scope
//Hoisting is not possible in arrow function
//argument keyword is not works will throw an error,always use spread operators in arrow function
//syntax is const hello=()=>{console.log()}






//*****************************************  High order functions       **********************//
//*****************************************     and call backs   ****************************//
// *****************************************************************************************//

//High order function   ------> a function which takes function as an argument

function add8(a,b){
    return a+b;
}

let g=add8(1,5);  
console.log(g);

// if suppose addition is task which takes time because we need to pass this value to api and api will answer us 
// and when we will get that answer after that run this function for sum then high order function is useful

//so, in this function we will use cb(callback) and use that cb as a function inside function


function add9(a,b,cb){   //this is high order function because it takes function as an arguments
    let result=a+b;
    cb(result);
}

add9(2,399,function(val){
    console.log(val);
})


function add10(a,b,cb){   //this is high order function because it takes function as an arguments
    let result=a+b;
    cb(result);
}
function showResult(result){
    console.log(result);
}

add10(2,40001,showResult);


//short form of this is
function add11(a,b,cb){   //this is high order function because it takes function as an arguments
    let result=a+b;
    cb(result);
}

add11(2,8001,(val)=>console.log(val));





/**************************************************************************************************************************************************/
/******************************************Function can also return function***********************************************************************/
/**************************************************************************************************************************************************/

function add12(a,b,cb){   
    let result=a+b;
    cb(result);

    return ()=>console.log(result);
}

let resultFunction=add12(2,60071,()=>{});  // nothing will return here because it will return function in this(resultFunction) and when we call it 
resultFunction();                          // that function will call again and print happens here. (60073)


//Earlier in js, when promises doesn't exists then callbacks used too much.
//But, because of callback hell problem,now in production promises works 
//as replacement of callbacks which helps in clean code at production


