/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/** Called when browser load this page*/
function init(){
   document.addEventListener("deviceready", onDeviceReady, false);
}

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
    //checkConnection();
}
function checkConnection() 
{
    var networkState = navigator.network.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Conexión desconocida';
    states[Connection.ETHERNET] = 'Conexión ethernet';
    states[Connection.WIFI]     = 'Conexión WiFi';
    states[Connection.CELL_2G]  = 'Conexión movil 2G';
    states[Connection.CELL_3G]  = 'Conexión movil 3G';
    states[Connection.CELL_4G]  = 'Conexión movil 4G';
    states[Connection.NONE]     = 'Sin conexión';

    alert('Tipo de conexión: ' + states[networkState]);
}