

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


function setCarrito(value) {
    carrito = value
    renderizarCarrito()
}


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
            <button 
                class='btn-eliminar-item' 
                data-id-item='${item.id}'
            >Eliminar</button>
            <hr>
        </div>`
    }
    carrito_HTML.innerHTML = resultado

    const btns_delete_item = document.getElementsByClassName('btn-eliminar-item')

    for(const btn of btns_delete_item){
        btn.addEventListener(
            'click',
            handleEliminarItemCarrito
        )
    }
}


function handleEliminarItemCarrito(evento){
    const btnClicked = evento.target
    const item_id_to_delete = btnClicked.getAttribute('data-id-item')

    if(item_id_to_delete){
        eliminarItemPorId(item_id_to_delete)
    }
}

function renderizarCarrito() {

    renderizarListaCarrito()
    renderizarTotal()
}

function eliminarItemPorId(id) {

    const clon_carrito = [...carrito]

    for (let item of clon_carrito)
        if (item.id === id) {
            let indice = clon_carrito.indexOf(item)
            clon_carrito.splice(indice, 1)
            break;
        }

    setCarrito(clon_carrito)
}




renderizarCarrito()


const div = document.getElementById('contenedor-titulo')




let blogs = [
    {
        id: 1,
        titulo: 'Hola, este es mi primer blog',
        descripcion: 'No se exactamente que decir',
        fecha: '18/11/2026 15:48 HRS Argentina'
    },
    {   
        id: 2,
        titulo: 'Como aprender JS',
        descripcion: 'Programando!',
        fecha: '16/11/2026 16:48 HRS Argentina'
    },
    {
        id: 3,
        titulo: 'Es normal que cumpla años mi amigo cada año?',
        descripcion: 'Le pregunte a grok y no se que pensar...',
        fecha: '12/11/2026 15:48 HRS Argentina'
    }
]


function setBlogs(value) {
    blogs = value
    renderizarBlogs()
}


function eliminarBlogs() {
    setBlogs([])
}

function agregarBlog(titulo, descripcion, fecha) {
    const clon_blogs = [...blogs]

    clon_blogs.push({
        titulo,
        descripcion,
        fecha,
        id: blogs.length + 1
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
            <button 
                class='btn-delete-blog' 
                data-blog-id='${blog.id}' 
            >
                eliminar
            </button>
            <hr/>
        `
    }
    blogs_HTML.innerHTML = resultado


    /* 
    Como las clases se pueden repetir al llamar a getElementsByClassName estamos llamando a lista de elementos que compartan esta clase
    */
    const buttons_delete_blog = document.getElementsByClassName('btn-delete-blog')

    for(let btn of buttons_delete_blog){
        btn.addEventListener(
            'click',
            handleDeleteBlog
        )
    }
}


/* 
Las funciones asociadas a los eventos reciben como parametro el objeto event
el objeto event contiene detalles de como sucedio el evento 
*/
function handleDeleteBlog(event){
    //Para eliminar un blog necesito el ID del blog
    const clicked_btn = event.target
    const blog_id_to_delete = clicked_btn.getAttribute('data-blog-id')
    
    const blogs_cloned = [...blogs]
    for(const blog of blogs_cloned){
        if(Number(blog.id) === Number(blog_id_to_delete)){
            const blog_index_to_delete = blogs_cloned.indexOf(blog)
            blogs_cloned.splice(blog_index_to_delete, 1)
            setBlogs(blogs_cloned)
            return 
        }
    }
}

renderizarBlogs()



function alertar() {
    alert('Hola mundo!')
}

const btnClick = document.getElementById('btn-click')


//Cuando ocurra el evento "click" se activara la funcion alertar
/* 
addEventListener es un metodo de los elementos del DOM
Cualquier elemento del DOM puede acceder a addEventListener
Recibe 2 parametros:
    1. Event-key: Es un string que representa el tipo de evento por su nombre clave
        Aca podes ver todos los eventos posibles: https://www.w3schools.com/jsref/dom_obj_event.asp

    2. Funcion/handler: Es una funcion de JS que sera activada cuando el evento se dispare

*/
btnClick.addEventListener(
    'click',
    alertar
)



/* 
En el carrito implementar la funcionalidad al boton de:
    - Eliminar: Eliminar el item del carrito (HECHO)

    TAREA PARA 25/11
    - Incrementar (+): Aumentar la cantidad del item en el carrito 1 mas
    - Decrementar (-): Decrementar la cantidad del item en el carrito a 1 menos
        Si la catidad es 1 deberia eliminar el item del carrito
*/