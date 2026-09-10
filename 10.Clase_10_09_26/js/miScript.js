let estudiantes = [];

function agregarTareas() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fecha = document.getElementById("fecha").value;
    if (nombre === "" || apellido === "" || fecha === "") {
        alert("Por favor complete todos los campos");
        return;
    }
    estudiantes.push({
        nombre: nombre,
        apellido: apellido,
        fecha: fecha
    });
    let resultado = "";
    estudiantes.forEach((estudiante, indice) => {
        resultado += `
            ${indice + 1}. <br>
            Nombre: ${estudiante.nombre}<br>
            Apellido: ${estudiante.apellido}<br>
            Fecha de nacimiento: ${estudiante.fecha}<br><br>
        `;
    });
    document.getElementById("respuesta").innerHTML = resultado;
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("fecha").value = "";
}
function eliminarTareas() {
    estudiantes = [];
    document.getElementById("respuesta").innerHTML = "";

}