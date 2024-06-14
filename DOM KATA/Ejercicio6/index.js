//* Elimina el elemento que tenga la clase .fn-remove-me

function DeleteWithClass () {
    select = document.querySelectorAll(".fn-remove-me")
    for (const element of select) {
        element.parentNode.removeChild(element)
    }
}

DeleteWithClass()