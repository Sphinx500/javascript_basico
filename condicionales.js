var esUsuario = true; 

if(esUsuario) {  // con el if validamos que la condición sea true
    console.log('Tiene acceso al contenido'); 
}

// Presentamos el else 

var esUsuario = false; 

if(esUsuario) {
    console.log('Tiene acceso al contenido'); 
} else {
    console.log('Tienes que crear una cuenta para poder acceder al contenido');
}

// Ejemplo de cómo haríamos una validación

var edad = 18; 
var accion; 

if(edad >= 18) {
    accion = 'Puede votar'
} else { // call back 
    accion = 'No puede votar'
}

console.log(accion);

// Ejemplo de cómo utilizaremos el else if

var edad = 18; 
var accion;  

if(edad === 18) {
    accion = 'Puede votar, será su 1ra votación'
} else if(edad > 18) { 
    accion = 'Puede votar'
} else { // call back 
    accion = 'Aun no puede votar'
}

console.log(accion);



/* ================================================================ */ 

// Operador ternario 

var numero = 1; 
var resultado; 

if(numero === 1) {
    resultado = 'Sí son un 1'; 
} else {
    resultado = 'No soy un 1'; 
}

condition ? true : false; 

var numero = 1; 
var resultado = numero === 1 ? 'Sí son un 1' : 'No soy un 1';

console.log(resultado);


//EJERCICIO PIEDRA PAPEL TIJERA
/* ================================================================ */ 
var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";
var lagarto = "lagarto";
var spock = "spock";


var game = function (user, pc) {
    if (
        (user === tijera && pc === papel) ||
        (user === papel && pc === piedra) ||
        (user === piedra && pc === lagarto) ||
        (user === lagarto && pc === spock) ||
        (user === spock && pc === tijera) ||
        (user === tijera && pc === lagarto) ||
        (user === lagarto && pc === papel) ||
        (user === papel && pc === spock) ||
        (user === spock && pc === piedra) ||
        (user === piedra && pc === tijera)
    ) {
        console.log("Ganaste con " + user + " y Pc perdio con " + pc);
    } else if (user === pc) {
        console.log("Empate con " + user + " y Pc perdio con " + pc);
    } else {
        console.log("Pediste con " + user + " y Pc perdio con " + pc);
    }

}
//game(user, pc)
game(tijera, lagarto) // tijera decapita lagarto por lo que user gana

