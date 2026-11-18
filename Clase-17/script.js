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


function renderBlog(blog){
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

renderBlog(mi_primer_blog)