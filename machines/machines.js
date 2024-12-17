// Array de objetos para tener la información.
const tarjetas = [
    {
        titulo: "Blazorized",
        descripcion: "Máquina de HTB, toca Active Directoy.",
        imagen: "https://labs.hackthebox.com/storage/avatars/3ad1911c18a46af0d6967aef8521989c.png",
        enlace: "HTB/Blazorized.html"
    },
    {
        titulo: "BoardLight",
        descripcion: "Máquina de HTB, toca...",
        imagen: "https://labs.hackthebox.com/storage/avatars/7768afed979c9abe917b0c20df49ceb8.png",
        enlace: "HTB/BoardLight.html"
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
