
const titulo = document.getElementById('titulo')


let seMuestraTitulo = true

function setSeMuestraTitulo (value){
    seMuestraTitulo = value
    renderTitulo()
}

function renderTitulo(){
    if(seMuestraTitulo){
        titulo.classList.remove('hidden')
    }
    else{
        titulo.classList.add('hidden')
    }
}


renderTitulo()


/* 
Crear el estado booleano mostrarModal

Render:
    - Si mostrarModal es verdadero debe quitar la clase hidden del modal-container
    - Si no debe agregar la clase hidden al modal-container

El boton de abrir debe actualizar el estado mostrarModal a true

El boton de cerrar debe actualizar el estado de mostrar modal a false
*/