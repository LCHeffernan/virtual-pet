const minFitness = 0;
const maxFitness = 10;
const minHunger = 0;
const maxHunger = 10;
const maxAge = 30;
const fitnessBreakPoint = 3;
const hungerBreakPoint = 5;
const ageIncrement = 1;
const hungerIncrement = 5;
const fitnessReduction = 3;
const feedReduction = 3;
const exerciseIncrement = 4;
const petDeadMessage = "Your pet is no longer alive :(";
const hungryAndWalkMessage = "I am hungry AND I need a walk";
const walkMessage = "I need a walk";
const hungryMessage = "I am hungry";
const allHappyMessage = "I feel great!";

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = minHunger;
  this.fitness = maxFitness;
  this.children = [];
}

Pet.prototype = {
  get isAlive() {
    return (
      this.age < maxAge && this.hunger < maxHunger && this.fitness > minFitness
    );
  },
};

Pet.prototype.growUp = function () {
  if (!this.isAlive) {
    throw new Error(petDeadMessage);
  }
  this.age += ageIncrement;
  this.hunger += hungerIncrement;
  this.fitness -= fitnessReduction;
};

Pet.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error(petDeadMessage);
  }
  this.fitness = Math.min((this.fitness += exerciseIncrement), maxFitness);
};

Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw new Error(petDeadMessage);
  }
  this.hunger = Math.max((this.hunger -= feedReduction), minHunger);
};

Pet.prototype.checkUp = function () {
  if (!this.isAlive) {
    throw new Error(petDeadMessage);
  }
  if (this.fitness <= fitnessBreakPoint && this.hunger >= hungerBreakPoint) {
    return hungryAndWalkMessage;
  }
  if (this.fitness <= fitnessBreakPoint) {
    return walkMessage;
  }
  if (this.hunger >= hungerBreakPoint) {
    return hungryMessage;
  } else {
    return allHappyMessage;
  }
};

Pet.prototype.haveBaby = function (babyName) {
  const child = new Pet(babyName);

  this.children.push(child);
};

module.exports = {
  minFitness,
  maxFitness,
  minHunger,
  maxHunger,
  maxAge,
  fitnessBreakPoint,
  hungerBreakPoint,
  ageIncrement,
  hungerIncrement,
  fitnessReduction,
  feedReduction,
  exerciseIncrement,
  petDeadMessage,
  hungryAndWalkMessage,
  walkMessage,
  hungryMessage,
  allHappyMessage,
  Pet,
};