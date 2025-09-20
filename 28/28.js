/* 

What is iterator pattern?
----> iterator and generators bring the concept of iteration directly into the core 
language and provide a mechanism for customizing thwew behaviour of for..of loops.

Iterator function is it is controlling language's loop behaviour.

there are next and done function. Next() represent next value in iteration and done represent whether it is true/false with sequance is already consumed or not.

What is Generators or Generator Functions?

What is YIELD keyword? 

*/




//if suppose, we have an array [1,2,3,4,5] then how we can log the each element of the 
//array and how it knows that wheather we need to iterate left to right and all things?

//or we can use forEach or map method on an array
const arr=[11,12,13,14,15];

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//also we can use this method and question is  how it knows that wheather we need to iterate left to right and all things?
//-----> and the answer is , array has built in iterative function which lets it know you need to log/print in this pattern.(which is defalut behaviour of an array)
//However, we can make it customize by using iterator for for...of loops.Below is the built in iterator of 'of' loops.

//-----> so the usecase of iterator is, you need to code your own iterator in production like how it is gonna iterate over the linkedlist or trees you defined. And for that matter we can make it by iterator,generator functions nd yield keyword.
for(const val of [16,17,18,19,20]){
    console.log(val);
}

//Now,let's make our own iterator and then how to easily use that iterator by generator function.
function makeIterator(start=0,end=Infinity,step=1){
    //here, you define start by 0 till it's not end and by step size 1
    let nextStart=start;  //start by start
    let iterationCount=0; //haven't started yet

    //this fn. returns object
    return {
       next(){
        let result;
          if(iterationCount<end){
            result={value:nextStart,done:false}
            nextStart=nextStart+step;
            iterationCount++;
            return result;
          }
         return {value:iterationCount,done:true}
       },
    };
}
const myIterator=makeIterator(2,10,2);   //---> print 1 and then goes till next 10 values by 2 step size at each iterator
//if u don't mention step size then by default it is 1 so you get iteration by 1 stepsize

let result=myIterator.next();


while(!result.done){
    console.log(result.value);
    result=myIterator.next();
}


//above we made custom iterator which we can't use it in pre-built for loop otherwise it throws an error
/*

for(const val of makeIterator(1,10,2)){
    console.log(val);
}        //-----> this will throw an error

*/
 
// ---> So , if we wanna use the custom made iterator with use of default functions in js like for loops then we can use the Generator function.

//while custom iterators are a useful tool,their creation requires careful programming due to the need to explicitely maintain their internal state(state in aboive functions are nextStart,iterationCount which maintain its own state(count).).
//syntax to amke geneartive function is function* functionName


//how to use yield keyword

/*  function count(){          //-------> this will throw an syntaxError because yield is only useful in Generator function.
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;
    yield 12;

}
*/

function* count(){          //-------> if u convert it in Generator function,everything is good to go
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;
    yield 12;
}
console.log(count);
const even=count();
for(const v of even){
    console.log(v);    //-----> this will print the value inside count using for.....of loop(pre-built loop)
}

//how u can make yr own iterator using Generator function
function* makeMyIteratorNew(start,end){
    for(let i=start;i<=end;i++){
        yield i;
    }
}

const one=makeMyIteratorNew(70,80); //will pass parameter
for(const val of one){
    console.log(val); //will print 70 to 80 on log
}


//you can customize yr stepsize as well
function* makeMyIteratorNew2(start,end,stepsize=2){
    for(let i=start;i<=end;i+=stepsize){
        yield i;
    }
}

const teo=makeMyIteratorNew2(90,100,2); //will pass parameter

for(const val of teo){
    console.log(val); //will print 70 to 80 on log
}





// So, for loop is just executing things and end the loop.

// But, while using generator function , you can make it customizable loop which is not getting ended after execution.(and so it shows undefined after loop ended)
// so, you can choose yr iteration steps by making it.

//you can make button and until the end number it will change the value and then became undefined.
function* makeMyIteratorNew3(start,end,stepsize=1){
    for(let i=start;i<=end;i+=stepsize){
        yield i;
    }
}


const btn=document.getElementById("next-btn");
let two=makeMyIteratorNew3(1,20,1);


btn.addEventListener("click",()=>{
    btn.innerText=two.next().value;

});

