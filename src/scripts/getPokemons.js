const pokemonsList = []

function convertToPokemon(pokeDetails) {
    const pokemon = new Pokemon()
    const types = pokeDetails.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.id = pokeDetails.id
    pokemon.pokename = pokeDetails.name
    pokemon.thumbnail = pokeDetails.sprites.other.dream_world.front_default
    pokemon.types = types
    pokemon.type = type
    pokemon.height = pokeDetails.height / 10
    pokemon.weight = pokeDetails.weight
    pokemon.abilities = pokeDetails.abilities

    return pokemon
}

pokemonsList.detailed = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then((newPokemon) => convertToPokemon(newPokemon))
}

pokemonsList.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
    .then((response) => response.json())
    .then((jsonResponse) => jsonResponse.results)
    .then((pokemons) => pokemons.map(pokemonsList.detailed))
    .then((details) => Promise.all(details))
    .then((pokemonsDetails) => pokemonsDetails)
    .catch((err) => {
        console.log(err.message)
    })
}