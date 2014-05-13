/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/** Called when browser load this page*/
function init()
{
   document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady()
{

    
    
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

function callSettings()
{
    var div = document.getElementById("example1");
    
    div.style.display= 'block';
    
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

function callAlert()
{
  
}
function callback()
{
    if (true)
    {
        alert('notification OK!');
    }
}

function navigator(destination)
{
    switch(destination)
    {
    case 1:  
    {
       var ref = window.open(   encodeURI('http://www.google.es'),
                                '_blank',
                                'location=yes');
       // close InAppBrowser after 5 seconds
       setTimeout(
            function() 
            {
                ref.close();
                alert('5s');
            }, 5000);
         
         break;
    }
    case 2:
    {
        var today = new Date();
        document.getElementById("time").innerHTML    =   today; 
        
        break;
    }
    case 3:
    {
        
        navigator.notification.alert(
                'mensage',
                callback,
                'title',
                'botonOK'
                );
        break;
    }
    default:
        alert('default');
    }
    
}