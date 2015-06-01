json.partial!("pokemon", :pokemon => @pokemon, :toys => @toys)
# json.extract! @pokemon, :created_at, :updated_at

# { "id":1,
#   "attack":125,
#   "defense":100,
#   "image_url":"/assets/pokemon_snaps/127.png",
#   "moves":["vicegrip"],
#   "name":"Pinsir",
#   "poke_type":"bug" }
