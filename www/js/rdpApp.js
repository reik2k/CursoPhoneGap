/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/** Called when browser load this page*/

function init()
{
    var table = document.getElementById('example1');
    document.addEventListener("deviceready",onDeviceReady, false);
    
    table.style.display = 'block';
}
function onDeviceReady()
{
   
}
function navigator(destination)
{
    switch(destination)
    {
    case 1:  
    {
       // close InAppBrowser after 5 seconds
       setTimeout(
            function() 
            {
                var ref = window.open(      encodeURI('http://www.google.es'),
                                            '_blank',
                                            'location=yes');
                ref.close();
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
        
        
        break;
    }
    default:
        alert('default');
    }
    
}
function callAlert()
{
  navigator.notification.alert(
                'mensage',
                callback,
                'title',
                'botonOK'
                );
}
function callback()
{
    if (true)
    {
        alert('notification OK!');
    }
}