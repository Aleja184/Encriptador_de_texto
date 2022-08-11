var textarea = document.querySelector('textarea');
var write = document.getElementById('write');
var encrypt = document.getElementById('encrypt');
var decrypt = document.getElementById('decrypt');
var noMessage = document.getElementById('no-message');
var text2 = document.getElementById('text2');
textarea.addEventListener('keydown',autosize);
encrypt.onclick = encriptar;


function autosize(){
    var el = this;
    setTimeout(function(){
        el.style.cssText = 'height:auto;padding:0';
        el.style.cssText = 'height:' + el.scrollHeight+ 'px';
    },0)
}
function comprobarMayusculaYAcento(){
    var textoEncriptar = write.value;
    var comprobacion = false;
    for(var i=0;i<textoEncriptar.length;i++){
        if((textoEncriptar.charCodeAt(i)>=65 && textoEncriptar.charCodeAt(i)<=90) || (/[áéíóú]/.test(textoEncriptar.charAt(i)))){
            comprobacion = true;
            break;
        }
    }
    return comprobacion;
}

function encriptar(){
    var nuevoMensaje = [];
    for(var i= 0;i<write.value.length;i++){
        nuevoMensaje.push(write.value.charAt(i));
    }
    if(comprobarMayusculaYAcento()){
        write.value = "";
        write.focus();
    }else{
        for(var i= 0; i<write.value.length;i++){
            switch(write.value.charAt(i)){
                case "a":
                    nuevoMensaje[i]="ai";
                break;
                
                case "e":
                    nuevoMensaje[i] = "enter";
                break;
                
                case "i":
                    nuevoMensaje[i] = "imes";
                break;

                case "o":
                    nuevoMensaje[i] = "ober";
                break;

                case "u":
                    nuevoMensaje[i] = "ufat";
                break;
            }
        }
    }
    nuevoMensaje = nuevoMensaje.join("");
    nuevoMensaje = nuevoMensaje.toString();
    noMessage.style.fontSize = "24px";
    noMessage.style.fontWeight = "400";
    noMessage.style.color = "#495057";
    noMessage.value = nuevoMensaje;
}
noMessage.addEventListener('keydown',autosize);
