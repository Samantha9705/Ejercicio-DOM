//Se puede acceder a los elementos del HTML 

// a veces cuando no puede establecer las propiedades de null, es porque la etiqueta esta mal referenciada 
console.log(document.getElementById ("encabezado1")); 
let btnMostrar = document.getElementById("btnMostrar");
let encabezado2 = document.getElementById ("encabezado2");
let listas = document.getElementsByTagName ("ul");
let elementos = document.getElementsByClassName("list-group-item");
let otroElemento = document.querySelector("ul>li");
let otrosElementos = document.querySelectorAll("ul>li");//regresa una coleccion 

console.log(encabezado1.innerText);
console.log (listas.length);
console.log(listas.item(1));
console.log (elementos.length);
console.log(elementos.item(1))

btnMostrar.addEventListener("click", function(event){
    event.preventDefault(); //no hagas lo que haces por defecto 
        let element =  document.createElement("li");
        element.innerText="another item";
        element.classList.add("list-group-item");

let element2 = element.cloneNode(true);

        //listas.item(0).before(element);
        //listas.item(0).prepend(element2);
       // listas.item(0).append(element);
        //listas.item(0).after(element2);
    //console.log ("boton btnmostrar presionado");
   // listas.item(1).insertAdjacentElement("afterbegin", element)
   // listas.item(1).insertAdjacentElement("beforeend", element2)

    listas.item(1).insertAdjacentHTML("afterbegin", `<li class="list-group-item"> After begin item</li>`);
    listas.item(1).insertAdjacentHTML("beforebegin", `<li class="list-group-item"> Before begin item</li>`);
    listas.item(1).insertAdjacentHTML("afterend", `<li class="list-group-item"> After end item</li>`);
    listas.item(1).insertAdjacentHTML("beforeend", `<li class="list-group-item"> Before end item</li>`);
    

});



let contador = 0;

function modifica(){
    //modificando el dom
   // encabezado1.innerText = "Dom text"; //cambia el texto 
    encabezado2.innerHTML = "<del> Dom text</del>"; //cambia el formato del texto, como si lo hiciera en el html

}