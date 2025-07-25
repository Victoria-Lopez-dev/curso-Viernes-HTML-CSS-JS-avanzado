//pliegue y despliegue del navegador

function desplegar(){
    let botonesTema=document.querySelectorAll(".boton");
    botonesTema.forEach((btn)=> btn.classList.toggle("show"))
}
//defino los cambios del tema noche
const estiloNoche=()=>{
    let body=document.querySelector("body");
    let botones=document.querySelectorAll(".boton");
    body.classList.add("fondo")
    botones.forEach((boton)=>{boton.classList.add("botonNight")})
}
//------------------------
//API (Application Programing Interfase)

//incluidas HTML5 :Canvas - Geolocation -Drag and Drop - Web Storage
//externas -> para poder consumirlas utilizamos asincronias (clase 8)

//Web Storage -> almacenar informacion(no sensible) en el browser(navegador)
//mecanismos: localStorage (almacena de manera indefinida)- sessionStorage(almacena hasta finalizada una sesion: cierre del navegador o la pestaña )
// web storage almacena tipo de dato de texto /string.

//metodos de webStorage para manipular esta informacion:

// setItem("nombre o key o clave","valor") -> almacena la informacion
//getItem('nombre/key/clave') -> para obtener la informacion
//removeItem('nombre/key/clave') -> para borrar la informacion
sessionStorage.setItem("numero",2222)
sessionStorage.setItem("persona",{nombre:"Juan",apellido:"Gomez"})
sessionStorage.setItem("pepe",true);

let body=document.body;

//tema

const temaNoche=()=>{
    body.classList.add("fondo");
    localStorage.setItem("tema","noche")
}
const temaDia=()=>{
    body.classList.remove("fondo");
    localStorage.setItem("tema","dia")
}


const carga=()=>{
    //actualizar el contador
     let contadorInicial=document.querySelector("#cantidad");
     let contadorAlmacenado=localStorage.getItem("contador")
      if(contadorAlmacenado == null){
        contadorInicial.textContent=0
      }else{
        contadorInicial.textContent=localStorage.getItem("contador")
      }

    //actualizar el tema
    let tema=localStorage.getItem("tema");
    if(tema == "noche"){
        body.classList.add("fondo");
    }
    
};

let producto1={
    nombre:'silla 1',
    precio:2500
}
let producto2={
    nombre:'silla 2',
    precio:3500
}
let producto3={
    nombre:'silla 3',
    precio:4500
}
let lista=[]
const sumarCanasto=(nodo)=>{
   let contador= document.querySelector("#cantidad");//buscamos el valor del contador
    contador.textContent=parseInt(contador.textContent)+1//le sumamos de a 1 unidad
   
    //almacenar la cantidad de productos en el carrito de compras
    localStorage.setItem("contador",contador.textContent);
    
    switch (nodo.id) {
        case "boton1":
            lista.push(producto1)

            break;
        case "boton2":
            lista.push(producto2)

            break;
        case "boton3":
             lista.push(producto3)
            
            break;

    }
    localStorage.setItem("producto",JSON.stringify(lista))
}


//------------------------------------------
/*
JSON -> JavaScript Object Notation
formato de texto que es utilizado para recibir y enviar informacio 
es como un gran objeto de objetos - array de objetos 

metodos de JSON incluidos en JS que nos permite transformar de objetos/array a JSON y de JSON a objetos/array

JSON.stringify() -> permitir transformar a JSON lo que tenga entre parentesis
JSON.parse() ->  permitir transformar de JSON a array/obejtos , segun lo que tenga entre parentesi
*/


let productoEnJSON=JSON.stringify(producto1)
console.log(producto1)
console.log(productoEnJSON)
console.log(JSON.parse(productoEnJSON))




//para la proxima clase :


// asincronia (como conectarnos con API externas)

//introduccion a POO 

//spread operator - rest operator 

