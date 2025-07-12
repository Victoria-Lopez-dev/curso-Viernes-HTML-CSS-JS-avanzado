/*implementamos esta API desde JS */
let canvas=document.querySelector("canvas");
let lienzo=canvas.getContext("2d");
console.log(lienzo)

//formas primitivas -> trazos : 
//rectangulos 
//rectangulo con relleno -> fillRect(x,y,width,height)


lienzo.fillRect(16,30,100,100);
lienzo.fillStyle="orange";//modificar color de relleno en el lienzo
lienzo.fillRect(200,30,70,100);

//rectangulo con contorno -> strokeRect(x,y,width,height)

lienzo.strokeStyle="blue"
lienzo.strokeRect(100,100,40,40);
lienzo.strokeRect(16,30,100,100);

//rectangulo que nos sirve para "borrar"|tapar -> clearRect(x,y,width,height)

lienzo.clearRect(220,100,60,60);

//trazos 
//lineTo(x,y) -> coordenada de un punto para trazar la linea
//lineTo(x,y) -> coordenada de un punto para indicar donde posicionarnos
//stroke() -> indica solo dibujar el contorno
//fill() -> indica rellenar la figura (no es necesario el metodo closePath() )
lienzo.strokeStyle="green"
lienzo.lineWidth=2; //propiedad que modifica el ancho de los bordes
lienzo.beginPath();
lienzo.moveTo(0,0);
lienzo.lineTo(10,20);
lienzo.lineTo(30,20);
lienzo.moveTo(10,40);
lienzo.lineTo(120,110)
lienzo.stroke();
lienzo.closePath();

//arc(x,y,r,angulo-inicio,angulo-final,direccion)
//arcTo(x1,y1,x2,y,2,r)
//quadraticCurveTo(cpx,cpy,x,y) -> 1 punto de control
//bezierCurveTo(cpx1,cpy1,cpx2,cpy2,x,y) -> 2 puntos de control

//Math.PI/180 -> 
//20 grados -> Math.PI/180*20
//180 grados -> Math.PI
//360 grados -> Math.PI*2

let grados20=Math.PI/180*20;
lienzo.strokeStyle="#FF4411"
lienzo.beginPath();
lienzo.moveTo(150,50);
lienzo.arc(150,100,40,grados20,Math.PI,false);
lienzo.stroke();
lienzo.closePath();

lienzo.fillStyle="#33199f"
lienzo.beginPath();
lienzo.moveTo(200,50);
lienzo.arcTo(200,60,300,60,40);
lienzo.lineTo(250,80);
lienzo.quadraticCurveTo(160,90,250,130)
lienzo.stroke();
lienzo.fill();

lienzo.strokeStyle="white"
lienzo.beginPath();
lienzo.moveTo(150,30);
lienzo.bezierCurveTo(200,0,220,150,250,30);
lienzo.stroke();
lienzo.closePath();

lienzo.lineWidth=1;
lienzo.strokeStyle="black";
lienzo.font="30px Hervetica";

lienzo.beginPath();
lienzo.strokeText("HOLA",100,20);
lienzo.fillText("Chau",100,80);
lienzo.closePath();

//texto 
//fillText(texto,x,y)
//strokeText(texto,x,y)
let boton=document.querySelector("button");
let moverPalabra;
boton.addEventListener("click",()=>{
    let valorY=80;
    moverPalabra=setInterval(()=>{
        lienzo.clearRect(0,0,300,300);

        lienzo.beginPath();
        lienzo.fillText("Chau",100,valorY);
        lienzo.closePath();

        valorY=valorY+5;
    },100)
})
//cree un evento que al pulsar el boton cree multiples veces la palabra Chau cada 1s



