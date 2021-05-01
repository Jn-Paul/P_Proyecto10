'use strict';
let deferredInstallPrompt=null;
const installButton =document.getElementById('butInstall');
installButton.addEventListener('click', installPWA);

window.addEventListener("beforeinstallprompt", saveBeforeInstallPrompEvent);



function saveBeforeInstallPrompEvent(evt){
    deferredInstallPrompt= evt;
    installButton.removeAttribute('hidden');
}

function installPWA(evt){
    deferredInstallPrompt.prompt();
    evt.srcElement.setAttribute('hidden',true);
    deferredInstallPrompt.userChoice.then((choice) =>{
        if(choice.outcome === "accepted"){
            console.log("aceptado")
        }
        else{
            console.log("No aceptado")
        }
        deferredInstallPrompt=null;
    });
}

window.addEventListener('appinstalled',logAppInstalled);

function logAppInstalled(evt){
    console.log("Game shoot app instalado",evt);
}
