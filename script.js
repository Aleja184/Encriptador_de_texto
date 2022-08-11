var textarea = document.getElementById('write');
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
    var textoEncriptar = textarea.value;
    alert(comprobarMayusculaYAcento())
}

