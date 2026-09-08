alert("clase 9 uwu");
let tareas = [];
function agregarTareas(tarea="",estado="Incompleto") {
    if(tarea === ""){
    tarea = document.getElementById("tarea").value;
    estado= document.getElementById("tareaSelect").value;
    }
    tareas.push({ descripcion: tarea, completada:estado});
    
}
function eliminarTareas(indice) {
    if (indice >= 0 && indice < tareas.length) {
        tareas.splice(indice, 1);
    }else{
        console.log("Indice invalido");
    }
}
function mostrarTareas(){
    console.log("Mostrando Lista de tareas:");
    tareas.forEach((tarea,indice) =>{
        console.log(`${indice + 1}.
             [${tarea.completada }]
             ${tarea.descripcion}`);
    });
}
//Adicionar las tareas
agregarTareas("Comprar leche","Completado");
agregarTareas("Hacer ejercicio","Completado");
agregarTareas("Estudiar JavaScript","Incompleto");
agregarTareas("Subir a GitHub","Incompleto");
mostrarTareas();