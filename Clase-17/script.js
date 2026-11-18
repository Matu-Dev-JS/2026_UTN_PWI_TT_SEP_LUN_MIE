/* 
En una aplicacion es normal que hayan estados, estos estados son los que se muestran en la aplicacion
EJ: la hora es 17:30 entonces renderizamos un reloj en pantalla que marque ese valor, pero cuando esta hora cambie hay que actualizar para sincronizar dicho reloj

Los estados pueden ser de cualquier tipo de dato
Estos estados son INMUTABLES, para poder modificarlos usaremos una funcion de seteo
*/


let carrito = [
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
    }
]


function setCarrito(value){
    carrito = value
    renderizarCarrito()
}

function eliminarItemPorId(id){

    const clon_carrito = [...carrito]

    for(let item of clon_carrito)
        if(item.id === id){
            let indice=clon_carrito.indexOf(item)
            clon_carrito.splice(indice,1)
            break;
        }
    
    setCarrito(clon_carrito)
}






/* 
Crear la funcion llamada eliminarItemPorId
Que reciba un id de item y busque dentro del carrito y elimine el item del carrito

DEBEN USARSE ESTADOS, es decir si vas a modificar a carrito, debes hacerlo mediante un clone
*/


/* 
Crear una funcion llamada renderizarCarrito que llame a un elemento del HTML y renderize dentro de el la lista del carrito.

Por cada item la idea es mostrar
<div>
    <h2>{titulo}</h2>
    <div>Precio: ${precio}ARS</div>
    <div>Categoria: {Categoria}</div>
    <button>+</button><span>{cantidad}</span><button>+</button>
    <button>Eliminar</button>
    <hr>
</div>

2da parte:
En la misma funcion de renderizarCarrito:
- Llamar a un div/span debajo de la lista del carrito y sumarizar el total del carrito (items con precio x cantidad)
- Podrian separar en una funcion el calcularTotalCarrito

*/

function calcularTotalCarrito() {
    let total = 0

    for (let item of carrito) {
        total = total + (item.precio * item.cantidad)
    }

    return total
}

function renderizarTotal() {
    const carrito_total_HTML = document.getElementById('carrito-total')
    let msj = `El total a pagar es de: $${calcularTotalCarrito()} ARS`

    carrito_total_HTML.innerHTML = msj
}

function renderizarListaCarrito() {
    const carrito_HTML = document.getElementById('carrito')

    let resultado = "";

    for (let item of carrito) {
        resultado = resultado +
            `<div>
            <h2>${item.titulo}</h2>
            <div>Precio: ${item.precio} ARS</div>
            <div>Categoria: ${item.categoria}</div>
            <button>-</button>
            <span>${item.cantidad}</span>
            <button>+</button>
            <button>Eliminar</button>
            <hr>
        </div>`
    }
    carrito_HTML.innerHTML = resultado
}

function renderizarCarrito() {

    renderizarListaCarrito()
    renderizarTotal()
}


renderizarCarrito()


/* 
document es la interfaz con la que nos comunicaremos con el DOM (Document object model). Tiene la finalidad de representar todo el HTML en formato Objeto de JS
*/

//Console.dir muestra por consola sin aplicar formatos estilisticos 
//console.dir(document)


/* 
document.getElementById es un metodo que permite buscar un elemento dentro del document
SI el elemento buscado NO existe, entonces devuelve null
*/
const div = document.getElementById('contenedor-titulo')


/* if(div){
    div.innerText = 'pepe'
}
else{
    console.error("Div con id contenedor titulo esta mal llamado")
} */


/* function renderBlog(blog){
    if(div){
        div.innerHTML = `
            <h1>${blog.titulo}</h1>
            <p>${blog.descripcion}</p>
            <span>Fecha: ${blog.fecha}</span>
            <hr/>
        `
    }
}

const mi_primer_blog = {
    titulo: 'Hola, este es mi primer blog',
    descripcion: 'No se exactamente que decir',
    fecha: '18/11/2026 15:48 HRS Argentina'
}

renderBlog(mi_primer_blog) */


let blogs = [
    {
        titulo: 'Hola, este es mi primer blog',
        descripcion: 'No se exactamente que decir',
        fecha: '18/11/2026 15:48 HRS Argentina'
    },
    {
        titulo: 'Como aprender JS',
        descripcion: 'Programando!',
        fecha: '16/11/2026 16:48 HRS Argentina'
    },
    {
        titulo: 'Es normal que cumpla años mi amigo cada año?',
        descripcion: 'Le pregunte a grok y no se que pensar...',
        fecha: '12/11/2026 15:48 HRS Argentina'
    }
]


function setBlogs (value){
    blogs = value
    renderizarBlogs()
}   


function eliminarBlogs (){
    setBlogs([])
} 

function agregarBlog(titulo, descripcion, fecha){
    const clon_blogs = [...blogs]

    clon_blogs.push({
        titulo,
        descripcion,
        fecha
    })

    setBlogs(clon_blogs)
}



function renderizarBlogs() {
    const blogs_HTML = document.getElementById('blogs')

    let resultado = ''
    for (const blog of blogs) {

        resultado = resultado + `
            <h1>${blog.titulo}</h1>
            <p>${blog.descripcion}</p>
            <span>Fecha: ${blog.fecha}</span>
            <hr/>
        `
        console.log(resultado)
    }
    blogs_HTML.innerHTML = resultado
}

renderizarBlogs()



