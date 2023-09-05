//Funciones
//Programa para hacer limonada

function exprimirLimones(cantidad){
    console.log ("Exprimiendo" + cantidad + "limones.");
    let jugoExtraido = cantidad  *10; //Considerando obtener 10 ml de jugo por cada limon 
    console.log ("Se obtuvo " + jugoExtraido + "ml de jugo de limon.");
    return jugoExtraido; //return
}

//funcion para mezclar el jugo de limon con agua y azucar 
function mezclarJugoDeLimon (cantidadDeJugo, cantidadDeAgua, cantidadDeAzucar){
    console.log ("Mezclando" + cantidadDeJugo + "ml de jugo de limon con" + cantidadDeAgua + "ml de agua" + cantidadDeAzucar + "gramos de azucar");
}
//funcion para servir la limonada 
function servirLimonada (){
    console.log ("Sirviendo la limonada en un vaso")
    vasoDeLimonada = true;
}
//funcion principal que prepare mi limonada 
function prepararLimonada(cantidadDeLimones){
    let jugoDeLimon=exprimirLimones(cantidadDeLimones);
    mezclarJugoDeLimon(jugoDeLimon, 200, 10);//cantidades ficticias de jugo de limon,de agua y de azucar 
    servirLimonada();
}
//llamamos a la funcion principal para que prepare la limonada 
var vasoDeLimonada = false;
prepararLimonada(5)//llamando al programa 