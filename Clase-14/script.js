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


/* let sumatoria = 0
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

alert("El promedio resultante es " + (sumatoria / cantidad_de_notas)) */

/* 
Pedir una contraseña, si la contraseña es correcta deberemos decir por alerta ¨Contraseña correcta¨ y cortar el bucle.
El limite de contraseñas es 5
*/

/* let intentos_max = 5;
const password = 'Mora123';
for (
    let iterador = 1;
    iterador <= intentos_max;
    iterador = iterador + 1
) {
    let contraseña_ingresada = prompt("Ingrese password");
    if (contraseña_ingresada === password) {
        alert("Contraseña correcta");
        break;
    } else {
        alert("Contraseña incorrecta");
    }
}

 */


/* 
Bucle while
*/

/* let password = 'pepe'
let password_escrita = prompt("ingresa una contraseña")

while(password_escrita != password){
    password_escrita = prompt('Error, Ingresa nuevamente la contraseña')
}

alert('Contraseña correcta') */

/* 
La palabra prohebida
Solicitar al usuario una palabra
Mientras el usuario no diga 'voldermort' volver a pedirle una palabra. Si lo escribio, decir 'Ese nombre no se puede decir'


*/
/* 
let palabra_prohibida ="voldemort"
let palabra_elegida = prompt("Ingrese una palabra")
while(palabra_elegida != palabra_prohibida) {
    palabra_elegida = prompt("Todo correcto, Ingrese una palabra")

}

alert("Elegiste la palabra prohebida!!") */

/* 
Solicitar un numero positivo
Vamos a solicitar por prompt un dato, ese dato debe ser si o si un numero positivo que no puede ser NaN. Si no cumple volver a solicitar
*/

/* 
let numero = prompt("ingrese un numero positivo")
while (numero < 0) {
    numero = prompt("ingrese un numero positivo")
}
 */

/* 
NaN es incomparable, nadie es igual a NaN nisiquiera el mismo NaN
Para eso usamos la funcion isNaN()

prompt => Devuelve un string O null
    Cuales son todas las posibilidades:
        1. devolvio un null => error
        2. devolvio un string vacio => error
        3. devolvio espacios vacios => error
        
        4. devolvio un string normal => error
        
        5. devolvio un string numerico => solo verificar que sea positivo
        
*/
let numero_crudo = prompt('Ingresa un numero')

while(
    numero_crudo === null 
    || 
    numero_crudo.trim() === '' 
    || 
    isNaN(numero_crudo)
    ||
    Number(numero_crudo) < 0
){
    alert("Numero incorrecto")
    numero_crudo = prompt('Ingresa nuevamente un numero')
}

