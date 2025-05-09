const estudiante = {
    nombre: 'hernan',
    edad: 20,
    carrera: 'DWFS8',
    universidad: 'UDD'
};

const agregarDataEnlocalstorage = () => {
    localStorage.setItem("estudiante", JSON.stringify(estudiante));
};

const obtenerDataDeLocalstorage = () => {
    const data = localStorage.getItem("estudiante");
    return JSON.parse(data);  // Importante: convertir a objeto
};

const mostrarData = () => {
    const data = obtenerDataDeLocalstorage();
    const cuerpoTabla = document.querySelector('tbody');
    const tr = document.createElement('tr');
    for (const propiedad in data) {
        tr.innerHTML += `<td>${data[propiedad]}</td>`;  // Mostramos valores
    }
    cuerpoTabla.appendChild(tr);
};
// Ejecutar funciones
agregarDataEnlocalstorage();
mostrarData();