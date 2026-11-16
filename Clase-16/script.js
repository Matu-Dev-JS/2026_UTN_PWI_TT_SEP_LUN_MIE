/* 
Objetos -> describir algo, una persona tiene nombre, apellido, edad
Arrays: Sinonimos: lista, matriz, arreglo, coleccion -> enlistar datos
*/

/* 
Normalmente los arrays y los objetos se van a declarar en variables CONSTANTES
*/

const carrito = [
    {
        id: 1,
        titulo: 'tv samsung 52"',
        precio: 400,
        cantidad: 3,
        categoria: 'tecnologia'
    },
    {
        id: 2,
        titulo: 'Espejo de mesa',
        precio: 40,
        cantidad: 1,
        categoria: 'hogar'
    },
    {
        id: 3,
        titulo: 'tv samsung 32"',
        precio: 250,
        cantidad: 3,
        categoria: 'tecnologia'
    },
]


/* 
Desarrollar una funcion llamada filtrarProductosCarritoPorCategoria(categoria) y debe devolver una nueva lista con todos los productos que pertenezcan a esa categoria
Si ninguno coincide devolver array vacio
filtrarProductosCarritoPorCategoria('tecnolgia')
devuelve/retorna: [
    {
        id: 1,
        titulo: 'tv samsung 52"',
        precio: 400,
        cantidad: 3,
        categoria: 'tecnologia'
    },
    {
        id: 3,
        titulo: 'tv samsung 32"',
        precio: 250,
        cantidad: 3,
        categoria: 'tecnologia'
    },
]



Un filtro es, recorrer toda una lista buscando los elementos que cumplan con cierto criterio (condicion). Aquellos que cumplan seran sumados a una lista resultante (inicialmente vacia). 

*/

/* function filtrarProductosCarritoPorCategoria(categoria) {
    let resultado = [];

    if(!categoria){
        return resultado
    }

    for (let producto of carrito) {
        if (producto.categoria.toLowerCase().trim().includes(categoria.toLowerCase().trim())) {
            resultado.push(producto);
        }
    }
    return resultado;
}
console.log(filtrarProductosCarritoPorCategoria("")) */

/* 
Un mapeo es generar un array a partir de otro array
EJ: ['pepe', 'juan', 'jose'] => [{nombre: 'pepe'}, {nombre: 'juan'}, {nombre: 'jose'}]

En el map:
    Siempre se devuelve un array
    El array siempre tendra la misma longitud que el array original

*/

/* 
extraerNombresProductosDelCarrito() 
Recorrera toda la lista de carrito y por cada item extraera el nombre y lo subira al array resultante

EJ: extraerNombresProductosDelCarrito() => ['tv samsung 52"', 'Espejo de mesa', 'tv samsung 32"']
*/

/* function extraerNombresProductosDelCarrito() {
    const nombres = [];
    for (const item of carrito) {
        nombres.push(item.titulo);
    }
    return nombres;
}

console.log(extraerNombresProductosDelCarrito()) */


/* 
Crear una funcion llamada renderCarrito()
por cada elemento del carrito debera generar un string con este formato:
    <div>
        <h3>titulo</h3>
        <div>Precio: $precioARS</div>
        <div>Categoria: categoria</div>
        <button>Comprar</button>
    </div>
Devolver el array resultante 

Ejemplo de retorno: [
    `<div>
        <h3>Tv samsung</h3>
        <div>Precio: $400 ARS</div>
        <div>Categoria: tecnologia</div>
        <button>Comprar</button>
    </div>`,
    `<div>
        <h3>Espejo de mesa</h3>
        <div>Precio: $40 ARS</div>
        <div>Categoria: hogar</div>
        <button>Comprar</button>
    </div>`
]

*/


//Templates strings

/* let persona = {
    nombre: "pepe",
    edad: 35,
    apellido: 'suarez'
} */

//Con strings normales
/* console.log('La persona ' + persona.nombre + " tiene " + persona.edad + ' y su apellido es ' + persona.apellido) */

//Con template strings seria:
/* console.log(`La persona ${persona.nombre} tiene ${persona.edad} años y su apellido es ${persona.apellido}`)
document.write(`
    <div>
        <h2>${persona.nombre} ${persona.apellido}</h2>
        <div>Edad: ${persona.edad}</div>
        <hr/>
    </div>
`) */