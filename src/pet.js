const maxFitness = 10;
const minHunger = 0;
const fitnessBreakPoint = 3;
const hungerBreakPoint = 5;

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

Pet.prototype.checkUp = function() {
    if (this.fitness <= fitnessBreakPoint && this.hunger >= hungerBreakPoint){
        return 'I am hungry AND I need a walk'
    }
    else if(this.fitness <= fitnessBreakPoint){
        return 'I need a walk';
    }
    else if (this.hunger >= hungerBreakPoint){
        return 'I am hungry';
    }
    else {
        return 'I feel great!';
    }
}

module.exports = Pet;