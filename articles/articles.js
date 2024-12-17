// Array de objetos para tener la información.
const tarjetas = [
    {
        titulo: "Título 1",
        descripcion: "Descripción breve de la tarjeta 1.",
        imagen: "https://via.placeholder.com/150",
        enlace: "https://www.ejemplo1.com"
    },
    {
        titulo: "Título 2",
        descripcion: "Descripción breve de la tarjeta 2.",
        imagen: "https://via.placeholder.com/150",
        enlace: "https://www.ejemplo2.com"
    },
    {
        titulo: "Título 3",
        descripcion: "Descripción breve de la tarjeta 3.",
        imagen: "https://via.placeholder.com/150",
        enlace: "https://www.ejemplo3.com"
    },
    {
        titulo: "Título 4",
        descripcion: "Descripción breve de la tarjeta 4.",
        imagen: "https://via.placeholder.com/150",
        enlace: "https://www.ejemplo4.com"
    }
];

// Function crear tarjetas de mi array.
function agregarTarjetas() {
    const contenedor = document.querySelector('.container'); // toma la etiqueta de mi html.

    tarjetas.forEach(tarjeta => {

        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <div class="card_image">
                <img src="${tarjeta.imagen}" alt="${tarjeta.titulo}" class="picture">
            </div>
            <div class="card_body">
                <h2>${tarjeta.titulo}</h2>
                <p>${tarjeta.descripcion}</p>
            </div>
            <div class="card_footer">
                <a href="${tarjeta.enlace}" class="btn">Leer más</a>
            </div>
        `;

        contenedor.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', agregarTarjetas);
