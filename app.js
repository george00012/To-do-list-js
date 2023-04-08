const enviar = document.querySelector(".contenido-enviar");
const tarea = document.querySelector(".contenido-tarea");
const contador = document.querySelector(".contenido-contador");
const borrarTodo = document.querySelector(".contenido-eliminar");

function agregarTareas(){
    const escribirTarea = tarea.value;

    const nuevaLista = document.createElement("li");
    nuevaLista.textContent = escribirTarea;

    const lista = document.querySelector(".lista-tareas");
    lista.appendChild(nuevaLista);

    tarea.value ="";
}
enviar.addEventListener("click", agregarTareas);
tarea.addEventListener("keydown", function(event) {
    if(event.keyCode === 13){
        event.preventDefault();
        agregarTareas();
    }
});

