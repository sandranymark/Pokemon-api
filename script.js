

async function fetchData() {
    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();



        const response = await fetch(`https:pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if (!response.ok) {
            throw new Error("KAN INTE HITTA");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite")



        const markup = `<li>${data.name}</li>`;
        document.querySelector('ul').insertAdjacentHTML('beforeend', markup);




        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        const errorMessageElement = document.getElementById("errorMessage");
        errorMessageElement.style.display = "none";

    } catch (error) {
        console.error(error);
        const errorMessageElement = document.getElementById("errorMessage");
        errorMessageElement.textContent = "Pokémon med det namnet existerar inte.";
        errorMessageElement.style.display = "block";
    }
}


