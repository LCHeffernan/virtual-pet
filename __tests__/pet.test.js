const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});

describe('constructor', () => {
    it('sets the name property', () => {
        const pet = new Pet('Fido');
  
        expect(pet.name).toEqual('Fido');
    });
});

describe('constructor', () => {
    it('has a initial age of 0', () =>{
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    });
});

describe('constructor', () => {
    it('increments the age by 1', () =>{
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.age).toEqual(1);
    });
});

describe('constructor', () => {
    it('has a initial hunger of 0', () =>{
        const pet = new Pet('Fido');

        expect(pet.hunger).toEqual(0);
    });
});

describe('constructor', () => {
    it('increments the hunger by 5', () =>{
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });
});

describe('constructor', () => {
    it('has a initial fitness of 10', () =>{
        const pet = new Pet('Fido');

        expect(pet.fitness).toEqual(10);
    });
});

describe('constructor', () => {
    it('decreases the fitness by 3', () =>{
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });
});

describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 4;
      pet.walk();
  
      expect(pet.fitness).toEqual(8);
    });
});

describe('walk', () => {
    it('make sure fitness does not go above max fitness', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 8;
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
    });
});

describe('feed', () => {
    it('decreases hunger by 3', () => {
      const pet = new Pet('fido');
  
      pet.hunger = 9;
      pet.feed();
  
      expect(pet.hunger).toEqual(6);
    });
});

describe('feed', () => {
    it('make sure hunger does not go below min hunger', () => {
      const pet = new Pet('fido');
  
      pet.hunger = 1;
      pet.feed();
  
      expect(pet.hunger).toEqual(0);
    });
});

describe('checkUp', () => {
    it('returns I need a walk when fitness is 3 or less', () => {
        const pet = new Pet('fido');

        pet.fitness = 3;

        expect(pet.checkUp()).toEqual('I need a walk');
    });
    it('returns I am hungry when hunger is 5 or more', () => {
        const pet = new Pet('fido');

        pet.hunger = 5;

        expect(pet.checkUp()).toEqual('I am hungry');
    });
    it('returns I am hungry AND I need a walk if fitness is 3 or less and hunger is 5 or more', () => {
        const pet = new Pet('fido');

        pet.hunger = 5;
        pet.fitness = 3;

        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    });
    it('returns I feel great! if fitness is more than 3 and hunger is less than 5', () => {
        const pet = new Pet('fido');

        pet.hunger = 4;
        pet.fitness = 4;

        expect(pet.checkUp()).toEqual('I feel great!');
    });
});