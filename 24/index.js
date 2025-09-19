// What is Curry in JS and practical use of curry?? 


// this is a normal function which log the output
//But, what if you guys need to have all 3 parametets and a and b come from two diffrent APIs and c could be entered by the user.

function add(a,b,c){
    return a+b+c;
}

console.log(add(2,3,5));


// So, one way to do it is either you can make the await function and return a and b from there and once you got that user can enter 
// the c and you are good to go. But, this is not a way if hundreads of parameters are there because it is not scalable to 
// make 100 function and wait for them and then u console the thing.


//  And, to solve this kinda problem youj can amke the curry which is called a function inside function inside function.And, you can 
//  call the closures inside it.

//below is the eg. of currying


function add1(a){      //---------> add1 function called with arg. a
    return function(b){        //------> which returns the function with arg. b
        return function(c){    //------> which returns the function with arg. c
            return a+b+c;      //------> which returns the sun
        }
    }
}

console.log(add1(2)(3)(5));   //----------> called here and passed the parameters in seperate brackets

// console.log(add1(2)(3));      //-----> if you remove the any of argument then it will return the function with c is not availble over there







//Practical useCase in the industry.

// For suppose, you need to send auto Email and 3 parameters are needed like you need sender,subject and body. Also, You are working in the team
// and one party's job is to maintain to part of sender, another party maintain subject part and you maintain body. So, you can make it
// through js currying.

function sendAutoEmail(to){
    return function(subject){
        return function(body){
            console.log(`Sending Email to ${to} with subject ${subject} : ${body} `);                                                  
        }
    }
}

let step1=sendAutoEmail('patel62b@gmail.com');                           //----> one party's job is done over here.
let step2=step1('New Order Confirmation');                               //----> another party's job is done over here.
step2('Hey HARMIT P, you order is dispatched from the warehouse.')      
//--> your work and if you see on the console you can see log over there that this email id with this subject and this is email has been sent.

//so usecase is ----> until or unless all parameters are not done it will not log on the console means assigned activity is not done till there.



//how you will write down above function in ES6
const addi= (a) => (b) => (c) => a+b+c;
console.log(addi(1)(5)(20));

const sendAutoEmailTo = (to) => (subject) => (body) => `Sending Email to ${to} with subject ${subject} \n\n${body}.`;
// first it will work on (to), if this is done then and only then subject and then body.
let stepTo1=sendAutoEmail('patel62b@gmail.com');                           //----> one party's job is done over here.
let stepTo2=stepTo1('New Order Confirmation has been dispatched.');                               //----> another party's job is done over here.
stepTo2('Hey HARMIT P, you order for MACBOOK is dispatched from the warehouse today.')     


//Currying use in High Order Function and Functional Programming and it makes closure function inside closure function.