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



//Quiero saber el id de la persona cuyo nombre es 'juan'

for (let indice = 0; indice < personas.length; indice = indice + 1) {

    if (personas[indice].nombre === 'juan') {
        console.log("El id es " + personas[indice].id)
    }
}





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

let precio_final = 0;
for(let i = 0; i < productos.length; i = i + 1){
    let producto = productos[i]
    precio_final = precio_final + (producto.precio - (producto.precio * (producto.descuento / 100)));
}
console.log("\nel precio final es: %d ", precio_final);
