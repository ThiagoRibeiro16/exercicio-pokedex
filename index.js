const PokemonSorteado = () => {
    const sorteio = Math.round(Math.random()* 151) + 1;
    const imgPokemon = `https://pokeapi.co/api/v2/pokemon/${sorteio}`
    return imgPokemon;

}



const novoPokemon = (pokemon) => {
    const imagem = document.getElementById("fotoPokemon");
    const nomePokemon = document.getElementById("nome");

    imagem.src = pokemon.sprites.other["official-artwork"].front_default;
       
    nomePokemon.innerHTML = pokemon.name;

}

const iniciar = async() => {
    const url = PokemonSorteado();
    const response = await fetch(url);
    const result = await response.json();
    novoPokemon(result);
    
};

document.addEventListener('DOMContentLoaded', iniciar);