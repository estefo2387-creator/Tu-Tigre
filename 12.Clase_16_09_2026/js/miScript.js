const ListaDeEstudiantes = [
    { nro: 1, nombre: "Juan", apellido: "Pérez", edad: 20, fechaNacimiento: "15/03/2006", genero: "Masculino" },
    { nro: 2, nombre: "María", apellido: "Gómez", edad: 19, fechaNacimiento: "20/07/2007", genero: "Femenino" },
    { nro: 3, nombre: "Carlos", apellido: "Justiniano", edad: 21, fechaNacimiento: "10/01/2005", genero: "Masculino" },
    { nro: 4, nombre: "Ana", apellido: "Fernández", edad: 18, fechaNacimiento: "25/05/2008", genero: "Femenino" },
    { nro: 5, nombre: "Luis", apellido: "Martínez", edad: 20, fechaNacimiento: "12/09/2006", genero: "Masculino" },
    { nro: 6, nombre: "Sofía", apellido: "López", edad: 19, fechaNacimiento: "08/11/2007", genero: "Femenino" },
    { nro: 7, nombre: "Diego", apellido: "García", edad: 22, fechaNacimiento: "18/02/2004", genero: "Masculino" },
    { nro: 8, nombre: "Camila", apellido: "Torres", edad: 18, fechaNacimiento: "30/06/2008", genero: "Femenino" },
    { nro: 9, nombre: "Pedro", apellido: "Vargas", edad: 21, fechaNacimiento: "05/04/2005", genero: "Masculino" },
    { nro: 10, nombre: "Valeria", apellido: "Mendoza", edad: 20, fechaNacimiento: "22/12/2005", genero: "Femenino" }
];

function mostrarEstudiantes() {
    const datos = document.getElementById("datos");

    datos.innerHTML = "";

    ListaDeEstudiantes.forEach(estudiante => {
        datos.innerHTML += `
            <tr>
                <td>${estudiante.nro}</td>
                <td>${estudiante.nombre}</td>
                <td>${estudiante.apellido}</td>
                <td>${estudiante.fechaNacimiento}</td>
                <td>${estudiante.edad}</td>
                <td>${estudiante.genero}</td>
            </tr>
        `;
    });
}

function agregarTareas() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fecha = document.getElementById("fecha").value;
    let genero = document.getElementById("genero").value;

    if (nombre === "" || apellido === "" || fecha === "" || genero === "") {
        alert("Por favor complete todos los campos");
        return;
    }

  
    let nuevoNro = ListaDeEstudiantes.length + 1;

  
    let fechaNacimiento = new Date(fecha);
    let hoy = new Date();

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    let mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    let fechaFormateada = fechaNacimiento.toLocaleDateString("es-ES");

 
    ListaDeEstudiantes.push({
        nro: nuevoNro,
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        fechaNacimiento: fechaFormateada,
        genero: genero
    });


    mostrarEstudiantes();

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("genero").value = "";
}

function eliminarTareas() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("genero").value = "";
}


mostrarEstudiantes();