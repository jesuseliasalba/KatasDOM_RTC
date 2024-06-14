//* Utiliza el array para crear dinamicamente una lista ul > li 
//* de elementos en el div de html con el atributo data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

function PrintArray (array) {
    ul = document.createElement("ul");
    for (const element of array) {
        li = document.createElement("li");
        li.setAttribute("data-function","printHere")
        li.textContent += element;
        ul.appendChild(li)
        }
    document.body.appendChild(ul)
};

PrintArray(places)