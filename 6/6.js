//if you know how many iteration you need the use for loop

for(let i=1;i<=100;i++){
    console.log(i);
}

//sum of 1 to 10
let sum=0;
for(let i=1;i<=10;i++){
    sum=sum+i;
}
console.log(sum);





//if you don't know how many iteration you need the use while loop

let house=10;
let position=0;
while(position!=house){
    position=position+1;
    console.log('Step taken '+position);
}


//at least run at a once and check
//in while, you check condition and then print
//in do while,you print and then check the condition
let house1=10;
let position1=10;
do{
    position=position+1;
    console.log('Step taken for do while is '+position);
}while(position<=house)





