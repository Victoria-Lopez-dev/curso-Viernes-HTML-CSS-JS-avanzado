let audio=document.querySelector("audio");
let botonPausa=document.querySelector("#pausa");
let botonPlay=document.querySelector("#play");
let video=document.querySelector("video");


//metodos audio/video
//play() -> inicia/retoma la reproduccion
//pause() -> pausa la reproduccion
//propiedades :
//duration -> duracion del audio/video en segundos
//currentTime -> tiempo actual de reproduccion en segundos
//muted -> booleano que indica si el audio/video esta silenciado o no
let intervalo;//variable global

botonPlay.addEventListener("click",()=>{
    video.play();
    console.dir(video)
    let duracionTotal=document.querySelector("#total");
  
    //tiempo total del video
   let duracionEditada=editarDuracion(video.duration);//editamos la duracion del vido
    duracionTotal.textContent=duracionEditada;//la agregamos al html.
   

    // tiempo actual del video
    let duracionActual=document.querySelector("#actual");
    
    //cada 1 segundo actualizamos el tiempo actual del video
    intervalo=setInterval(()=>{
        duracionActual.textContent=editarDuracion(video.currentTime);//editamos la duracion actual del video
        console.log(video.currentTime);
    },1000)
});

botonPausa.addEventListener("click",()=>{
    video.pause();
   //pausar el intervalo que actualiza el tiempo actual del video
    clearInterval(intervalo)
});
/* condicional if/else
 if(condicion){
        //si se cumple la condicion -> true
    }else{
        //si no se cumple la condicion -> false
    }
*/

const mostrarAudio=()=>{
    let duracionAudio=audio.duration;
    console.dir(duracionAudio)
    let minutos=duracionAudio/60 
    console.log(minutos.toFixed(0));

    let segundos=duracionAudio%60;
    console.log(segundos.toFixed(0))
    /* resto % */

}
//funcion que transforma la duracion de un video/audio en formato minutos:segundos
const editarDuracion=(duracionMultimedia)=>{
    if(duracionMultimedia<60){
        return `00:${duracionMultimedia.toFixed(0)}`;
    }else{
        let minutos=duracionMultimedia/60;
        let segundos=duracionMultimedia%60;
        return `${minutos.toFixed(0)}:${segundos.toFixed(0)}`;        
    }
}

//funcion que quiero que se ejecute cada un cierto tiempo - metodo de JS 
//setInterval -> metodo que cada un cierto intervalo de tiempo ejecuta una funcion
//sintaxis -> setInterval(()=>{},ms)

//clearInterval -> metodo que detiene la ejecucion de una funcion que se ejecuta cada un cierto intervalo de tiempo("corta" el setInterval)
//le pasamos como parametro el setInterval que queremos detener
//sintaxis -> clearInterval(setInterval(()=>{},ms))