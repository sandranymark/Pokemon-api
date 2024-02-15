

async function fetchData() {
    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if (!response.ok) {
            throw new error("KAN INTE HITTA");
        }


        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite")

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




























//Promise... NÄR VAR HUR VARFÖR?

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// .then(response => {

//     if(!response.ok){
//         throw new Error ("Kunde inte hitta data")
//     }
//     return response.json();
// })
// .then (data => console.log(data))
// .catch(error => console.error(error))