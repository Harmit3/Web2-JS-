//you can control your bluetooth device using js

//link:- https://developer.chrome.com/docs/capabilities/bluetooth

//do it For Linux and earlier versions of Windows, enable the #experimental-web-platform-features flag in about://flags.

//When a website requests access to nearby devices using navigator.bluetooth.requestDevice, the browser prompts user with a device 
//chooser where they can pick one device or cancel the request.

navigator.bluetooth.requestDevice({
    aceeptAllDevices:true
});   //request devices (either u can accept all devices or u can also use filters like do u want apple device,microsoft,amzon alexa or echo... more on documentation )


//then u get notification from topsetting on url bar and then u can pait the device and get notification in console so u can access that device via that website console

/*here's how u can get the battery percentage*/




navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
.then(device => device.gatt.connect())
.then(server => {
  // Getting Battery Service…
  return server.getPrimaryService('battery_service');
})
.then(service => {
  // Getting Battery Level Characteristic…
  return service.getCharacteristic('battery_level');
})
.then(characteristic => {
  // Reading Battery Level…
  return characteristic.readValue();
})
.then(value => {
    //printing on conole the Battery level from buffer size string
  console.log(`Battery percentage is ${value.getUint8(0)}`);
})
.catch(error => { console.error(error); }); 