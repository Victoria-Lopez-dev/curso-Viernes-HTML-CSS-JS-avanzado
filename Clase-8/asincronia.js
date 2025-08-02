//sincronia
function suma(num1,num2) {
    return num1+num2
}
let resultado=suma(10,20);
console.log(resultado/2)
console.log("hola!!")

let boton=document.querySelector("button");
//asincronia : callbacks - promesas - async/await
//callback -> fuciones que pasamos como parametros/argumentos de otras funciones 


let funcionCallback=()=>{
    console.log("funcion ejecutada al hacer click")
};


boton.addEventListener("click",funcionCallback);

console.log(suma(200,11))

function dividir(total){
    return total/2
}

function promedio2num(numero1,numero2,callback) {
    let suma=numero1+numero2;
 // console.log(dividir(30))   
   console.log(callback(suma))
};

promedio2num(10,20,dividir)
dividir(40)


//promesas

let promesas= new Promise((exito,rechazo)=>{
    let todoOk=true;
    if(todoOk){
        exito("Se ejecuto con exito !!")
    }else{
        rechazo("Algo salio mal =(")
    }

});
let nombre="Juan";

promesas
.then((data)=>{
    console.log("respuesta: "+ data)
})
.catch((error)=>{
    console.log("ERROR!!"+ error)
});

console.log("Hola "+ nombre)

//fetch

//sintaxis:
// fetch("url",{configuracion}).then().catch();
//por defecto fetch ejecuta una peticion de tipo get

async function obtenerInfo() {
  let resultado=await fetch("https://rickandmortyapi.com/api/character")
    .then((data)=>{return data.json()})//transformamos la info recibida
    .then((info)=>{return info})
    .catch((err)=>{
        console.log("error");
        console.log(err)
    });
    return resultado.results
};
let boton2=document.querySelector("#boton2");

async function armarLista() {
    let infoObtenida=await obtenerInfo();//genere una asincronia para que esperae al finalizar la funcion de obtenerInfo para continuar con los demas pasos

    //en el siguiente codigo utilizamos la info para generar una lista..
    let lista=document.querySelector("ul");
    infoObtenida.forEach(personaje => {
        let li=document.createElement("li");
        li.textContent=personaje.name;
        lista.appendChild(li)
    });
  
}
boton2.addEventListener("click",armarLista);

//protocolo HTTP : 
// verbos HTTP:  get(obtengo informacion) -post(envio informacion-crear) - delete -put-patch
//async-await -> definir una asincronia en una funcion/indica que una funcion es asincrona 