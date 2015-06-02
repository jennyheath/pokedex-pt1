Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  this.$pokeDetail.html("");
  var displayAttributes = $('<ul>');

  for (var key in pokemon.attributes) {
    if (key === "image_url") {
      continue;
    }

    displayAttributes
      .append($('<li>')
        .addClass('toy-list-item')
        .text(key + ": " + pokemon.get(key))
      );
  }

  var $divDetail = $('<div>').addClass('detail').append(displayAttributes);
  var $img = $('<img>').attr('src', pokemon.get("image_url"));

  this.$pokeDetail.append($divDetail.append($img));

  // toys

  $('<ul>').addClass('toys').appendTo($('div.detail'));

  var that = this;
  pokemon.fetch({
    success: function () {
      pokemon.toys().each(function (toy) {
        that.addToyToList(toy);
      });
    }
  });
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var pokeId = $(event.target).data('id');
  var pokemon = _.find(this.pokes.models, function (pokemon) {
    return pokemon.get('id') === pokeId;
  });
  this.renderPokemonDetail(pokemon);

};
