//Declarativas

function miFuncion() {
    return 3;
}
miFuncion();

//Expresion

var miFuncion = function(a,b){
    return a + b;
}

miFuncion();


//EJEMPLO

function saludar(estudiante){
    console.log('Hola ${estudiante}');
}

function suma(a,b){
    var resultado = a + b;
    console.log(resultado);
}