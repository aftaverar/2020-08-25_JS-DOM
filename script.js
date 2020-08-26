/*alert*/

function mensaje() {

    alert ("Hola mundo!!!");

}

/*promt*/

function cajitaDeTexto() {
    var nombre = prompt("Ingrese su nombre");
    document.write("<h1> Su nombre es " + nombre + "</h1>");
}

/*confirm*/

function confirmar(){
    var respuesta= confirm ("Esta seguro que quiere eliminar el archivo?");

    if (respuesta == true) {
        alert("Archivo eliminado correctamente!!");
        
    } else {
        alert("Archivo NO eliminado");        
    }
}

/*console*/
function consola() {
    console.log ("Estas viendo un mensaje secreto e la consola")
}

/*Get element by ID*/

var imagen= document.getElementById("imagenPaisaje");

imagen.addEventListener("click", ()=>{
    /*ejemplo de alert*/
    /*alert("Soy el DOM");*/ 
    
    /*cambiar tamaño y borde, modifica el CSS*/
    imagen.style.width="1000px"
    imagen.style.border= "5px solid black" 
})
 /* mouse*/

  /*document.getElementById("box")
 addEventListener("mouseenter", ()=>{
     box.classList.replace("box","cambio1")
 })
 es lo mismo
 */
 var box= document.getElementById("box")
 box.addEventListener("mouseenter",()=>{
     box.classList.replace("box","cambio1")
 }) 
 /*el primer parametro es la clase existente (box) o 
 actual y el segundo parametro es la que lo va 
 a reemplazar(cambio1)*/
 
/*box.addEventListener("mouseleave",()=>{
    box.classList.replace("cambio","box")
})   hace lo mismo, pero al reves*/

box.addEventListener("mousemove",()=>{
    console.log("El mouse se esta moviendo")
})

box.addEventListener("mousedown", ()=>{
    console.log("Has dado click dentro del box")
})
box.addEventListener("mouseup", ()=>{
    console.log("Has levantado el click dentro del box")
})

/*Teclado*/
var teclado= document.getElementById("teclado");
teclado.addEventListener("keydown",()=>{
    console.log("Has oprimido una tecla")
})

teclado.addEventListener("keypress",()=>{
    console.log("Has oprimido una tecla")
})
teclado.addEventListener("keyup",(e)=>{
    console.log(e.key)

    /* if(e.key.toLowerCase()== "w") {
        alert("Vas hacia adelante")
    }
     es lo mismo que abajo
    */

    if(e.key== "w" || e.key== "W") {
        alert("Vas hacia adelante")
    }
})
/*objeto evento*/
var padre=document.getElementById("padre");
padre.addEventListener("click",(e)=>{
    console.log(e.target.textContent)
    /*el evento tiene un target y se 
    le saca la info de textContent*/
    e.target.style.background="green"
    /*se toma el evento y se cambia 
    el css para el color de fondo.*/

    /*si se necesita cambiar una clase asi
    e.target.classList.add("color")*/
})

/* crear elementos dentro de un nodo o etiqueta*/
var lista= document.getElementById("lista");
var agregar= document.getElementById("agregar")

agregar.addEventListener("click", ()=>{
    var texto=document.getElementById("texto").value;
/*me trae el texto o ifoo ingresado dentro del input*/
    var etiqueta=document.createElement("li");
/*creo etiqueta*/
    etiqueta.textContent= texto;
/*asignamos el valor dentro de la etiqueta, inserto el texto que tiene input*/
    lista.appendChild(etiqueta);
/*agregamos la etiqueta a la lista o nodo */
})