/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function onDeviceReady(){
    document.getElementById("deviceName").innerHTML
        = device.name; 
    document.getElementById("version").innerHTML
        = device.phonegap; 
    document.getElementById("mobilePlatform").innerHTML
        = device.platform; 
    document.getElementById("platformVersion").innerHTML
        = device.version; 
    document.getElementById("uuid").innerHTML
        = device.uuid;   
}
/** Called when browser load this page*/
function init(){
   document.addEventListener("deviceready", onDeviceReady, false);

}