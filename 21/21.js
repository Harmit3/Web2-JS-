/* We can take(fetch) user's current location and use it to get ionformation about that location.*/
const button = document.getElementById('get-location-button');
const print=document.getElementById('print');
button.addEventListener('click', async () => {         //here,we need to fetch location of user which will take time(async. task), so need to use promises (await,async).
    //here, in js, we already have pre-built js object called navigator to get location with lots of pre-built functions like geolocation,also use getCurrentPosition with it with 2 callbacks(what happen if all good called **suceess callback**,
    // what happen if get error  **error callback**)
    //const result=navigator.geolocation.getCurrentPosition(() => {success callback }, () => { error callback }); 
    //or you can pass the function of both callbacks, const result=navigator.geolocation.getCurrentPosition( getLocation,failedToGetLocation}); 


    /*This is last video's data but chnage the lat,long info and return result from api*/
    async function getData(lat, long) {
        const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=30c20826b8ad4d42843221819250204&q=${lat},${long}&aqi=yes`);
        return await promise.json();
    }

    async function getLocation(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

         await getData(lat,long)
                .then(result=>{
                    const city=result.location.name;
                    const region=result.location.region;
                    const country=result.location.country;
                    print.innerText=`City:${city}\n Region:${region}\n Country:${country}`
                })
                .catch(error=>{print.innerText='Failed to fetch location data.'});
       
        //console.log(position);     //this will console curtrent position cordinates like (long.,latti.,timestamp....),& by using this, we can fetch current position's info like weather.....
    }

    function failedToGetLocation() {
        console.log("There was an error to fetch location.");  //when you refresh and says block/never allowed then it will print this in console.
    }

    navigator.geolocation.getCurrentPosition(getLocation, failedToGetLocation);  //will show suceess calback or failed callback
   

    
});