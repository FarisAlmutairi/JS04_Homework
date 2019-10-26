  // 'Calender'
  // Description: Our app shows calender days.
  // Every 'day' has
  // - a name
  // - a date
  // - an event
  // Every 'day' can
  // - alert
  // - brake????????
  // - park????????


  var pet_owner;

  pet_owner = {
      name: 'Owner',
      Description: 'We are making an app for a veterinary clinic - it manages pets\' vaccinations',
      owner: {
          name: "Pet Owner",
          address: "New York"
      }
  }

var some_pet;

some_pet = {
    name: 'Pet',
    Description: 'We are making an app for a veterinary clinic - it manages pets\' vaccinations',
    owner: {
        name: "Pet Owner",
        species: "Cats",
        breed: "Unkonwn",
        noise: "meow",
        makeNoise: function() {
            console.log("The pet is " + this.noise + "ing!");
        }
    }
}

some_pet.owner.makeNoise();

