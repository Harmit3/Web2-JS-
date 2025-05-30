// What is composition in js and why it is use for??

//So,problem statement is you need to add 2 numbers and whatever result you got from there make a square of it and print it on the console.

function add(a,b){
    return a+b;
}
function square(val){
    return val*val;
}


let sum=add(2,3);
console.group(square(sum));

//Instead of above step you can make function and directly call from there 
function addTwoandSquare(a,b){
    return square(add(a,b));
}
console.log(addTwoandSquare(2,3));

//In real life, when you need to do lots of things how many functions you will create like add,square and then cube and then do some ops. on that.
//The ans is strictly No because you can't full your codebase with utility functions like this and that is why composition is useful. Means, it will
//compose the function. So, we need to make that kinda function which can compose the other utility functions.

//for eg:-

function composeTwoFunction(fn1,fn2){    //----> will take two functional arguments and return function with two generic args. 
    return function(a,b){                //----> which will return fn2() and inside that fn1().
        return fn2(fn1(a,b));
    }
}

//now you will use this compose function as below.
const ans=composeTwoFunction(add,square); //-------> added two functions in parameters with composing two functions.
console.log(ans(5,5));                    //------> this is how you can pass the generic values inside the function.


//In ES6, you will write down above function as below.
const c2f=(fn1,fn2)=>(a,b)=>fn2(fn1(a,b));





//If you wanna compose the unlimited functions then also you can use the compose in js by passing spread ops. arguments.

function multiply(args){              //---------> made new function of multiplication as array's 1st and 2nd arguments could be passed
    return args[0]*args[1];
}

//made function which can accept the unlimited agruments.
function compose(...fns){       //------------------------------> here, it accepts unlimited functions
    return function(...values){                   //-------------> here, it accepts unlimited values(type is arrays) that we passed in retuen function(a,b) in above function
        return fns.reduce((a,b)=>b(a),values);     //----------> here, we need to run reverse arguments like need to wrap b to a. So, used fns.reduce which will reduce from right to left.
        //Also, functional arguments come here first (a,b) as values and the b(a) for calling a first and then its result to b from values. 
    }
}

//you cna write down above functions to arrow functions like below
/*
 const compose=
   (...fns)=>
   (...values)=>
      fns.reduce((a,b)=>b(a),val);
*/

const task=compose(multiply,square,function(value){return value+1;});      
console.log(task(2,10)); //-----> you passed the two arguments while here you can add multiple arguments. Here, you can see 3 args. and in the last your ans. is ans+1.

// Arrow func. of above is a s follows.
const task1=compose(multiply,square,(val)=>val*10);         //-----> will get 400*10 =40000
console.log(task1(2,10));


