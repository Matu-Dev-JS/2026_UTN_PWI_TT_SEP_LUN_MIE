
/* 
Crear en el HTML un boton de - y otro de +
Crear el estado contador
El boton de - debe decrementar el contador (Hacer que valga 1 menos)
El boton de + debe incrementar el contador (Hacer que valga 1 mas)


Protips: 
    - Contador es un estado
    - Crear la funcion renderContador
    - Asegurarse se usar el setContador para incrementar o decrementar el estado
    - LOS ESTADOS SON INMUTABLES, SOLO SE PUEDEN ACTUALIZAR POR MEDIO DEL SETTER
*/

let contador = 0

function renderContador() {
    document.getElementById('contador').innerText = contador
}

function setContador(valor) {
    contador = valor
    renderContador()
}

function decrementar() {
    setContador(contador - 1)
}

function incrementar() {
    setContador(contador + 1)
}

document.getElementById('btn-decrementar').addEventListener(
    'click', 
    decrementar
)
document.getElementById('btn-incrementar').addEventListener(
    'click',
    incrementar
)
renderContador()