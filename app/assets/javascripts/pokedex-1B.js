Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  this.$pokeDetail.html("");
  var displayAttributes = $('<ul>');

  for (var key in pokemon.attributes) {
    if (key === "image_url") {
      continue;
    }

    displayAttributes
      .append($('<li>')
        .text(key + ": " + pokemon.get(key))
      );
  }

  this.$pokeDetail
    .append(  $('<div>')
                .addClass('detail')
                .append(displayAttributes)
                .append(  $('<img>')
                          .attr('src', pokemon.get("image_url"))
                        )
            );
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var pokeId = $(event.target).data('id');
  var pokemon = _.find(this.pokes.attributes, function (pokemon) {
    return pokemon.id === pokeId;
  });
  this.renderPokemonDetail(pokemon);
};
