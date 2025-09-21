//console.log("Test purpose");

const input=document.getElementById("number-input");
const result=document.getElementById("result");

function handleClickButton(el){
    console.log(el.innerText);
    const expresion=`${input.value}${el.innerText}`;
    input.value=expresion;
    if(["+","-","*","/"].includes(el.innerText)) return;   //this things will not throw an error because it will try to evaluate things when it is "8+" and so it throews and error
    //so what we did is if it includes any signs includes in array it will make return the function and you won't get error 
    result.value=eval(expresion);  //js has already a eval() method to evaluate math expressions. It will also apply BODMAS rule

}

//reset(0 will be clearout the stuff when clear clicked
function reset(){
  input.value="";
  result.value="";
}