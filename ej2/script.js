const tarjetas = [
    { nombre: 'Pelicula 1', descripcion: 'La mejor película de la historia' },
    { nombre: 'Juego 2', descripcion: 'El juego más divertido del mundo' },
    { nombre: 'Canción 3', descripcion: 'La canción más popular del año' },
    { nombre: 'Comida 4', descripcion: 'La comida más deliciosa de la ciudad' }
];


const tarjetasContainer = document.getElementById('tarjetas');
const htmlTarjetas = tarjetas.map((tarjeta, indice) => `
    <div class="tarjeta" data-index="${indice}">
        <h3>${tarjeta.nombre}</h3>
        <p>${tarjeta.descripcion}</p>
    </div>
`).join('');
tarjetasContainer.innerHTML = htmlTarjetas;


let contadorSeleccionadas = 0;
const contadorSeleccionadasSpan = document.getElementById('contador-seleccionadas');


const tarjetasArray = Array.from(tarjetasContainer.children);
tarjetasArray.forEach((tarjeta) => {
    const tarjetaElemento = tarjeta;
    tarjeta.addEventListener('click', () => {
        if (tarjeta.classList.contains('seleccionada')) {
            tarjeta.classList.remove('seleccionada');
        } else {
            tarjeta.classList.add('seleccionada');
        }

        const index = parseInt(tarjeta.dataset.index);
        if (index !== -1) {
            if (tarjeta.classList.contains('seleccionada')) {
                contadorSeleccionadas++;
            } else {
                contadorSeleccionadas--;
            }
            contadorSeleccionadasSpan.textContent = contadorSeleccionadas;
        }
    });
});
