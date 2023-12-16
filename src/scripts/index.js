const newDiv = document.getElementById('list-box')
let offset = 0
let limit = 6


const loadMore = () => {
    offset += limit;
    loadPokemons(offset, limit)
}


function loadPokemons(offset, limit) {
    pokemonsList.getPokemons(offset, limit)
    .then((pokemons = []) => {
        pokemons.forEach((poke) => {
            newDiv.innerHTML += `
            <poke-card
                poke-image=${poke.thumbnail}
                pokename=${poke.pokename}
                height=${poke.height}
                weight=${poke.weight}
                type=${poke.type}
            ></poke-card>`
        })
    })
}


loadPokemons(offset, limit)