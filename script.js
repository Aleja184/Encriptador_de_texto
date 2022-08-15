var textarea = document.getElementById('write');
var encrypt = document.getElementById('encrypt');
var decrypt = document.getElementById('decrypt');
var noMessage = document.getElementById('no-message');
var text = document.getElementById('text2');
textarea.addEventListener('keydown',autosize);
encrypt.onclick = encriptar;
var copy = document.getElementById('copy');
copy.onclick = copiar;
decrypt.onclick = desencriptar;

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
    var nuevoMensaje = [];
    for(var i= 0;i<textarea.value.length;i++){
        nuevoMensaje.push(textarea.value.charAt(i));
    }
    if(comprobarMayusculaYAcento()){
        textarea.focus();
        noMessage.innerHTML = "Sólo ingrese letras minúsculas y sin acentos.<br>Intente de nuevo";
        noMessage.style.fontSize = '20px';
        noMessage.style.fontWeight ='700';
        copy.style.display = 'none';
        textarea.value = "";
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
        
        nuevoMensaje = nuevoMensaje.join("");
        nuevoMensaje = nuevoMensaje.toString();
        noMessage.style.fontSize = '20px';
        noMessage.style.width = '263px';
        noMessage.style.height ='auto';
        noMessage.style.wordBreak ='break-all';
        noMessage.style.width='100%';
        noMessage.style.textAlign = 'center';
        noMessage.innerHTML = nuevoMensaje;
        text.style.visibility = 'hidden';
        text.style.position = 'absolute';
        copy.style.display = 'block';
        textarea.value = '';
    }
   
    
}
function copiar(){
    var seleccion = document.createRange();
    seleccion.selectNodeContents(noMessage);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
}

function desencriptar(){
    var mensajeDesencriptado = [];
    for(var i= 0; i<textarea.value.length;i++){
        mensajeDesencriptado.push(textarea.value.charAt(i));
    }
    for(var i = 0;i<textarea.value.length;i++){
        if(i<(textarea.value.length-1)){
            if(mensajeDesencriptado[i]=="a" && mensajeDesencriptado[i+1]=="i"){
                mensajeDesencriptado.splice(i+1,1);
            }    
        }
        if(i<(textarea.value.length-3)){
            if((mensajeDesencriptado[i]=="i" && mensajeDesencriptado[i+1]=="m") && (mensajeDesencriptado[i+2]=="e" && mensajeDesencriptado[i+3]=="s")){
                mensajeDesencriptado.splice(i+1,3);
            }else if((mensajeDesencriptado[i]=="o" && mensajeDesencriptado[i+1]=="b") && (mensajeDesencriptado[i+2]=="e" && mensajeDesencriptado[i+3]=="r")){
                mensajeDesencriptado.splice(i+1,3);
            }else if((mensajeDesencriptado[i]=="u" && mensajeDesencriptado[i+1]=="f") && (mensajeDesencriptado[i+2]=="a" && mensajeDesencriptado[i+3]=="t")){
                mensajeDesencriptado.splice(i+1,3);
            }
        }
        if(i<(textarea.value.length-4)){
            if(((mensajeDesencriptado[i]=="e" && mensajeDesencriptado[i+1]=="n") && (mensajeDesencriptado[i+2]=="t" && mensajeDesencriptado[i+3]=="e")) && mensajeDesencriptado[i+4]=="r"){
                mensajeDesencriptado.splice(i+1,4);
            }
        }
    }
    mensajeDesencriptado = mensajeDesencriptado.join("");
    mensajeDesencriptado = mensajeDesencriptado.toString();
    noMessage.style.fontSize = '20px';
    noMessage.style.width = '263px';
    noMessage.style.height ='auto';
    noMessage.style.wordBreak ='break-all';
    noMessage.style.width='100%';
    noMessage.style.textAlign = 'center';
    noMessage.innerHTML = mensajeDesencriptado;
    text.style.visibility = 'hidden';
    text.style.position = 'absolute';
    copy.style.display = 'block';
    textarea.value = '';
    
}
    


