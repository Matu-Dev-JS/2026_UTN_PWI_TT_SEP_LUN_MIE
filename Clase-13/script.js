/* 
Que es un lenguaje de programacion
Javascript
Tipos de datos
Constructores de datos:
    String
    Boolean (Falsy y Truthy)
    Number
Operadores aritmeticos:
    concatenacion
    suma
    resta
    multiplicacion
    division
Comparadores:
    igualdad
    estricta igualdad
    diferencia
    ...etc
Operadores logicos:
    AND
    OR
    NOT


HOY:
    Variables
    Funciones nativas
    Condiciones
    Bucles
*/
/* 
VARIABLES
Sirven para guardar datos en memoria
Hay 2 tipos de variables
    - Let: Datos normales (que pueden variar a lo largo de la ejucucion del programa) (Son las que vamos a usar de momento)
    - Const: Datos que van a valer lo mismo a lo largo de la ejecucion del programa
        Siempre deben tener una asignacion inicial (inicializacion)
        No pueden ser reasignadas
*/
/* 
let edad = 35

//Declaracion
let cantidad_escaleras = 10

const pi = 3.14
const porcentaje_iva = cantidad_escaleras

//Reasignacion (solo funciona en let)
cantidad_escaleras = cantidad_escaleras + 60 + edad
//pi = 3.15 //Esto va a dar error

let eventoParaLas6 = true

let tengoSueño = true
let nombre


//Referencia de una variable
console.log(
    "La cantidad de escalones en la escalera de mi casa son " + cantidad_escaleras
)
 */
/* 
Bloque de codigo: se declara con llaves y sirve para hacer fragmentos de codigo
*/
/* 
let iva = 21
console.log(iva)
{
    let iva = 23
    console.log(iva)
    {
        let iva = 50
        console.log(iva)
    }
}

{
    let iva = 19
    console.log(iva)
}

let a = 10
let b = 5
{
    //Suma
    let resultado = a + b
    {
        console.log(resultado)
    }
}

{   
    //Resta
    let resultado = a - b
} */


//Funciones Nativas
/* 
Acciones que ya trae el mismo lenguaje
*/
//Dar un mensaje por consola
//console.log("hola mundo")


//alert: Sirve para mostrar en pantalla un pop up con un mensaje
//alert('test')

//prompt: Sirve para que el usuario ingrese informacion en un pop up
/* 
Si el usuario da a cancelar el prompt devuelve null
Si el usuario da a aceptar el prompt devuelve string
*/
/* 
let edad = '19'

alert("Ahora tenes " + edad + ' años')
 */

/* 
Truthy: Todo valor que al ser pasado a booleano de true
    'pepe' => Boolean('pepe') => true
FALSY: false, 0, null, NaN, undefined, ''


Condiciones
condicionar el flujo de ejecucion del programa
IF recibe una condicion y si esa condicion se cumple (Truthy) entonces el IF ejecuta el bloque de codigo
ELSE va siempre despues de un IF y se ejecuta si el IF no se ejecuto
*/

let edad = prompt('Ingresa tu edad')

/* if( edad ){
    alert("Edad vale algo")
}
else{
    alert('Edad no vale nada')
} */

if( edad >= 18 ){
    alert("Sos mayor de edad (al 100%)")
}
else if(edad >= 16 && edad < 18){
    alert("Sos mayor de edad (al 60%)")
}
else{
    alert('Sos menor de edad, no podes ingresar')
}

/* 
Selector del dia de la semana
Solicitar al usuario via prompt un numero del 1 a 7
    Dependiendo del numero del dia seleccionado por el usuario va a variar la respuesta:
        - 1: Lunes
        - 2: Martes
        - 3: Miercoles
        - 4: Jueves
        - 5: Viernes
        - 6: Sabado
        - 7: Domingo
    El formato de la respuesta por alerta sera "El dia seleccionado es " + nombre_dia_seleccionado
*/
let nombre = 'jose'