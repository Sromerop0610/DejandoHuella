let animales = [];

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

    if(!valid) return; // si hay algún error, no seguimos

    const animal = {
        nombre: nombre,
        edad: edad,
        sexo: sexo,
        tipo: tipo
    };

    animales.push(animal);

    console.log(JSON.stringify(animales));
});