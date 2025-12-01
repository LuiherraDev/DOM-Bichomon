// console.log(document.title); 
// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
const titleGen1 = document.querySelector("#gen-1")
titleGen1.textContent = "Generasión 1 Pokimon"

// 2. Cambia el color de fondo de la primera generación de Pokimon.
const firstGeneration = document.querySelector(".infocard-list")
// console.log(typeof firstGeneration,firstGeneration)
firstGeneration.style.backgroundColor = "#ffff99"

// 3. Imprime por consola la URL de la página.
console.log(document.URL)

// 4. Imprime por consola el dominio de la página.
console.log(document.domain)

// 5. Imprime todos los nodos de imagen.
console.log(document.childNodes)

// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
const allImages = document.querySelectorAll("img")
allImages.forEach(image => {
    image.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif" 
});

// *Premium:*

// 7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`
const allInfocardTextMuted = document.querySelectorAll(".text-muted")
const allTextFlying = document.querySelectorAll(".flying")
allTextFlying.forEach(flying => {
    flying.parentElement.parentElement.style.backgroundColor = "#9999FF"
});




