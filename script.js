var textarea = document.getElementById('write');
var encrypt = document.getElementById('encrypt');
var decrypt = document.getElementById('decrypt');
var noMessage = document.getElementById('no-message');
var text2 = document.getElementById('text2');
textarea.addEventListener('keydown',autosize);
encrypt.onclick = encriptar;
var nuevoMensaje = [];

function autosize(){
    var el = this;
    setTimeout(function(){
        el.style.cssText = 'height:auto;padding:0';
        el.style.cssText = 'height:' + el.scrollHeight+ 'px';
    },0)
}
function comprobarMayusculaYAcento(){
    var textoEncriptar = textarea.value;
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
    for(var i= 0;i<textarea.value.length;i++){
        nuevoMensaje.push(textarea.value.charAt(i));
    }
    if(comprobarMayusculaYAcento()){
        textarea.value = "";
        textarea.focus();
    }else{
        for(var i= 0; i<textarea.value.length;i++){
            switch(textarea.value.charAt(i)){
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
    noMessage.innerHTML = nuevoMensaje;
}
