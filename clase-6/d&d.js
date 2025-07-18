//Drag&Drop es una API incluida HTML5 que nos permite arrastrar elementos

//draggable -> booleano : true /false

//por defecto tanto <a> como las <img> son arrastrables (draggable :true)


// nos trae 7 eventos para poder proceder con el arrastrado de elementos
//objeto llamado dataTransfer ( que se encuentra dentro del objeto del evento)
//nos sirve para almacenar y obtener la informacion del elemento al momento del arraste 
//3 metodos : setData(tipo,valor) - getData(tipo) - clearData(tipo)

//tipo -> solo podemos almacenar 1 informacion por tipo de dato permitido ( si quiero guardar varias veces informacion en el mismo tipo ,se sobreescribe)
//tipo -> "Text" - "URL" -"text/plain"-"text/html"-"text/uri-list"
//valor -> valor de tipo texto (string)


//eventos que se ejecutan en el elemento a arrastrar 
//drag -
// dragstart -> ejecutar apenas inicie a arrastra a un elemento
// dragend

let tituloH1=document.querySelector("h1");

tituloH1.addEventListener("dragstart",(event)=>{
    let contenido=event.target.textContent;
  event.dataTransfer.setData("Text",contenido)//guardmos informacion en dataTransfer
    console.log( " inicio de arrastre")
});

const guardarImagen=(e)=>{
    e.dataTransfer.setData("Text",e.target.outerHTML)
}

// tituloH1.addEventListener("drag",()=>{
//     console.log("mientras el elemento este siendo arrastrado")
// });
// tituloH1.addEventListener("dragend",()=>{
//     console.log("elemento arrastrado se solto")
// })


//eventos que se ejecutan en la zona destino (elemento en donde quiero soltar al elemento que arrastro)

//drop -se ejecuta cuando un elemento que arrastro se suelta sobre el elemento

//dragover -> se ejecuta mientras estemos dentro del elemento "destino" con un elemento arrastrado
//similar al drag

//dragleave - se ejecuta cuando estamos saliendo del elemento "destino" con un elemento siendo arrastrado
 

// dragenter - se ejecuta cuando estamos arrastrando un elemento (sin soltar) dentro de este elemento "destino"

const eventoDragEnter=()=>{
    console.log("se esta arrastrando un elemento sobre este..")
};
const eventoDragLeave=()=>{
    console.log("Salimos de la zona destino con un elemento arrastrado")
};
const eventoDragOver=(e)=>{
    e.preventDefault();//cancelar la accion por defecto y permitirnos que se ejecute el drop
    //console.log("dragover ejecutado..")
};
const eventoDrop=(e)=>{
    console.log("DROP!!!")
    
    console.log(e.dataTransfer.files)
    let infoRecibida=e.dataTransfer.getData("Text");
    
    let zonaDestino=document.querySelector(".zona-destino");


    let arrayFiles=e.dataTransfer.files;
    if(arrayFiles.length >0){
       let extencion=arrayFiles[0].type.split("/").pop()//utilizamos por un laso 
       console.log(extencion)
        if(extencion === "pdf"){
            zonaDestino.innerHTML=`<h2>${arrayFiles[0].name}</h2>
            <img id="img3" src="./imagenes/img-pdf.png" alt="archivo PDF"/>
            `            
        }else{
            zonaDestino.innerHTML=`<h2>${arrayFiles[0].name}</h2>`
        }

    }else{
        if(infoRecibida == "Drag and Drop"){
            // document.querySelector("h1").style.display='none';
            zonaDestino.innerHTML=`<h1>${infoRecibida}</h1>`        
        }else{
            let arrayDelString=infoRecibida.split(" ");
            let atributoId=arrayDelString[1]
            let idImagen=atributoId.split('"')[1];

            let nodoImagen=document.querySelector("#"+idImagen);
            nodoImagen.style.display="none";

            zonaDestino.innerHTML=infoRecibida
        }
}

};
//2 maneras de generar eventos :
//a - con el metodo addEventListener()
//b evento en la etiqueta HTML como atributo(on+evento) + funcion en el JS


//metodo de todos los eventos -> preventDefault()

//para un arrastre simple -> dragstart -dragover -drop

//metodo split() nos permite transformar un string en un array de strings separando cada uno de los elementos de una lista(items del array) teniendo en cuenta lo que coloquemos entre parentesis

//metedo include() -> un booleano que me indica si encontro alguno de esos caracteres dentro de la lista