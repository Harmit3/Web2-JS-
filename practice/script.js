
let number=18;

let guess=0;

do{
  
   guess=parseInt(prompt('Guess a number between 1 to 100'));
    if(guess==number){
           alert('You won!!');
            break;
    }

}while(guess!=0);