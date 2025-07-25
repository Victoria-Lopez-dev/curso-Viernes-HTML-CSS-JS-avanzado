const mostrarProductos=()=>{

    //actializacion de productos en canasto de compra
   let productosJSON=localStorage.getItem("producto");
   let productos= JSON.parse(productosJSON)
    console.log(productos)
    if(productos.length ==0 || productosJSON == null){
        document.querySelector("h2").textContent="No tiene productos en el canasto de compra"
    }else{
        let ul=document.querySelector("ul");
        for(let producto of productos){
            let item=document.createElement("li");
            item.textContent=`producto : ${producto.nombre} de valor $${producto.precio}`;
            ul.appendChild(item)
        }        
    }
    //actualizacion del tema

    let tema=localStorage.getItem("tema");
    let body=document.body;
    if(tema == "noche"){
        body.classList.add("fondo");
    }
}