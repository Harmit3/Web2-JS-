let currentPlayer="X";
let array=Array(9).fill(null);

//logic for which player wins

//if you have same sign in [0,1,2   3,4,5   6,7,8] index
//or          same sign in [0,3,6   1,4,7   2,5,8] index 
//or          same sign in [0,4,8   2,4,6]         index               
function checkWinner(){

    //don't take much time when any one is winner so use iife 
// array[0] array[1] array[2] array[3] array[4] array[5] array[6] array[7] array[8]
    if( 
        (array[0] !==null && array[0]==array[1] && array[1]==array[2]) ||
        (array[3] !==null && array[3]==array[4] && array[4]==array[5]) ||
        (array[6] !==null && array[6]==array[7] && array[7]==array[8]) ||
        (array[0] !==null && array[0]==array[3] && array[3]==array[6]) ||
        (array[1] !==null && array[1]==array[4] && array[4]==array[7]) ||
        (array[2] !==null && array[2]==array[5] && array[5]==array[8]) ||
        (array[0] !==null && array[0]==array[4] && array[4]==array[8]) ||
        (array[2] !==null && array[2]==array[4] && array[4]==array[6])
    ){
            document.write(`Winner is ${currentPlayer}`)
            return;
        }
    
  if(!array.some((e)=>e===null)){
    document.write(`Draw!!`);
    return;
  }
}


function handleClick(el){

   
    const id=Number(el.id);
     if(array[id]!==null) return; //will not override that box by user
    array[id]=currentPlayer;
    el.innerText=currentPlayer;
    checkWinner();
    currentPlayer=currentPlayer==="X" ? "O" : "X";  //if currentPlayer is currentPlayer(X) then do O otherwise X
   // console.log(array);
}