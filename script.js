const meriendas = [
    { nombre: 'Merienda de Chocolate', precio: '$10' },
    { nombre: 'Merienda de Frutas', precio: '$8' },
    { nombre: 'Merienda de Queso y Jamón', precio: '$12' },
    { nombre: 'Merienda de Patatas Fritas', precio: '$9' },
    { nombre: 'Merienda de Yogur con Frutas', precio: '$11' }
];

const meriendasContainer = document.getElementById('menu-meriendas');
const htmlMeriendas = meriendas.map((merienda) => `
    <div class="merienda">
        <h3>${merienda.nombre}</h3>
        <p>Precio: ${merienda.precio}</p>
    </div>
`).join('');
meriendasContainer.innerHTML = htmlMeriendas;

const mostrarTamañoArregloButton = document.getElementById('mostrar-tamaño-arreglo');
mostrarTamañoArregloButton.addEventListener('click', () => {
    document.getElementById('cantidad').textContent =
        `El arreglo tiene ${meriendas.length} elementos`;
});