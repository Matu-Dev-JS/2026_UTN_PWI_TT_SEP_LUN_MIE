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
    }
]

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
*/


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


const blogs = [
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

function renderizarBlogs (){
    const blogs_HTML = document.getElementById('blogs')

    let resultado = ''
    for(const blog of blogs){

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