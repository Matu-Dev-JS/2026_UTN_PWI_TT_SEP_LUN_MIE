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
        id: 50,
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


/* function renderCarrito() {
    const resultado = [];
    for (const producto of carrito) {
        resultado.push(`<div>
            <h3>${producto.titulo}</h3>
            <div>Precio: $${producto.precio} ARS</div>
            <div>Categoria: ${producto.categoria}</div>
            <button>Comprar</button>
            </div>`);
    }
    return resultado;
}
document.write(renderCarrito().join('')); */


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



/* 
eliminarItemCarritoPorId(item_id)
    Eliminar el elemento del carrito, si no encuentra el item cuyo id sea igual al recibido debe devolver false, si lo pudo eliminar debe devolver true.

decrementarItemCarritoPorId(item_id)
    Buscar el item en carrito por su id, si no existe devolver false.
    Si existe dependiendo de la cantidad 
        Si es 1:
            - Llamar a la funcion eliminarItemCarritoPorId()
        Si no:
            - Modificar la propiedad cantidad en 1 menos


Protip: 
    - array.indexOf(item) => indice de ese item en el array (si existe), sino -1
    - array.splice(nro_indice, 1) => eliminar 1 elemento de cierto indice
*/

function eliminarItemCarritoPorId(item_id){
    let encontrado=false
    for(let item of carrito){
        if(item.id===item_id){
            let indice=carrito.indexOf(item)
            carrito.splice(indice,1)
            encontrado=true
            break
        }
    }
    return  encontrado
}

function decrementarItemCarritoPorId(item_id) {
    for (let item of carrito) {
        if (item.id === item_id) {
            if (item.cantidad > 1) {
                item.cantidad = item.cantidad - 1
            } else {
                eliminarItemCarritoPorId(item_id);
            }
            return true
        }
    }
    return false;
}

/* decrementarItemCarritoPorId(1)
decrementarItemCarritoPorId(1)
decrementarItemCarritoPorId(1) */

/* 
generarNuevoId()
    Extraer todos los ids del carrito
    Buscara el id mas alto entre todos
    Devolvera ese id + 1

Ej: generarNuevoId() => 51 (porque el id mas alto es 50)

agregarItemCarrito(titulo, precio, categoria)
    Buscar en el carrito si ese producto ya esta agregado (por titulo)
        Si lo esta:
            Incrementar su cantidad en + 1
        Si lo esta
            Agregar al array el nuevo item (con un id unico usando la funcion generar nuevo id, y cantidad en 1)
*/

/* function generarNuevoId(){
    let next_id=0
    for(let item of carrito){
        if(Number(item.id)>next_id){
            next_id=Number(item.id)
        }
    }
    return next_id + 1
}


function agregarItemCarrito(titulo, precio, categoria) {
    
    for (const item of carrito) {
        if (item.titulo.toLowerCase().trim() === titulo.toLowerCase().trim()) {
            item.cantidad += 1;
            return;
        }
    }

    carrito.push({
        id: generarNuevoId(),
        titulo: titulo,
        precio: precio,
        cantidad: 1,
        categoria: categoria
    });

}

const tituloIngresado = prompt('Ingresá el título del producto');
const precioIngresado = Number(prompt('Ingresá el precio'));
const categoriaIngresada = prompt('Ingresá la categoría');


agregarItemCarrito(tituloIngresado, precioIngresado, categoriaIngresada);
console.log(carrito); */