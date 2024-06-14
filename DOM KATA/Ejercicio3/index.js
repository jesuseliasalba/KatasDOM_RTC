//* 1.1 Basandote en el array siguiente, crea una lista ul > li 
//* dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let ul1_1 = document.createElement("ul");
for (const country of countries) {
    let li = document.createElement("li");
    li.textContent += country;
    ul1_1.appendChild(li);
}

document.body.appendChild(ul1_1);

//* 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

// let eliminar = document.querySelector(".fn-remove-me") 

document.querySelector(".fn-remove-me").remove();

//* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//* en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let ul1_3 = document.createElement("ul");
for (const car of cars) {
    let li = document.createElement("li");
    li.textContent += car;
    li.setAttribute('selected','data-function="printHere"');
    ul1_3.appendChild(li);
}

document.body.appendChild(ul1_3);
 
//* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
//* h4 para el titulo y otro elemento img para la imagen.
const countries1_4 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const countrie of countries1_4) {
    div = document.createElement("div");
    h4 = document.createElement("h4");
    img = document.createElement("img");

    h4.textContent += countrie.title;
    img.src += countrie.imgUrl;

    div.appendChild(h4);
    div.appendChild(img);
    document.body.appendChild(div);
}

//* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//* elemento de la serie de divs.

button = document.createElement("button");
button.textContent = "Eliminar ultimo div";
button.addEventListener("click", removelastdiv);
document.body.appendChild(button);

function removelastdiv(){
    let body_divs = document.querySelectorAll("div");
    let last_div = body_divs[body_divs.length-1]
    last_div.parentNode.removeChild(last_div);
}


//* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//* divs que elimine ese mismo elemento del html.

allDivsRemove = document.querySelectorAll("div")

for (const div of allDivsRemove) {
    const button = document.createElement("button");
    button.textContent = "Elimíname!"
    button.addEventListener("click", (a) => a.target.parentElement.remove())
    div.appendChild(button);
}