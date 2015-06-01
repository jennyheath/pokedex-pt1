Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  var displayAttributes = "";

  for (var key in pokemon.attributes) {
    console.log(key, pokemon.attributes[key]);
    displayAttributes += key;
    displayAttributes += pokemon.attributes[key];
  }


  this.$pokeDetail
    .append(  $('<div>')
                .addClass('detail')
                .text(displayAttributes)
                .append(  $('<img>')
                          .attr('src', pokemon.attributes.image_url)));
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
};
