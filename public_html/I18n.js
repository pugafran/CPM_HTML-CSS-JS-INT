
function preciobroker(d, e){ /*ReqI12*/
    
    var NBroker = document.getElementById(d);
    var PBroker = document.getElementById(e);
    
    var preciobroker = NBroker.valueAsNumber*0.10;
    
    if(!isNaN(preciobroker))
        PBroker.innerHTML= currencyFormat.format(preciobroker); /*ReqI14*/
}

function calcula(a, b, c){ /*ReqI12*/
    
    var NumTokens = document.getElementById(a);
    var Prec = document.getElementById(b);
    var PMP = document.getElementById(c);
    
    var preciomedioEWT = Prec.valueAsNumber/NumTokens.valueAsNumber;
    
    if(!isNaN(preciomedioEWT))
        PMP.innerHTML= numberFormat.format(preciomedioEWT); /*ReqI13*/
}


function fechaestimadalarga(f, g){ /*ReqI12*/
    
    var Fecha = document.getElementById(f);
    var FEL = document.getElementById(g);
    
    var fechestimlarga = new Date(Fecha.valueAsDate);
    var dias=1;
    fechestimlarga.setDate(fechestimlarga.getDate()+dias);
    
    FEL.innerHTML= dateFormatLong.format(fechestimlarga); /*ReqI16*/
    
}


function fechaestimadacorta(f, h){ /*ReqI12*/
    
    var Fecha = document.getElementById(f);
    var FES = document.getElementById(h);
    
    var fechestimcorta = new Date(Fecha.valueAsDate);
    var dias=1;
    fechestimcorta.setDate(fechestimcorta.getDate()+dias);
    
    FES.innerHTML= dateFormatShort.format(fechestimcorta); /*ReqI15*/
    
}