Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  var pokemon = new Pokedex.Models.Pokemon({});
  console.log(pokemon);
  pokemon.save(attrs, {
    success: function () {
      this.pokes.add(pokemon);
      this.addPokemonToList(pokemon);
      callback(pokemon);
    }.bind(this)
  });
};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
  event.preventDefault();
  console.log(event);
  this.createPokemon(   $(event.target).serializeJSON().pokemon,
                        this.renderPokemonDetail.bind(this))
};
