console.log(1+1);

const name1='Piyush';
const name2='Garg';

console.log(name1+" "+name2);


const isLoggedIn=true;
console.log(isLoggedIn);

console.log(1==1);

//null
let lastLogIn=null; 
 //not sure what is the value of this but it could be anything and it will take a place in memory
//while, in undefine, there is no space reserved for that
console.log(lastLogIn);



//Objects
const person={
     name1:'Piyush Garg',
     age1:'25',
     isLoggedIn1:'true',
};

console.log(person);
console.log(person.age1);


//JS believes that 1 -> true and 0 -> false
let isLoggedIn2=true;
console.log(isLoggedIn2+10);  //1+10
console.log(isLoggedIn2-10);  //1-10
let isLoggedIn3=false;
console.log(isLoggedIn3+10); //0+10


console.log('1'+'1'); //concate to 11

console.log(1+1);    //do math on operations

console.log('1'+11); //concate it and make 111

console.log('11'*2); //make 11 as a number from string
console.log('11'*1); 

console.log(typeof('111'*1)); //number
console.log(typeof('111'+1)); //string
console.log(typeof(isLoggedIn));//boolean
console.log(typeof(person));
console.log(typeof(null));    //null is an type of Object
var hel=undefined;
console.log(typeof(hel)); 
console.log(typeof(undefined));  //undefined

console.log('a'*1);  //gives NaN means not a number (not possible)
console.log('a'+1);



////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("Hello world!");
console.log("how r u");

var age=22;
console.log(age);
age='piyush';
console.log(age);
 
console.log("Why it is not working!!");

// number as a string  + string = string   '10'+'1'='101'
// number as a string * number = number   '10'*1=10
// number as a string + number = string   '10'+1='111'
//                            'a'+1 ='a1'
//                            'a'*1 =NaN (not a number)
//                             a+1 = gives uncaught refrenced error
//console.log(a+1);


// null is object --->  can check by typeof operator
// 
let lastLoggedIn=true;
let lastLoggedOut={
    name:'HP',
    age:24,
    lastLoggedOut:false,

};
console.log(typeof lastLoggedOut.lastLoggedOut);


