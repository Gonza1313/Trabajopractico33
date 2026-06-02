const elementos = [
    { nombre: 'Fruta 1', categoria: 'frutas' },
    { nombre: 'Juego 2', categoria: 'juegos' },
    { nombre: 'Pendiente 3', categoria: 'pendientes' },
    { nombre: 'Fruta 4', categoria: 'frutas' },
    { nombre: 'Juego 5', categoria: 'juegos' },
    { nombre: 'Pendiente 6', categoria: 'pendientes' }
];

const listadoContainer = document.getElementById('listado');

function mostrarElementos(lista) {
    listadoContainer.innerHTML = lista.map(elemento => `
        <div class="elemento">
            <h3>${elemento.nombre}</h3>
        </div>
    `).join('');
}


mostrarElementos(elementos);

document.getElementById('mostrar-todos').addEventListener('click', () => {
    mostrarElementos(elementos);
});

document.querySelectorAll('.boton-filtro').forEach(button => {
    button.addEventListener('click', () => {
        const categoria = button.id.replace('mostrar-', '');

        const filtrados = elementos.filter(elemento =>
            elemento.categoria === categoria
        );

        mostrarElementos(filtrados);
    });
});
