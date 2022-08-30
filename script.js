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

//funcion para que el textarea aumente su tamaño de manera automatica, cada vez que de un salto de linea.
function autosize(){
    var el = this;
    setTimeout(function(){
        el.style.cssText = 'height:auto;padding:0';
        el.style.cssText = 'height:' + el.scrollHeight+ 'px';
    },0)
}

//funcion para que la etiqueta p donde se muestra el mensaje encriptado o desencriptado, aumente de manera automatica su tamaño.
window.addEventListener("DOMContentLoaded", () => {
    noMessage.forEach((elemento) => {
      elemento.style.height = '${elemento.scrollHeight}px'
    })
  })

//función donde se compueba si el texto dado como parametro tiene algún acento.Se están usando expresiones regulares para comprobar esto.
function comprobarAcento(textoEncriptar){
    var comprobacion = false;
    for(var i=0;i<textoEncriptar.length;i++){
        if(/[áéíóú]/.test(textoEncriptar.charAt(i))){
            comprobacion = true;
            break;
        }   
    }
    return comprobacion;
}

//funcion donde cada palabra que sea introducida por el usuario es metida dentro de un array.
function mensajeEnArray(){
    var texto = textarea.value.toLowerCase();
    var mensaje = [];
    for(var i= 0;i<texto.length;i++){
        mensaje.push(texto.charAt(i));
    }
    return mensaje;
}

//esta funcion muestra el mensaje que sea dado por parametro en la seccion del lado derecho de la pantalla, junto con el botón copiar.
function mostrarMensaje(mensaje){
    mensaje = mensaje.join("");
    mensaje = mensaje.toString();
    mensaje = mensaje.toLowerCase();
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


function encriptar(){
     var mensajeEncriptado = mensajeEnArray();
     var texto = textarea.value.toLowerCase();
    if(comprobarAcento(texto)){
        textarea.focus();
        noMessage.innerHTML = "Sólo ingrese letras sin acentos.<br>Intente de nuevo";
        noMessage.style.fontSize = '20px';
        noMessage.style.fontWeight ='700';
        noMessage.style.height='auto'
        copy.style.display = 'none';
        textarea.value = "";
    }else{
        //con este for se pretende buscar en cada posición del array si alguna palabra coincide y cambiarla en los caso que sea true.
        for(var i= 0; i<texto.length;i++){ 
            switch(texto.charAt(i)){
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


//esta funcion esta hecha para el botón copiar, que cumple con la tarea de copiar lo que esté escrito en la sección derecha.
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
        //con este if verificamos que aún quede min una posición el if para recorrer, y que exista la posibilidad que la palabra "ai" este ahí.
        if(i<(textarea.value.length-1)){ 
            if(mensajeDesencriptado[i]=="a" && mensajeDesencriptado[i+1]=="i"){
                mensajeDesencriptado.splice(i+1,1);
            }    
        }
        //Verificamos que queden min 3 posiciones en el array, para que exista la pobilidad que la expresion(que tiene 4 letras) esté ahí.
        //Se ponen -3 y no -4, porque el < es exclusivo.
        if(i<(textarea.value.length-3)){
            if((mensajeDesencriptado[i]=="i" && mensajeDesencriptado[i+1]=="m") && (mensajeDesencriptado[i+2]=="e" && mensajeDesencriptado[i+3]=="s")){
                mensajeDesencriptado.splice(i+1,3);
            }else if((mensajeDesencriptado[i]=="o" && mensajeDesencriptado[i+1]=="b") && (mensajeDesencriptado[i+2]=="e" && mensajeDesencriptado[i+3]=="r")){
                mensajeDesencriptado.splice(i+1,3);
            }else if((mensajeDesencriptado[i]=="u" && mensajeDesencriptado[i+1]=="f") && (mensajeDesencriptado[i+2]=="a" && mensajeDesencriptado[i+3]=="t")){
                mensajeDesencriptado.splice(i+1,3);
            }
        }
        //Verificamos que queden min 4 posiciones en el array.
        if(i<(textarea.value.length-4)){
            if(((mensajeDesencriptado[i]=="e" && mensajeDesencriptado[i+1]=="n") && (mensajeDesencriptado[i+2]=="t" && mensajeDesencriptado[i+3]=="e")) && mensajeDesencriptado[i+4]=="r"){
                mensajeDesencriptado.splice(i+1,4);
            }
        }
    }
    mostrarMensaje(mensajeDesencriptado);
    
}
    


