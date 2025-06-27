//proxima clase: terminamos el repaso de CSS - repaso de condicionales, 
// eventos -DOM 
// video - audio 


//DOM -> Document Object Model 
//document
//window


console.dir(document)
let remera={
    marca: "Nike",
    talle: "M",
    color:["rojo","verde","azul"],
    stock: 10,
    brillar: function(prod){
        console.log(prod+ " esta brillando")
    }

}
//metodos de los objetos
//acceder a un valor del objeto
//objeto.propiedad
console.log(remera.marca);
remera.brillar("esta remera")

//modificar un valor del objeto
//objeto.propiedad = nuevoValor

remera.talle = "L";
//crear un nuevo valor del objeto
//objeto.nuevaPropiedad = nuevoValor

remera.precio = 1000;


console.log(remera);

//------ metodos del dom

// traer un elemento del html(DOM) a JS 
//nodos -> eleementos del DOM

//querySelector ("selector") - querySelectorAll()

let button=document.querySelector("button");
console.log(button);
button.style.color="blue";
button.classList.add("clase-1")

//eventos -> accion que tiene un principio y un fin
// ante un evento del usuario crear una respuesta(ejecutar una funcion como respuesta);


//click, mouseover, keydown, keyup, submit, change, focus, blur,input,load,scroll

//en un evento tenemos 3 partes:
//1. el evento - accion a la cual estar atento
//2. el nodo en el que ocurre dicho evento
//3. la funcion que se ejecuta como respuesta a ese evento

//2 maneras

//1. por medio JS - metodo de los nodos addEventListener
//sintaxis:
// nodo.addEventListener("evento", funcion);
let funcionRespuesta=()=>{
    alert("boton pulsado")} 

button.addEventListener("click",(event)=>{
    alert("boton pulsado")
    console.log(event) //objeto del evento
} 
)

//2. agregando un atributo al HTML(on+evento=funcion()) + funcion desde JS 

let saludar=(evento)=>{
    console.log(evento)
    console.log("Hola, bienvenido a la clase 2")
}

//si queremos mas informacion -> evento me trae un objeto llamado "event" que trae la informacion del evento ocurrido
//lo podemos obtener como parametro de la funcion de respuesta