//POO - paradigma de programacion orientada a objetos 

//autos
//molde y apartir de este genero instancias de este ("copias"), que son los objetos en si

//moldes - clases
class Auto{
    //caracteristicas

    constructor(cantPuertas,marca){
        this.ruedas=4;
        this.puertas=cantPuertas
        this.volante='standar';
        this.marca=marca
    }//funcion que se ejecuta apenas se crea la instancia.

    //comportamientos -> capacidades/acciones que puede hacer 
    andar(){
        console.log('auto en movimiento...')
    }
    cargarCombustible(){
        console.log('cargando combustible...')
    }

}
//creo instancias (objetos )
let auto1= new Auto(3,"Fiat");

let auto2=new Auto(5,"Honda");
console.log(auto1,auto2)
//console.log(auto1.ruedas)
auto1.andar()
auto2.cargarCombustible()


// Veterinaria 
let listaPacientes=[];

class Veterinaria{

}
class Administrativo{
    constructor(correo,usuario,nombre,dias){
        this.correo=correo;
        this.nombre=nombre;
        this.usuario=usuario;
        this.dias=dias
    }

    cobrar(){
        console.log(`${this.nombre} esta haciendo el cobro`)
    }
    agregarPacientesEnLista(paciente){
        listaPacientes.push(paciente)
    }
}

let personal1= new Administrativo("juan@veterinaria.com","juan","Juan Perez", ["Lunes","Miercoles","Viernes"])
let personal2= new Administrativo("marta@veterinaria.com","marta","Marta Ruiz", ["Martes","Jueves"])

console.log(personal1,personal2);

personal2.agregarPacientesEnLista("firulais")
console.log(listaPacientes)
personal1.cobrar()
personal2.cobrar()