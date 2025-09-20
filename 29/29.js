/*Promisification ----> is a long word for a simple transformation. It's the conversion of a function that accepts a callback into a function that returns a promise.

So, to understand this topic, we need to under stand before ES6, in ES5/ES4 how do we used to write async. tasks.

Async. tasks use to written via callbacks and high order fucntions.


*/


//write one function which can load any script without promise

        //url of script,callbcak which run script
function loadScript(src,callback){
  
    const script=document.createElement("script");  //add script element in doc
    script.src=src;  //and script source is provided by user src

    //                        error,run script
    script.onload=()=>callback(null,script);
    script.onerror=(err)=>callback(err); //print error if u got any
    document.head.appendChild(script);  //update in head of html with this src script
}

loadScript("./test.js",(err,script)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Script Loaded.");
    }
});

//Now,question is you can't change the things that's already written like above function loadScript(){} , but ,
//you can make the Promise out of it so libraries like 'fs' which only works with arrow function or callbacks can use it. 
//And, the process to make these promises out of it is called Promisification.   
//so,basically you need to make function which converts old school function to promises called Promisification.



//So,now Write a function which can convert any function into Promisification.

function promisify(fn){

    return function(...args){
        return new Promise((resolve,reject)=>{
         fn(...args,(error,result)=>{
            if(error) return reject(error);
            return resolve(result);
         });
        });

    };
}

const loadScriptNew=promisify(loadScript);
loadScriptNew('test2.js')
  .then(()=>console.log('Done'))
  .catch((err)=>console.log("Error here!!"));


// Usecase of it is, whenever you wanna use any function which is written by any another developer and if he used the callbacks, 
// you can promisify that function and then use it without callback and also prevent it from going callback hell.
