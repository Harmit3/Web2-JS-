const array=[1,2,3,4];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

const names=['Harmit','Dignesh','Anant','Hitarth','Inder','Zaman','Danial','Preet'];
console.log(names.length);

names[0]='Harmit Patel';   //you can reinitialize the values in array while using const ,
                          // but you can not redefined it. (mutation is possible in array).
console.log(names[0]);


 //push ------> multiple values in the end
names.push('sara'); 
console.log(names);

//in another language like c/c++/swift arrayas are homoginious (same kinda) but here in js
//arrays are HETROGENOUS (can have any thing in array like boolean,number,float,string,array,emoji etc.)
const myArray=[1,true,'Harmit','16.6',{name:'Harmit Patel, Popi Patel'}];
console.log(myArray);


//indexOf------> can pass the value to find on which index
console.log(myArray.indexOf('Harmit'));   //if not exists then it will return -1

//pop ------> take out the element from the array
names.pop('Sara');
console.log(names);
names.pop('Sara');   //can put anything or leave it blank while pop it but pop lastr element
console.log(names);
names.pop('Sara');
console.log(names);

//reverse() ------> will reverse the array
names.reverse();
console.log(names);


/***********************************************************************************************************************************************************************************************/
/***********************************************************************************************************************************************************************************************/
/*************************************************                       Arrays high order functions         ***********************************************************************************/
/***********************************************************************************************************************************************************************************************/
/***********************************************************************************************************************************************************************************************/




//.forEach()  --------->  is a high order function because it takes function(callback) as an argument
const students=['Harmit','Dignesh','Anant','Hitarth','Inder','Zaman','Danial','Preet'];
function print(n){
    console.log(n);
}
students.forEach(print);   //will print the all values from the arrays
//you can also write down like this  ******students.forEach((val)=>console.log(val))******

console.log("\n");

//.map()  --------> will print the same values like .forEach() but the diffrence is .map() is returning a new array
//while forEach() is not returning anything (see eg. below)

students.map((val)=>console.log(val));


//for eg:- you have an array called numbers and you need to make a new array with double that number
const numbers=[1,2,3,4,5,6,7];       

//numbers.forEach((val)=>console.log(val*2)));   this will print but you need to make an new array for that you need to make new array and push the element in that
let newArray=[];
numbers.forEach((val)=>console.log(newArray.push(val*2)));  
console.log(newArray);    //and this will print a new array


//we can also do it short form like
function double(n){
    return n*2;
}
let newArray1=numbers.forEach(double);  
console.log(newArray1);    //this will give 'undefined' as an answer because forEach doesn't return anything
                          //you can done anytask in forEach but you can't make any print out of that


//if we do instead .map() then we will get an array in the console
// so map() does loop on array and return a new array
let newArray2=numbers.map(double);  
console.log(newArray2);



// in short, .map() is returning the new array as it takes cb function and manipulate the entire array while
// forEach is useful to print each element and perform any operation on any element of an array
// and doesn't return anything






//find() ----->  if you want to find something in an array and also it takes callback function
//find will goes on every number and return number. And by that return number you can do any thing with it
//if you will do return true; then it will return that.

const numbers1=[1,2,3,4,5,6,7,8,9,10];  
let ans=numbers1.find(num=>num === 4);   //here if we have (num=>num === 2*2) will also return 4
console.log(ans); //will return 4

//if we don't have 4 and have  something like this
const numbers2=[1,2,3,40,5,6,7,8,9,10];  
let ans2=numbers2.find(num=>num === 4);  
console.log(ans2);  // will return undefined



//findIndex()  --------> will return the index number of particular element
const numbers3=[1,2,3,4,5,6,7,8,9,10];  
let ans3=numbers3.findIndex(num=>num === 4);   //if found return index otherwise -1
//               always need a callback function,if you just enter number then will get an error
console.log(ans3); 





//includes() ---------> return the boolean value
const numbers4=[1,2,3,4,5,6,7,8,9,10];  
let ans4=numbers4.includes(4);     //if we have that value then it will return true otherwise false
console.log(ans4); 


//filter() -----------> will filter the array
const numbers5=[1,2,3,4,5,6,7,8,9,10];  
let ans5=numbers5.filter(num=>num%2==0);   
console.log(ans5);    // will return even number's new array


//slice()  -----------> when we need sub array of the orginal array then we can slice the array
const numbers6=[1,2,3,4,5,6,7,8,9,10];  
let ans6=numbers6.slice(1,5);    //slice(2,3,4,5) [start index,end index)----->print this part
console.log(ans6);


//splice() -----------> remove the lements from the array
const numbers7=[1,2,3,4,5,6,7,8,9,10];  
let ans7=numbers7.splice(1,5);       //splice(1,5) [start index,to go ahead till index 5 from start index]----->remove this part
console.log(ans7);
//but if we will console.log number7 then it will print [1,7,8,9,10]
console.log(numbers7);



