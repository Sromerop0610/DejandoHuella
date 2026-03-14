let animales = JSON.parse(localStorage.getItem("animales")) || [];

const formulario = document.getElementById("AnadirAnimal");

formulario.addEventListener("submit", function(event){
    event.preventDefault();


    const nombre = formulario.nombre_animal.value.trim();
    const edad = parseInt(formulario.edad_animal.value);
    const sexo = formulario.sexo.value;
    const tipo = formulario.tipo_animal.value;

    let valid = true;

    // Validar nombre
    if(nombre.length < 2){
        const input = formulario.nombre_animal;
        input.classList.add("error-input");
        input.nextElementSibling.textContent = "El nombre debe tener al menos 2 caracteres";
        valid = false;
    } else {
        formulario.nombre_animal.classList.add("valid-input");
    }

    // Validar edad
    if(edad <= 0 || edad >= 20){
        const input = formulario.edad_animal;
        input.classList.add("error-input");
        input.nextElementSibling.textContent = "La edad debe estar entre 1 y 19";
        valid = false;
    } else {
        formulario.edad_animal.classList.add("valid-input");
    }

    // Control de errores
    if(!valid) return;

    // Guardar animal
    const animal = {
        nombre: nombre,
        edad: edad,
        sexo: sexo,
        tipo: tipo
    };

    animales.push(animal);

    localStorage.setItem("animales", JSON.stringify(animales));

    console.log(JSON.stringify(animales));
});


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
                <img class="animal-article__img" src="assets/images/sin-imagen.jpg" alt="Animal sin foto">
                <figcaption>${animal.nombre}</figcaption>
            </figure>

            <h4 class="animal-article__nombre">${animal.nombre}</h4>
            <p class="animal-article__data">Sexo: ${animal.sexo}</p>
            <p class="animal-article__data">Edad: ${animal.edad}</p>
        `;

        contenedor.appendChild(article);

    });

});
