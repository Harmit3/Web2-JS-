// Closure ---------> Most imp. topic in the frontend





/**************************What is Closures and  practical use of it?***********************************************/

//------> A closure is the combination of a function bundled together(enclosed) with refrences to its surronding states (the lexical environment).
//        In other words, a closure gives you access to an outer function scope from an inner function.


function init(){
    var name='Mozilla';
    function displayName(){    //-----> this is a closure the inner function
        console.log(name);
    }
    displayName();
}
init();        //------> This function called then var inside it declare, then after,function came in memory and function execute(log mozzila),which is returned to init while it called on this line. 


//but,what is the benefit of it?? let's say

function init1(name1){
   // var name1='Harmit'; --------.ignorE this and pass it as argument in init1()
    function displayName1(){        //---> this is closure
        console.log(name1);
    }
    return displayName1;     //----> change is here WHEN u return the function instead calling that so whenever we call init1() it will return the function.
}

init1(); //-----> this will not return anything as it is called it has returned function so u should to contain in the variable and then need to call it

var something=init1('Harmit');
something();   //--------> So,benefit of this function is that you can contain in the varible and then call that as much time as you want and it will print on the console.
something();  //So this is how in built js is written to print anything.
something();



// 1st benefit -----> you can make the utility function

function adder(num){
    function add(n){
        console.log(num+n);
    }
    return add;
}


//so you can make utility  functions from closures like addto5 and addto10 as shown in below

const addto5=adder(5);   //---> so, whenever you call this variable it will add 5 in it if you pass the argument inside it
const addto10=adder(10);
addto10(2);          //num is 5 and n is 2    ---> 7
addto5(10);          //num is 5 and n is 10   ---> 15
addto5(18);          //num is 5 and n is 18   ---> 23
addto5();  //------>gives NaN
addto5('5'); //gives 55
addto5(0);           //num is 5 and n is 0   ---> 5
addto5;  //-------> don't return anything as no parameters passed while in closure and in outer function arg. is passed




//2nd benefit -----> you can use in the dom manipulation on window

const myName=document.getElementById('my-name');
const myButton=document.getElementById('my-btn');

function makeTextSizer(size){     //------------->this func. makes u let text size of h1 bigger and smaller by pixels you enter
    function changeSize(){
       myName.style.fontSize=`${size}px`;
    }
    return changeSize;
}

const size12=makeTextSizer(12);
const size22=makeTextSizer(22);
const size32=makeTextSizer(32);
const size52=makeTextSizer(52);

myButton.addEventListener('click',size32); //-----> so when u click on the button it will make size of 32 px.



//3rd benefit--------> you can also makes the counter
const myButtonCnt=document.getElementById('my-btn-cnt');

function makeCounter(){
    let count=1;

    function increment(){
        console.log(count++);
    }

    return increment;
}

const count=makeCounter();
count();   //---> this will log 1
count();   //---> this will log 2
count();   //---> this will log 3 like that
count();



