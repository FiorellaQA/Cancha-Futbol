var contenedorPrincipal = createElement("div","contenedorPrincipal");

var contenedor = createElement("div","contenedor");
var arco1 = createElement("div","arcoRight");
var arco2 = createElement("div","arcoLeft");
var circle = createElement("div","circle");
var balon1 = createElement("div","balon1");
var balon2 = createElement("div","balon2");
var balon3 = createElement("div", "balon3");


document.body.appendChild(contenedorPrincipal);

contenedorPrincipal.appendChild(contenedor);
contenedor.appendChild(arco1);
contenedor.appendChild(arco2);
contenedor.appendChild(circle);
contenedor.appendChild(balon1);
contenedor.appendChild(balon2);
contenedor.appendChild(balon3);


function createElement(element, cls){
	var newElement = document.createElement(element);
		newElement.classList.add(cls);
		return newElement;
}



