// Zona segura
document.addEventListener("DOMContentLoaded", function() {
    
    //console.log(document);
    //debugger;

    //vaciado del body
    //document.body.innerHTML = null;

    // Ejecutar/invocar una funcion
    //saludo("Rosita", "eme'emina cheve 5000 p/batalla", 69);

    // camelCase
    const parrafoCambiante = document.getElementById('parrafo-cambiante-1');
    parrafoCambiante.innerText = "Ahorrar es importante"
    
    // poniendo el evento clic
    const btnCambiador = document.getElementById('btn-cambiador');
    btnCambiador.addEventListener('click', function() {
        
        const colorActual = parrafoCambiante.style.color
        parrafoCambiante.style.color = isCambiador(colorActual);
        //console.log(parrafoCambiante.style.color);

    });

});

function isCambiador(color) {

    if ( color === 'red' ) {
        return 'blue';
    }
    return 'red';

}

function saludo(nombre, mensaje, edad) {
    console.log(`Hola ${nombre}, ${mensaje}, edad ${edad}`);
}