//* 1.1 Inserta dinamicamente en un html un div vacio con javascript.

document.body.appendChild(document.createElement("div"))

//* 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let div1_2 = document.createElement("div")
div1_2.appendChild(document.createElement("p"))
document.body.appendChild(div1_2)

//* 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
//* 	loop con javascript.

let div1_3 = document.createElement("div")
for (let i = 0; i < 6; i++) {
    let p = document.createElement("p")
    let text = document.createTextNode(i);
    p.appendChild(text)
    div1_3.appendChild(p)
}
document.body.appendChild(div1_3)

//* 1.4 Inserta dinamicamente con javascript en un html una p con el 
//* 	texto 'Soy dinámico!'.

let p1_4 = document.createElement("p")
p1_4.textContent += "Soy dinámico";
document.body.appendChild(p1_4)

//* 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let h21_5 = document.querySelector(".fn-insert-here");
h21_5.textContent += "Wubba Lubba dub dub";

//* 1.6 Basandote en el siguiente array crea una lista ul > li con 
//* los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let ul1_6 = document.createElement("ul")

for (const app of apps) {
    let li = document.createElement("li")
    let p = document.createElement("p")
    p.textContent += app
    li.appendChild(p)
    ul1_6.appendChild(li)
}

document.body.appendChild(ul1_6)


//* 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let elementstodelete = document.querySelectorAll(".fn-remove-me");

elementstodelete.forEach( elemento => {
elemento.remove();
}
);

//* 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//* 	Recuerda que no solo puedes insertar elementos con .appendChild.

let p1_8 = document.createElement("p")
p1_8.textContent += "¡Voy en medio!"
let div1_8 = document.querySelectorAll("div")

document.body.insertBefore(p1_8, div1_8[1])

//* 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
//* 	.fn-insert-here


divSearch = document.querySelectorAll("div.fn-insert-here")

divSearch.forEach( div => {
    let p = document.createElement("p");
    p.textContent += "Voy dentro!";
    div.appendChild(p)
});
