/* 
Comentarios multilinea
*/
//Comentario unilinea


//Tipos de datos:
//string => texto, se escribe entre comillas
    'pepe'
    "jose"
    ''
    '5'
    //alert('hola mundo')

//number => Representan los numeros
    3
    0
    -4
    3.14
    -3.14
    //NaN es un tipo de dato numerico, significa "Not a Number" y JS lo usa cuando un dato numerico no tiene un valor en recta de los numeros (osea un dato no se pudo pasar a number)
    NaN 

//boolean => Representar el verdadero y falso
    true
    false


//undefined => JS lo utiliza cuando x valor no esta definido
    undefined

//null => Lo usaremos para representar nulidad/ausencia de dato
    null


//Constructores de datos: transformar un dato en otro tipo de dato
//String() // => Transforma a string
//console.log( 3.14 )
//Number() // => Transforma a numero
//Boolean() // => Transforma a booleano
//truthy y falsy
//falsy:  cualquier valor pasado a boolean que da false de resultado
//Ejemplos: 0, null, '', NaN, undefined, false

//truthy:  cualquier valor pasado a boolean que da true de resultado
//truthy: son los que NO son falsy





//console.log => permite mostrar por consola del navegador algo
//console.log('hola')

//operadores aritmeticos


//+: Concatenacion: 
// Ocurre cuando en suma hay un string (o mas de uno)
// Para resolverse pasa cualquier dato no string a string y combina los strings
//console.log('hola ' + 1)
//          'hola ' + String(1)
//          'hola ' + '1' = 'hola 1'

//console.log('' + null) //'null'
//          '' + 'null'

// console.log('hola' + 60) 'hola60'


//Todas las sig operaciones devuelven SIEMPRE numero

// +: Suma
// Ocurre cuando no hay string
// Para resolverse pasa cualquier dato no number a number
// Y luego suma

console.log(null + true)
//          Number(null) + Number(true)
//          0 + 1 = 1


     

// -: Resta

//console.log(90 - '1')
//          90 - Number('1')
//          90 - 1 = 89

//console.log(90 - 'hola1')
//          90 - Number('hola1')
//          90 - NaN = NaN

// *: Multiplicar
// /: Division 


//Excepcion del NaN, cualquier operacion excepto la concatenacion con NaN da como resultado NaN

//Comparadores: Sirven para comparar y siempre devuelven booleano

/* 
==: Igualdad
    1 == 1      true
    1 == '1'    true
    1 == 2      false

===: Estricta igualdad
    1 === 1      true
    1 === '1'    false
    1 === 2      false

!=:   Diferencia
    1 != 2      true
    1 != 1      false
    1 != '1'    false

!==: Estricta diferencia
    1 !== 2      true
    1 !== 1      false
    1 !== '1'    true

>:  Mayor a

<:  Menor a
>=: Mayor o igual a 
<=: Menor o igual a

*/

/* 
Operadores logicos
*/

/* 
NOT: !
    Sirve para obtener el booleano opuesto del valor negado
    Siempre devuelve un booleano

AND: &&
    Sirve para seleccionar entre 2 valores:
        Si el primer valor es truthy devuelve el segundo valor
        Sino devuelve el primero

OR:  ||
    Sirve para seleccionar entre 2 valores:
        Si el primer valor es truthy devuelve el primero
        Sino devuelve el segundo
*/



/* 
var esDeDia = false
var esDeNoche = !esDeDia
!60 // false
!null //true 

60 && 90 //90
0 && NaN //0
isLogged && esDeDia && <span>Sesion iniciada</span>

true && true = true
false && true = false
true && false = false
false && false = false


60 || 90 //60
null || 1 //1

true || true = true
false || true = true
true || false = true
false || false = false
*/