Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  $('<li>')
    .addClass('poke-list-item')
    .data('id', pokemon.get('id'))
    .text(pokemon.get('name') + " (" + pokemon.get('poke_type') + ")")
    .appendTo(this.$pokeList);
};

Pokedex.RootView.prototype.refreshPokemon = function () {
  var that = this;

  this.pokes.fetch({
    success: function(collection) {
      collection.forEach( function(el) {
        that.addPokemonToList(el);
      });
    }
  });
};
