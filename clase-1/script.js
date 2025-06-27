/*
entiende tipos de datos:

sting(caracteres-alfanumericos) -number(numernos) - booleanos(verdadero y falso)
*/
//strings -> " " ,'',`` 

"data..."
'Juan223'
'33'
//numeros -> decimales con un punto en vez de una coma 

333
20.5 //20 y medio
20,5 // 20 y 5

//booleanos -> palabras reservadas : true false
true // verdadero
false //false 

//otras palabras reservadas
undefined 
null
NaN // tipo de dato numerico que significa Not a Number
//break
//if-else-for-while-NaN ..

//variables -> espacios de memoria para almacenar info que puedo utilizar a lo largo del coumento JS

//sintaxis : ref nombre= valor
//ref-> let - const- var

var nombre="Juan";
let color="rosa";
const dni=33282749;//no podemos sobreescribir-modificar dicha variable
let numero=30
let conAdulto=true
//modificar variables

//sintaxis -> nombre=nuevoValor


color="verde"//asignando el valor "verde" a la variable color
nombre="Carlos"

//operaciones

//aritmeticas -> calculos 
//+ - * / ... Math-> calculos mas complejos 
44+44 //88

"hola " + nombre // "hola Carlos" 
//el simbolo + nos permite hacer una suma matematica o una concatenacion 
"data"+ true //"datatrue"

//de comparacion -> comparan y nos devuelve un booleano
// == === != !== <,>,<=,>= 

color === "naranja" //comparando si la variable color es el mismo que el string "naranja" -> falses
//diferencia con el triple igual es que el doble compara solo dato; mientras que el triple igual compara tipo de dato y valor del mismo

dni>33000000 //-> no incluye el valor 33000000

numero>=40// -> compara si es 40 o mas
numero>30//  false
numero>=30//true

//logicas -> nos devuelven booleanos comparar operaciones 

// && and -> todas las operaciones involucradas deben dar como resultado true para que al final esta operacion logica nos de true
nombre =="Juan" && edad>30


//  || or ->  con que alguna de las operaciones involucradas de true, el resultado final es true

edad>18 || conAdulto 

// ! not -> nos devuelve el opuesto del booleano
!conAdulto //conAdulto es true-> me devuelve un false


//proxima clase: terminamos el repaso de CSS - repaso de condicionales, 
// eventos -DOM 
// video - audio 