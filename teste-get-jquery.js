const nomePokemon = new URLSearchParams(location.search).get('nome');
const url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;

$.get(url, function(resultado){
    console.log(resultado);

    $("#FotoPokemonFrente").attr("src", resultado.sprites.front_shiny);
    $("#FotoPokemonCostas").attr("src", resultado.sprites.back_female);

    resultado.game_indices.forEach(eleement => {
        console.log(element.game_index);

    });



});

$.get(url, function(resultado){
    
});

$.post("processar.php", { nome: "João", idade: 25 }, function(data) {
   alert("Resposta do servidor: " + data);
});