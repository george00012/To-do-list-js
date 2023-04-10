const enviar = document.querySelector(".contenido-enviar");
const tarea = document.querySelector(".contenido-tarea");
const contadorTarea = document.querySelector(".contenido-contador");
const borrarTodo = document.querySelector(".contenido-eliminar");
const lista = document.querySelector(".contenido-lista-tareas");
let contar = 0;


function agregarTareas() {
    /*tarea*/
    const escribirTarea = tarea.value;
    const nuevaLista = document.createElement("li");
    nuevaLista.classList.add("listaAñadida");
    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "";
    eliminarBtn.classList.add("eliminarLista");
    eliminarBtn.addEventListener("click", () => {
        lista.removeChild(nuevaLista);
        contar--;
        contadorTarea.textContent = `Hay ${contar} tarea${plural(contar)}`;
        if (contar == 0) {
            contadorTarea.textContent = `No tienes tareas`;
        }
    });

    nuevaLista.textContent = escribirTarea + " ";
    nuevaLista.appendChild(eliminarBtn);
    lista.appendChild(nuevaLista);
    tarea.value = "";

    /*contador*/
    contar++;
    contadorTarea.textContent = `Hay ${contar} tarea${plural(contar)}`;

    /*eliminar todo*/
    borrarTodo.addEventListener("click", () => {
        lista.innerHTML = "";
        contadorTarea.innerHTML = `No tienes tareas`;
        contar = 0;
    });
}

enviar.addEventListener("click", agregarTareas);
tarea.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        agregarTareas();
    }
});

function plural(cantidad) {
    if (cantidad != 1) {
        return "s";
    } else {
        return ""
    }
}
