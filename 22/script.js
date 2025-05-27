const stop=document.getElementById('stop-btn');


function showTime(){
    const currentTime=new Date();      //there is in built object of Date() in js which will let you print the current time.But, it's hard to read.
    //just to print hours,minute and seconds from that do below thing
    const time=`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;      //it already has pre-built fuinction of getHours() and by that we get hours,minutes,seconds respectively.
    console.log(currentTime);
    console.log(time); 
    document.getElementById('Time').innerText=time;        //so, it will print the current time but it will not change each second, it will only change while we refresh the page


   /***************************************************************************************************************************************************************************************************************************
    ***************************************************************************************************************************************************************************************************************************       
    So, to make a clock and keep changing the time or to show up current time on the display we need to see functions like setTimeout and setInterval
    Usually, setTimeout and setIntervaal bith need 2 arguments like what you want to show on the screen and at which span of time in milliSeconds  (1 sec=1000 ms).

    setTimeout(()=>console.log("Hi"),5000);            ------------------> this will print Hi on the console after 5 sec. only a once.
    setInterval(()=>console.log("Hi"),5000);           ------------------> this will print Hi on the console after 5 sec. everytime.


    So,over here, what can we do is put 1000(1 sec.) in time function which will change every second and fetch the data/
    ***************************************************************************************************************************************************************************************************************************
    ***************************************************************************************************************************************************************************************************************************/ 

    
}

const interval=setInterval(showTime,1000);        //this will take time from showTime and each second it will refresh on the screen.


/**************************************************************************************************************************************************************************************************************************
  How to stop Interval because whenever page loads setInterval will call every time span which is given and to stop that we use varible and there is already pre-built clearInterval function with parameter to stop 
  the call of setInterval every time.
***************************************************************************************************************************************************************************************************************************/ 
stop.addEventListener('click',()=>{
   
    clearInterval(interval);                   //---------------------------> This is how you clear the  interval.
});





