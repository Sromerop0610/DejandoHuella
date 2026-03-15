let animales = JSON.parse(localStorage.getItem("animales")) || [];

const formulario = document.getElementById("AnadirAnimal");

if(formulario){

    formulario.addEventListener("submit", function(event){
        event.preventDefault();

        const nombre = formulario.nombre_animal.value.trim();
        const edad = parseInt(formulario.edad_animal.value);
        const sexo = formulario.sexo.value;
        const tipo = formulario.tipo_animal.value;

        let valid = true;

        if(nombre.length < 2){
            const input = formulario.nombre_animal;
            input.classList.add("error-input");
            input.nextElementSibling.textContent = "El nombre debe tener al menos 2 caracteres";
            valid = false;
        } else {
            formulario.nombre_animal.classList.add("valid-input");
        }

        if(edad <= 0 || edad >= 20){
            const input = formulario.edad_animal;
            input.classList.add("error-input");
            input.nextElementSibling.textContent = "La edad debe estar entre 1 y 19";
            valid = false;
        } else {
            formulario.edad_animal.classList.add("valid-input");
        }

        if(!valid) return;

        const animal = {
            nombre: nombre,
            edad: edad,
            sexo: sexo,
            tipo: tipo
        };

        animales.push(animal);

        localStorage.setItem("animales", JSON.stringify(animales));
    });

}


// Mostrar los animales guardados

document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("animales-dinamicos");

    if(!contenedor) return;

    const animales = JSON.parse(localStorage.getItem("animales")) || [];

    animales.forEach(animal => {

        const article = document.createElement("article");
        article.classList.add("animal-article");

        article.innerHTML = `
            <figure>
                <img class="animal-article__img" src="./assets/images/sin-imagen.webp" alt="Animal sin foto">
                <figcaption>${animal.nombre}</figcaption>
            </figure>

            <h4 class="animal-article__nombre">${animal.nombre}</h4>
            <p class="animal-article__data">Sexo: ${animal.sexo}</p>
            <p class="animal-article__data">Edad: ${animal.edad}</p>
            
            <button class="borrar-animal boton">Eliminar</button>
        `;

        const botonEliminar = article.querySelector(".borrar-animal");

        botonEliminar.addEventListener("click", () => {if(confirm("¿Seguro que quieres eliminar este animal?")){

            let animales = JSON.parse(localStorage.getItem("animales")) || [];

            const animalesFiltrados = animales.filter(
                a => a.nombre !== animal.nombre
            );

            localStorage.setItem("animales", JSON.stringify(animalesFiltrados));

            article.remove();
        }

        });

        contenedor.appendChild(article);

    });
    // Buscador de animales
    const inputBusqueda = document.getElementById("busqueda");
    if(inputBusqueda){
        inputBusqueda.addEventListener("input", () => {
            const texto = inputBusqueda.value.toLowerCase().trim();
            const articulos = document.querySelectorAll("#animales-dinamicos .animal-article");

            articulos.forEach(article => {
                const nombre = article.querySelector(".animal-article__nombre").textContent.toLowerCase();
                if(nombre.includes(texto)){
                    article.style.display = "";
                } else {
                    article.style.display = "none";
                }
            });
        });
    }
});