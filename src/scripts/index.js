const newDiv = document.getElementById('list-box')
let offset = 0
let limit = 6

const mountCard = (poke) => {
    console.log(poke.thumbnail)
    return `
            <div class="poke-card" id="${poke.id}">
                <img src="${poke.thumbnail}" alt="${poke.pokename} card">
                <section class="poke-data">
                    <h3>${poke.pokename}</h3>
                    <span>type: ${poke.type}</span>
                    <span>height: ${poke.height}</span>
                    <span>weight: ${poke.weight}</span>
                </section>  
            </div>
            `
}

const loadMore = () => {
    offset += limit;
    loadPokemons(offset, limit)
}


function loadPokemons(offset, limit) {
    pokemonsList.getPokemons(offset, limit)
    .then((pokemons = []) => {
        pokemons.forEach((poke) => {
            newDiv.innerHTML += mountCard(poke)
        })
    })
}


loadPokemons(offset, limit)