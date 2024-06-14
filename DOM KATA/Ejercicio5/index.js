//* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
//* que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

function PrintArray (a) {
    ul = document.createElement("ul");
    for (const element of a) {
      li = document.createElement("li");
      li.textContent += element;
      ul.appendChild(li)
    }
    document.body.appendChild(ul)
}

PrintArray(albums)