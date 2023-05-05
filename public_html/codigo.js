function escribe(idInput, idSpan){ /*ReqJ21*/
    var Input = document.getElementById(idInput);
    var Span = document.getElementById(idSpan);
    
    Span.innerHTML = "(" + Input.value + ")";
}

function convertirAMayusculas(e){/*ReqJ24*/
    
    e.value=e.value.toUpperCase();
   
}

function alerta(){/*ReqJ26*/
    
    alert("No se olvide de rellenar todos los campos del formulario");
    
}

function copiarTexto(idTfTexto, idTexto){ /*ReqJ28*/
                
    var tfTexto=document.getElementById(idTfTexto);
    var texto=document.getElementById(idTexto);

    texto.innerHTML=tfTexto.value;

    texto.style.color='purple';

}

