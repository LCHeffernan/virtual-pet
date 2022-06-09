const maxFitness = 10;
const minHunger = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    this.fitness += 4;
    if (this.fitness > maxFitness){
        this.fitness = maxFitness;
    }
}

Pet.prototype.feed = function() {
    this.hunger -= 3;
    if (this.hunger < minHunger){
        this.hunger = minHunger;
    }
}
module.exports = Pet;