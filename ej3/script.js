const elementos = [
    { nombre: 'Fruta 1', categoria: 'frutas' },
    { nombre: 'Juego 2', categoria: 'juegos' },
    { nombre: 'Pendiente 3', categoria: 'pendientes' },
    { nombre: 'Fruta 4', categoria: 'frutas' },
    { nombre: 'Juego 5', categoria: 'juegos' },
    { nombre: 'Pendiente 6', categoria: 'pendientes' }
];


const listadoContainer = document.getElementById('listado');
const htmlElementos = elementos.map((elemento) => `
    <div class="elemento" data-categoria="${elemento.categoria}">
        <h3>${elemento.nombre}</h3>
    </div>
`).join('');
listadoContainer.innerHTML = htmlElementos;


const mostrarTodosButton = document.getElementById('mostrar-todos');
mostrarTodosButton.addEventListener('click', () => {
    const elementosArray = Array.from(listadoContainer.children);
    elementosArray.forEach((elemento) => {
        elemento.classList.remove('oculto');
    });
});


const filtroButtons = document.querySelectorAll('.boton-filtro');
filtroButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const categoria = button.id.replace('mostrar-', '');
        const elementosArray = Array.from(listadoContainer.children);
        elementosArray.forEach((elemento) => {
            if (categoria === elemento.dataset.categoria) {
                elemento.classList.remove('oculto');
            } else {
                elemento.classList.add('oculto');
            }
        });
    });
});
