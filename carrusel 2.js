function activarMiCarrusel(idCarrusel, tiempo) {
    /*var carrusel = $('#' + idCarrusel);
    carrusel.css('display', 'none');
    var i = 0;
    carrusel.eq(i).css('display', 'block');
    setInterval(function() {
        carrusel.eq(i).css('display', 'none');
        i = (i + 1) % carrusel.length;
        carrusel.eq(i).css('display', 'block');
    }, tiempo);*/


    //console.log(idCarrusel);
    var carrusel = $('#' + idCarrusel);
    //carrusel.css('display', 'none');
    var i = 1;
    var imagenes = carrusel.children('img');
    //console.log(imagenes.lenght);
    //console.log(imagenes);
    for (i = 0;i < imagenes.length;i++){
        imagenes[i].style='display: none;';
    }


    //carrusel.style='display: none;';
    i=0;
    imagenes[i].style='display: block;';
    setInterval(function() {
        imagenes[i].style='display: none;';
        i = (i + 1) % imagenes.length;
        imagenes[i].style='display: block;';
    }, tiempo);
    //carrusel.eq(i).css('display', 'block');
    /*setInterval(function() {
        carrusel.eq(i).css('display', 'none');
        i = (i + 1) % carrusel.length;
        carrusel.eq(i).css('display', 'block');
    }, tiempo);*/
}