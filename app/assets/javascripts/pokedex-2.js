Pokedex.RootView.prototype.addToyToList = function (toy) {
  var $toyAttrs = $('<li>').addClass('toy-list-item')
                           .data('toy-id', toy.attributes.id)
                           .data('pokemon-id', toy.attributes.pokemon_id)
                           .text( "name: " + toy.attributes.name +
                                  "happines: " + toy.attributes.happiness +
                                  "price: " +    toy.attributes.price);

    $toyAttrs.appendTo(this.$pokeDetail);
};

Pokedex.RootView.prototype.renderToyDetail = function (toy) {
  this.$toyDetail.html("");

  var $toyImage = $('<img>')
    .addClass('detail')
    .attr('src', toy.attributes.image_url);
  this.$toyDetail.append($toyImage);
};

Pokedex.RootView.prototype.selectToyFromList = function (event) {
  var toyId = $(event.target).data('toy-id');
  var pokeId = $(event.target).data('pokemon-id');

  var owner = _.find(this.pokes.models, function(pokemon) {
    return pokemon.attributes.id === pokeId;
  });
  var toy = _.find(owner.toys().models, function(toy) {
    return toy.attributes.id === toyId;
  });

  this.renderToyDetail(toy);

};
