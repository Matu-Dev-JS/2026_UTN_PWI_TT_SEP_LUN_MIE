/* 
Objetos
Arrays
    metodos de array
    for of (iteracion sobre arrays)
*/


/* 
Un objeto es un tipo de dato que nos permite describir en propiedades algo
EJ
Un pais tiene nombre, continente, cant de habitantes

Las propiedades de un objeto pueden guardar cualquier tipo de dato
Un objeto puede tener infinitas propiedades
*/

let pais = {
    nombre: 'Argentina',
    continente: "America del Sur",
    'cant habitantes': 50000000,
    codigo: 'AR',
    capital: {
        nombre: "Ciudad autonoma de buenos aires",
        cant_habitantes: 6000000
    },
    calcularIva: function (precio) {
        return precio * 0.21
    }
}

let propiedad_buscada = 'nombre' //prompt('Ingresa la propiedad buscada')
//console.log("La propiedad " + propiedad_buscada + ' vale ' + pais[propiedad_buscada])


//Notacion de puntos
//console.log("El nombre del pais es " + pais.cant habitantes)

//Notacion de corchetes
/* console.log('El continente del pais es ' + pais.continente) */

let persona = {
    'D.N.I': 55555555,
    "nombre completo": "Perez Alonso",
    "domicilio declarado": 'Av siempre viva'
}

function formatPersona(persona_orginal) {
    return {
        dni: persona_orginal['D.N.I'],
        nombre_completo: persona_orginal['nombre completo'],
        domicilio: persona_orginal['domicilio declarado']
    }
}

/* 
Crear 3 objeto producto con las propiedades
titulo: string
precio: number 
id: number
descripcion: string
descuento: number

Los datos son a eleccion.
*/
/* 
let producto_1 = {
    id: 1,
    titulo: 'Grandote guaymayen',
    precio: 800,
    descripcion: 'Alfajor Grandote de Guaymayen',
    descuento: 15
}

let carne =
{
    titulo: "Carne",
    precio: 5500,
    id: 2,
    descripcion: "pedazo de carne vacuna",
    descuento: 0
};

function crearProducto(titulo, producto, id, descripcion, descuento) {
    let producto_generado = {
        titulo: titulo,
        producto: producto,
        id: id,
        descripcion: descripcion,
        descuento: descuento
    }

    return producto_generado
}
let sal = crearProducto('Sal', 'Alimento', 1, 'Paquete', 0.15)
let yerba = crearProducto('Yerba', 'Alimento', 2, 'Paquete', 0.20)
let mermelada = crearProducto('Mermelada', 'Alimento', 1, 'frasco', 0.15)

console.log(sal) */


/* Arrays */

/* 
Sirven para enlistar datos
Pueden enlistar cualquier tipo de dato
Los arrays son listas ordenadas, el orden lo determina el indice de cada elemento
*/
//              0        1       2   
let nombres = ['pepe', 'juan', 'maria']
let notas = [1, 5, 10]
/* let personas = [
    {
        id: 1,
        nombre: 'pepe'
    },
    {
        id: 2,
        nombre: 'juan'
    },
    {
        id: 3,
        nombre: 'maria'
    }
]
 */


//Quiero saber el id de la persona cuyo nombre es 'juan'

/* for (let indice = 0; indice < personas.length; indice = indice + 1) {

    if (personas[indice].nombre === 'juan') {
        console.log("El id es " + personas[indice].id)
    }
} */





/* 
Crear un array con 3 productos 

Cada producto sera:
titulo: string
precio: number 
id: number
descripcion: string
descuento: number

Calcular la sumatoria de precios de todos los productos (con descuento aplicado) del array de productos
*/


let productos = [
    {
        titulo: "Remera negra",
        precio: 1000,
        id: 1,
        descripcion: "Remera de algodón color negro",
        descuento: 0
    },
    {
        titulo: "Zapatillas deportivas",
        precio: 1000,
        id: 2,
        descripcion: "Zapatillas livianas para correr",
        descuento: 10
    },
    {
        titulo: "Mochila urbana",
        precio: 1000,
        id: 3,
        descripcion: "Mochila con compartimento para notebook",
        descuento: 0
    }
]


/* for(let i = 0; i < productos.length; i = i + 1){
    let producto = productos[i]
    precio_final = precio_final + (producto.precio - (producto.precio * (producto.descuento / 100)));
} */

/* let precio_final = 0;
for(let producto of productos){
    precio_final = precio_final + (producto.precio - (producto.precio * (producto.descuento / 100)));
}
console.log("\nel precio final es: %d ", precio_final);

for(let producto of productos){
    console.log("Producto: " + producto.titulo)
} */


/* 
Metodos de arrays
Acciones que podemos hacer dentro de un mismo array, ejemplo agregar, eliminar verificar algo
*/

let nombres_2 = ['pepe', 'juan', 'maria', 'jose']


//push: Agrega un elemento al final del array
//nombres_2.push('maria')

//unshift: Agrega un elemento al principio del array
//nombres_2.unshift('jorge')

//shift: Eliminar el primer elemento de un array
//nombres_2.shift()

//pop: Eliminar el ultimo elemento de un array
//nombres_2.pop()

//includes: Saber si cierto elemento esta en el array
//console.log(nombres_2.includes('juancito'))

//indexOf: Saber el indice de un elemento
//console.log(nombres_2.indexOf('juan'))

//splice: Sirve para eliminar o agregar elementos en alguna posicion del array

//let indice_juan = nombres_2.indexOf("juan")

//Eliminar a juan
//nombres_2.splice(indice_juan, 1)

//Remplazar
//nombres_2.splice(indice_juan, 1, 'marta')

//Agregar en la posicion de algun elemento
//nombres_2.splice(indice_juan, 0, 'marta')

//console.log(nombres_2)

/* 
Eliminar un usuario por id
*/
let personas = [
    {
        id: 1,
        nombre: 'pepe'
    },
    {
        id: 2,
        nombre: 'juan'
    },
    {
        id: 3,
        nombre: 'maria'
    }
]

function eliminarUsuarioPorId(usuario_id){
    for(let persona of personas){

        if(persona.id === usuario_id){
            
            let indice = personas.indexOf(persona)
            personas.splice(indice, 1)
            break
        }
    }
}

eliminarUsuarioPorId(3)
console.log(personas)

//Buscar un producto por id
/* 
Recorrer la lista de productos, cuando encuentren el producto buscado deberan devolver el producto en si (objeto)
*/

function buscarProductoPorId(id_producto){
    for (let producto of productos){
        if(Number(producto.id) === Number(id_producto)){
            return producto;
        }
    }
}

console.log(buscarProductoPorId(1))