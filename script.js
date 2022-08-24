var textarea = document.getElementById('write');
var encrypt = document.getElementById('encrypt');
var decrypt = document.getElementById('decrypt');
var noMessage = document.getElementById('no-message');
var text = document.getElementById('message-write');
textarea.addEventListener('keydown',autosize);
encrypt.onclick = encriptar;
var copy = document.getElementById('copy');
copy.onclick = copiar;
decrypt.onclick = desencriptar;
var imageMessage = document.getElementById('image-message');
function autosize(){
    var el = this;
    setTimeout(function(){
        el.style.cssText = 'height:auto;padding:0';
        el.style.cssText = 'height:' + el.scrollHeight+ 'px';
    },0)
}

window.addEventListener("DOMContentLoaded", () => {
    noMessage.forEach((elemento) => {
      elemento.style.height = '${elemento.scrollHeight}px'
    })
  })
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

function mensajeEnArray(){
    var mensaje = [];
    for(var i= 0;i<textarea.value.length;i++){
        mensaje.push(textarea.value.charAt(i));
    }
    return mensaje;
}

function encriptar(){
     var mensajeEncriptado = mensajeEnArray();
    if(comprobarMayusculaYAcento()){
        textarea.focus();
        noMessage.value = "Sólo ingrese letras minúsculas y sin acentos.<br>Intente de nuevo";
        noMessage.style.fontSize = '20px';
        noMessage.style.fontWeight ='700';
        noMessage.style.height='120px'
        copy.style.display = 'none';
        textarea.value = "";
    }else{
        for(var i= 0; i<textarea.value.length;i++){
            switch(textarea.value.charAt(i)){
                case "a":
                    mensajeEncriptado[i]="ai";
                break;
                
                case "e":
                    mensajeEncriptado[i] = "enter";
                break;
                
                case "i":
                    mensajeEncriptado[i] = "imes";
                break;

                case "o":
                    mensajeEncriptado[i] = "ober";
                break;

                case "u":
                    mensajeEncriptado[i] = "ufat";
                break;
            }
        }
        mostrarMensaje(mensajeEncriptado);
        
    }
   
    
}

function mostrarMensaje(mensaje){
        mensaje = mensaje.join("");
        mensaje = mensaje.toString();
        noMessage.style.fontSize = '20px';
        noMessage.style.width = '263px';
        noMessage.style.height ='90%';
        noMessage.style.wordBreak ='break-all';
        noMessage.style.width='100%';
        noMessage.style.textAlign = 'center';
        noMessage.style.fontFamily="'Inter', sans-serif";
        noMessage.innerHTML = mensaje;
        imageMessage.style.display = 'none';
        text.style.visibility = 'hidden';
        text.style.position = 'absolute';
        copy.style.display = 'block';
        textarea.value = '';
        textarea.style.height = '300px';
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
   var mensajeDesencriptado = mensajeEnArray();
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
    mostrarMensaje(mensajeDesencriptado);
    
}
    


