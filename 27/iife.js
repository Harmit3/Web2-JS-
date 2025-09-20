//what is IIFE in js?

//It is a design pattern which is also known as Self-executing anonymous function.

//IIFE ---> Immediately Invoked Function Expression

//how would u make iife which adds two numbers



//(this is where u make function)(and at a time u invoke)  --> and this is iife


(function add(a,b){
    console.log(a+b);             
})(2,3);


(function sayHello(){
    console.log("Hello world!");
})();    //-----> when u add () at the end then and only then iife will print on the console


// ES6 FORMATE IIFE
(()=>console.log("I am ES6."))();

//you can return the value from a function and return IIFE function as well.
const value=(()=>100)(); //---> this iife will not print anything on the console because you need to call its variable to get the value from inside function
console.log(value);

/****************************************************************************************************************************/
//Usecases:-
/****************************************************************************************************************************/










/****************************************************************************************************************************/
//1.avoid polluting global namespace
/****************************************************************************************************************************/

let age;   //------> will take global space
//so for eg:- you need an age variable which is only needed for particular function and don't need to use whole global namespace then u can make iife of it.
(()=>{
    let age;
})();     //----------> this variable is then immediately invoke so won't take space inside memory after it execute and discarded.Also, won't take global namespace pollute.





/****************************************************************************************************************************/
//2.Execute an async function
/****************************************************************************************************************************/

//for eg:- you need to execute async. function

let data; //--> here u make the varible and its value is null(not defined).

async function getData(){      //----> here u make async function and calll the api which is stored in the data varible
    data=await fetch(); 
}

getData();  // --------> now u call the function here which will log the value of it or can say change the value of data variable from null to its result


//So,above is not a good practice but while u use iife u can see it is much cleaner approach

const dataji=(async()=>await fetch())();   //----> now, if u hover on the dataji varible u can see the value of that varible is Promise and looks more cleaner




/****************************************************************************************************************************/
//3.The module pattern
/****************************************************************************************************************************/

//We would also use IIFE to create private and public variables and methods.


//for eg:- u are making ATM system which user can't see balance but if customer wants to see balance then he/she need to withdraw amount then and only then it shows  what's the account balance is.

const atm=function(initialBalance){
  let balance=initialBalance;
  function withdraw(amt){
    if(amt>balance){
        return "Are u kidding me?";
    }else{
        balance-=amt;
        return balance;
    }
  }
  return {withdraw}
};

const harmit=atm(1000);
console.log(harmit.withdraw(100));




