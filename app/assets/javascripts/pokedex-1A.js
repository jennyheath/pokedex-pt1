Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  $('<li>')
    .addClass('poke-list-item')
    .text(pokemon.name + " (" + pokemon.poke_type + ")")
    .appendTo(this.$pokeList);
};

Pokedex.RootView.prototype.refreshPokemon = function () {
  var that = this;

  this.pokes.fetch({
    success: function(collection, resp, options) {
      resp.forEach( function(el) {
        that.addPokemonToList(el);
      });
    }
  });
};
