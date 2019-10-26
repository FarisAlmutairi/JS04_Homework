let monkey = {
    name: "Macaca",
    species: "Barbary macaque",
    foodsEaten: ["nuts", "fruits", "seeds", "flowers"],
    eatSomething: function(thing) {
        console.log("The monkey eats " + thing);
    },
    introduce: function() {
        console.log(`This is a monkey named ${this.name} from ${this.species} species, and it has eaten ${this.foodsEaten}.`)
    }
}


console.log(monkey.name);
console.log(monkey["species"]);
console.log(monkey.foodsEaten[2]);
monkey.eatSomething("banana");
monkey.introduce();
