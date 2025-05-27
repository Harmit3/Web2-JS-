 /*      what is local storage in js??      

        In any browser, you will get storage to store data permenently likewise user's token,name or any settings.
        You can see this storage via inspect------> Application(you can see the local storage)

            
        
        for each domain, it has its own local storage and you can't access cross domain local storage. 
        For eg. ---> here, my website/app running on the 127.0.0.1 then I can access only this application's local storage
        not any another website like facebook.com's local storage for security concerns.

        Local storage always store in key-value pair.


        For eg:- here in above code if user enter his name then we will keep it in out local storage and then say Hello xyz person,
              :- we will do it throgh localStorage in-built object in js.
              

         Local storage value isn't delete until user will not delete itself.

         
        */

         const button = document.getElementById('clickButton');
         const uname = document.getElementById('username1');
         const username=document.getElementById('username');
 
         button.addEventListener('click', () => {
             const value = uname.value;                  /*const value=uname.value;       leads to error b/c getElementById will take first username while id should be diff.   */
             localStorage.setItem('name', value);       /*here,in localStorage it will set name as key and ans as pair and remain there even you are refreshed.*/
             
             /*if we want that name on the same time when we enter in input text and press click me then got display on DOM and in storage as well then you can use window.location or location.reload*/
             location.reload(); //-------> so by this, you dont need to refresh the page manually it will do it self and run below function.
             /*if you don't do this then value will go on local storage but can't display on the DOM , but after reload it can be shown but by location.reload() it will show up without refresh*/ 
             
         });
 
       /*How can you put that local storage name in this <h4 id="nameBlock">Hey There, My name is <span id="username">Harmit Patel</span>:) </h4> shit.*/
       
       window.addEventListener('load',()=>{      //whenevr page load then local storage value should display there.
            const value=localStorage.getItem('name');  //here,you get item from local storage from key 
            username.innerText=value;
       })
        
 
       /*
         you can put whole object in localStorage during json.stringify();
 
         can put token  in local storage and get user information.
 
         Also, get boolean value to see dark or light mode

         You can make as much as you can key-value pair.
       
       */