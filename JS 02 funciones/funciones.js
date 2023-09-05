//funciones
//Una funcion es un bloue de codigo que realiza una tarea especifica, cuanod se le llama
//cada funcion de js es un objeto Funcion

function saludar () {
    console.log("Hola soy una funcion");
}
saludar();

//Declarar funciones

//La palabra reservada function, que no sindica que estamos definiendo una funcion.
//El nombre de la funcion, dependiendo de la accion a realizar.
//Un par de parentesis () despues del nombre. Puede contener parametros. En este caso no tenemos ninguno.
//Seguido de un par de llaves {} para cerrar nuestro bloque de codigo.
//Dependiendo de las instrucciones dentro del cuerpo de la funcion y del proposito de la misma, se determina si la funcion retorna un valor.

// Llamamos un afuncion y le vamos a almacenar un resultado 
function suma(a,b) {
    return a + b;
}
var resultado = suma(5,3); //almacenar funcion en una variable
console.log(suma(5,3)); //funcion
//La funcion suma toma dos argumentos (a y b) y devuelve la suma de estos dos valores. Luego, llamamos a la funcion y almacenamos el resultado en la variable resultado

//Funcion que muestra un mensaje en la consola 
function sludar(nombre){
    console.log("hola," + nombre + "!");
}
//Llamamos a la funcion saludar a alguien
saludar ("Alexis"); //Imprime el saludo

//La funcion saludar toma un argumento (nombre) y muestra un mensaje en la consola. Aunque la funcion no devuelva un valor explicitamente con return, realiza una accion (mostrar un mensaje) cuando se llama.

//Hoisting para describir que las funciones son despazadas a la parte superior 
//Es fundamental en el entendimiento de la forma en que se ejecuta nestro codigo en JS, esto aplica tanto para variables como para funciones. Como tal, la traduccion de Hoisting es elevacion, a partir de aqui, su entendimiento es mucho mas intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables declaradas dentro del codigo 
// Yo puedo invocar una funcion antes de siquiera declararlo 

console.log(miVariable); //No da error, pero imprime "undefined"
var miVariable = 10;

//Scope = Alcance, hace referencia al alcance de una variable en nuestro codigo de JS.
/*
* Global: quiere decir que se puede utilizar o trabajar con una variente dentro de cualquier parte del codigo.
* var: no es tan recomendado , por el comportamiento de la variable y la poca adaptabilidad.
* let: es preferible e incluso mas seguro de utilizar porque ademas de funcionar de manera global, tmabien puede ser utilizada de manera local.
* const: se refiere, por su nombre tan intuitivo, a la palabra, constante esto quiere decir ue su valor no puede ser reasignado.
*/

//Variable local
function funcionConVariableLocal(){
    var mensaje="Esta es una variable local";
    console.log(mensaje);
}
//funcionConVariableLocal();
//var mensaje="holis";
//console.log(mensaje);

//En este ejemplo, la variable mensaje se declara dentro de la funcion funcionConVariableLocal. Es una variable local porque solo es accesible dentro del ambito de esta funcion. obtendremos un error 


//Variable Global
var mesnajeGlobla= "Esta es una variable global"

function funcionConVariableGlobal (){
    console.log (mesnajeGlobla);
}
funcionConVariableGlobal();//la estamos llamando 

//Es este ejemplo, la variable mensajeGlobal se declara fuera de cualquier funcion, lo que se convierte en una variable global. Esto significa que es accesible desde cualquier parte del codigo, tanto dentro como fuera de la funcion funcionConVariableGlobal.

//////////////////////////
///Funciones anonimas////
////////////////////////

//Estas funciones pueden ser declaradas sin un nombre y luego asigandas a variables o pasarse como parametros en otras funciones.
//La diferencia principal de estas funciones es que se declaran sin un nombre.

/*function (){
    console.log("Hola vida"); //funcion anonima
}*/
const saludo = function (){
    console.log ("Hola vida");
}
saludo();

//funciones flecha

/**
 * Una forma mas concisa de definir funciones anonimas, se le llama flecha debido a su sintaxis que utiliza (=>)
 * Basicamente se trata de remplazar la palabra function y añadir nuestra funcion => antes de abrir nuestras llaves 
 */
const resta = (a,b) => a - b;
//esta funcion flecha es una forma mas corta de : const resta = function (a,b){
    //return a - b;
//}
console.log (resta(5,3));

/**
 * 
 */