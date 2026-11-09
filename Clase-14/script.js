/* 
Bucles
Funciones
*/



/* 
BUCLES

Son una estructura que nos permite repetir bloques de codigo
Hay 2 tipos de bucle:
    Por condicion (WHILE): La condicion determina si se sigue ejecutando o no el bucle 
    Por limite (FOR): El limite determina hasta cuando se ejecuta algo
*/



/* 
let sumatoria = 0

 */
/* Vamos a implementar un bucle que permita repetir el bloque de codigo de solicitud/acumulacion del numero 3 veces */
/* {
    let numero = prompt("Ingrese un numero")
    numero = Number(numero)
    sumatoria = sumatoria + numero
}
{
    let numero = prompt("Ingrese un numero")
    numero = Number(numero)
    sumatoria = sumatoria + numero
}
{
    let numero = prompt("Ingrese un numero")
    numero = Number(numero)
    sumatoria = sumatoria + numero
}

let promedio = sumatoria / 3
alert('El promedio resultante es ' + promedio) */


let sumatoria = 0
let cantidad_de_notas = 3

for(
    let iterador = 1;//1, 2, 3
    iterador <= cantidad_de_notas;//mientras esto se cumpla, el bucle sigue
    iterador = iterador + 1
){
    let numero = prompt("Ingrese un numero")
    if(numero === 'ESC'){
        alert("Cancelado")
        break; //Corta el bucle
    }

    numero = Number(numero)
    sumatoria = sumatoria + numero
}

alert("El promedio resultante es " + (sumatoria / cantidad_de_notas))

/* 
Pedir una contraseña, si la contraseña es correcta deberemos decir por alerta ¨Contraseña correcta¨ y cortar el bucle.
El limite de contraseñas es 5
*/