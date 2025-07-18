//API (Aplication Programing Interfase )
//APIs HTMl5 incluidas -Canvas - Geolocation - Drag&drop -Web Storage 
//y otras externas (Formspree - Giphy - rick&morty - Spotify-)- en la unidad 8 vemos como se consumen con asincronia

//Geolocalizacion - ubicar el dispositivo
//siempre con permiso del usuario 

//metodos 
// getCurrentPosition()
//watchPosition()

const funcionOk=(position)=>{
    alert("Se logro encontrar la ubicacion")
    console.log(position)
    document.querySelector("p").textContent=`El dispositivo se encuentra en la latitud ${position.coords.longitude} y longitud ${position.coords.latitude} con un margen de error de ${position.coords.accuracy} metros`

    console.log(typeof position.coords.latitude)
};
const funcionError=(error) =>{
    alert("no se pudo encontrar la ubicacion")
    console.log(error)


    switch (error.code) {
        case 1:
            document.querySelector("p").textContent="Se nos es necesario que permita ubicarlo,por lo que le pedimos que permita la busqueda"
            break;

         case 2:
            document.querySelector("p").textContent="No pudimos ubicarlo,pruebe mas tarde..."
            break;

        case 3:
            document.querySelector("p").textContent="Se agoto el tiempo! Le pedimos que se comunique con el desarrollador para que amplie el plazo de tiempo de busqueda"
            break;
        default:
            console.log("Codigo de error no indentificado... ")
            break;
    }
};

const ObjConfiguracion={
    enableHightAccuracy:true, //booleano para indicar si quiero minimizar al maximo el margen de error 
    //timeout:30 valor en ms(milisegundos)-> tiempo limite de busqueda
   // maximumAge  valor en milisegundos -> tiempo entre cada llamado 
};
navigator.geolocation.getCurrentPosition(funcionOk,funcionError,ObjConfiguracion);
//calback -> funcion que se ejecuta como consecuencia de otra, en una fila luego de terminada una funcion .Funcion que se pasa como parametro de otra 

//geolocalizacion detecta 3 tipos de errores
// 1 -el usuario no permitio ubicarlo
// 2 - no lo pudo encontrar 
// 3 - no hubo tiempo suficiente
