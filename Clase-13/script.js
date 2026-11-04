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