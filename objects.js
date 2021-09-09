// Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.

var objecto = {}; // Object Literal Syntax 

var miAuto = {
    marca: "Toyota",  // key - value 
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
      return `Auto ${this.modelo} ${this.annio}`;
  }
};

miAuto.annio 
miAuto.modelo 

miAuto.detallesDelAuto(); 


// Función constructora 

function auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio;
}

var newAuto = new auto("Tesla", "Model 3", 2020);


//RECORRIENDO ARRAYS

var articulos = [
  {nombre: "Bici", costo:3000},
  {nombre: "TV", costo:2500},
  {nombre: "Libro", costo:320},
  {nombre: "Celular", costo:10000},
  {nombre: "Laptop", costo:20000},
  {nombre: "Audifonos", costo:1700},
];

var ArticulosFiltrados = articulos.filter(function(articulo){
  return articulo.costo <=500
});

var nombreArticulos = articulos.map(function(articulo){
  return articulo.nombre
});

var findArticulos = articulos.find(function(articulo){
  return articulo.nombre == "Laptop"
});

articulos.forEach(function(articulo){
  console.log(articulo.nombre)
});

var articulosBaratos = articulos.some(function(articulo){
  return articulo.costo<=700;
});