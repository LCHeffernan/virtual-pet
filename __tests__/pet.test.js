const {
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
} = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });

  it("sets the name property", () => {
    const pet = new Pet("Fido");
    const pet2 = new Pet("Rex");

    expect(pet.name).toEqual("Fido");
    expect(pet2.name).toEqual("Rex");
  });

  it(`has a initial age of 0`, () => {
    const pet = new Pet("Fido");

    expect(pet.age).toEqual(0);
  });

  it(`as a initial hunger of ${minHunger}`, () => {
    const pet = new Pet("Fido");

    expect(pet.hunger).toEqual(minHunger);
  });

  it(`has a initial fitness of ${maxFitness}`, () => {
    const pet = new Pet("Fido");

    expect(pet.fitness).toEqual(maxFitness);
  });

  it("has children array initially with no elements", () => {
    const pet = new Pet("Fido");

    expect(pet.children.length).toEqual(0);
  });
});

describe("growUp", () => {
  it("has a method called growUp", () => {
    const pet = new Pet("Fido");

    expect(pet.growUp).toBeInstanceOf(Function);
  });

  it(`increments the age by ${ageIncrement}`, () => {
    const pet = new Pet("Fido");
    pet.growUp();

    expect(pet.age).toEqual(0 + ageIncrement);
  });

  it(`increments the hunger by ${hungerIncrement}`, () => {
    const pet = new Pet("Fido");
    pet.growUp();

    expect(pet.hunger).toEqual(minHunger + hungerIncrement);
  });

  it(`decreases the fitness by ${fitnessReduction}`, () => {
    const pet = new Pet("Fido");
    pet.growUp();

    expect(pet.fitness).toEqual(maxFitness - fitnessReduction);
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.age = maxAge;

    expect(() => pet.growUp()).toThrow(petDeadMessage);
  });
});

describe("walk", () => {
  it("has a method called walk", () => {
    const pet = new Pet("Fido");

    expect(pet.walk).toBeInstanceOf(Function);
  });

  it(`increases fitness by ${exerciseIncrement}`, () => {
    const pet = new Pet("fido");
    pet.fitness = maxFitness - 2 * fitnessReduction;
    pet.walk();

    expect(pet.fitness).toEqual(
      maxFitness - 2 * fitnessReduction + exerciseIncrement
    );
  });

  it(`make sure fitness does not go above ${maxFitness}`, () => {
    const pet = new Pet("fido");
    pet.fitness = maxFitness - 2;
    pet.walk();
    expect(pet.fitness).toEqual(maxFitness);
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.age = maxAge + 1;

    expect(() => pet.walk()).toThrow(petDeadMessage);
  });
});

describe("feed", () => {
  it("has a method called feed", () => {
    const pet = new Pet("Fido");

    expect(pet.feed).toBeInstanceOf(Function);
  });

  it(`decreases hunger by ${feedReduction}`, () => {
    const pet = new Pet("fido");
    pet.hunger = maxHunger - 1;
    pet.feed();

    expect(pet.hunger).toEqual(maxHunger - 1 - feedReduction);
  });

  it(`make sure hunger does not go below ${minHunger}`, () => {
    const pet = new Pet("fido");
    pet.hunger = minHunger;
    pet.feed();

    expect(pet.hunger).toEqual(minHunger);
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.hunger = maxHunger + 1;

    expect(() => pet.feed()).toThrow(petDeadMessage);
  });
});

describe("checkUp", () => {
  it("has a method called checkUp", () => {
    const pet = new Pet("Fido");

    expect(pet.checkUp).toBeInstanceOf(Function);
  });

  it(`returns "${walkMessage}" when fitness is ${fitnessBreakPoint} or less`, () => {
    const pet = new Pet("fido");
    pet.fitness = fitnessBreakPoint;

    expect(pet.checkUp()).toEqual(walkMessage);
  });

  it(`returns "${hungryMessage}" when hunger is ${hungerBreakPoint} or more`, () => {
    const pet = new Pet("fido");
    pet.hunger = hungerBreakPoint;

    expect(pet.checkUp()).toEqual(hungryMessage);
  });

  it(`returns "${hungryAndWalkMessage}" if fitness is ${fitnessBreakPoint} or less and hunger is ${hungerBreakPoint} or more`, () => {
    const pet = new Pet("fido");
    pet.hunger = hungerBreakPoint;
    pet.fitness = fitnessBreakPoint;

    expect(pet.checkUp()).toEqual(hungryAndWalkMessage);
  });

  it(`returns "${allHappyMessage}" if fitness is more than ${fitnessBreakPoint} and hunger is less than ${hungerBreakPoint}`, () => {
    const pet = new Pet("fido");
    pet.hunger = hungerBreakPoint - 1;
    pet.fitness = fitnessBreakPoint + 1;

    expect(pet.checkUp()).toEqual(allHappyMessage);
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.fitness = minFitness;

    expect(() => pet.checkUp()).toThrow(petDeadMessage);
  });
});

describe("isAlive", () => {
  it(`returns false if pet hunger is ${maxHunger} or more, fitness ${minFitness} or less or age is ${maxAge} or more`, () => {
    const pet = new Pet("fido");
    pet.hunger = maxHunger + 1;
    pet.fitness = minFitness;
    pet.age = maxAge + 1;

    expect(pet.isAlive).toEqual(false);
  });

  it(`returns true if pet hunger is less than ${maxHunger} and fitness is more than ${minFitness} and age is less than ${maxAge}`, () => {
    const pet = new Pet("fido");
    pet.hunger = maxHunger - 1;
    pet.fitness = minFitness + 1;
    pet.age = maxAge - 1;

    expect(pet.isAlive).toEqual(true);
  });

  it(`returns false if pet hunger is ${maxHunger} or more, fitness ${minFitness} or less or age is ${maxAge} or more`, () => {
    const pet = new Pet("fido");
    pet.hunger = minHunger + 1;
    pet.fitness = maxFitness - 1;
    pet.age = maxAge;

    expect(pet.isAlive).toEqual(false);
  });
});

describe("haveBaby", () => {
  it("has a method called haveBaby", () => {
    const pet = new Pet("Fido");

    expect(pet.haveBaby).toBeInstanceOf(Function);
  });

  it("check element in children is an object", () => {
    const pet = new Pet("Fido");
    pet.haveBaby("Amelia");

    expect(pet.children[0]).toBeInstanceOf(Object);
  });

  it("check baby has been added to array", () => {
    const pet = new Pet("Fido");
    pet.haveBaby("Amelia");

    expect(pet.children.length).toEqual(1);
  });

  it("check child name in children array", () => {
    const pet = new Pet("Fido");
    pet.haveBaby("Amelia");

    expect(pet.children[0].name).toEqual("Amelia");
  });

  it("check second child is added to array", () => {
    const pet = new Pet("Fido");
    pet.haveBaby("Amelia");
    pet.haveBaby("Benji");

    expect(pet.children.length).toEqual(2);
  });

  it("check second child name in children array", () => {
    const pet = new Pet("Fido");
    pet.haveBaby("Amelia");
    pet.haveBaby("Benji");

    expect(pet.children[1].name).toEqual("Benji");
  });
});