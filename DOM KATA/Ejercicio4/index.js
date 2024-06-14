//* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//* evento click que ejecute un console log con la información del evento del click

function BtnConsLog () {
    button = document.createElement("button");
    button.id += "btnToClick";
    button.textContent += "Console.log"
    information = document.querySelector(".click");
    
    button.addEventListener("click", () => {
        console.log(information.value);
        information.value = "";
    });
    
    information.insertAdjacentElement('afterend', button);
}

BtnConsLog()

//* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

function FocusOnInput () {
    info = document.querySelector(".focus");
    info.addEventListener("focus", () => {
        console.log(info.value); 
        info.value = "";
    });
}

FocusOnInput()

//* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

function InputOnInput () {
    info = document.querySelector(".value");
    info.addEventListener("input", () => {
        console.log(info.value)
        info.value = "";
    })
}

InputOnInput()