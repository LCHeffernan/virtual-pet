const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Fido');
        const pet2 = new Pet('Rex');
  
        expect(pet.name).toEqual('Fido');
        expect(pet2.name).toEqual('Rex');
    });
    
    it('has a initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    });

    it('has a initial hunger of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.hunger).toEqual(0);
    });

    it('has a initial fitness of 10', () => {
        const pet = new Pet('Fido');

        expect(pet.fitness).toEqual(10);
    });

    it('has children array initially with no elements', () => {
    const pet = new Pet('Fido');

    expect(pet.children.length).toEqual(0);
    });
});

describe('growUp', () => {
    it('has a method called growUp', () => {
        const pet = new Pet('Fido');

        expect(pet.growUp).toBeInstanceOf(Function);
    });

    it('increments the age by 1', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.age).toEqual(1);
    });

    it('increments the hunger by 5', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });

    it('decreases the fitness by 3', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });
});

describe('walk', () => {
    it('has a method called walk', () => {
        const pet = new Pet('Fido');

        expect(pet.walk).toBeInstanceOf(Function);
    });

    it('increases fitness by 4', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 4;
      pet.walk();
  
      expect(pet.fitness).toEqual(8);
    });

    it('make sure fitness does not go above max fitness', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 8;
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 35;
  
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
});

describe('feed', () => {
    it('has a method called feed', () => {
        const pet = new Pet('Fido');

        expect(pet.feed).toBeInstanceOf(Function);
    });

    it('decreases hunger by 3', () => {
      const pet = new Pet('fido');
  
      pet.hunger = 9;
      pet.feed();
  
      expect(pet.hunger).toEqual(6);
    });

   it('make sure hunger does not go below min hunger', () => {
      const pet = new Pet('fido');
  
      pet.hunger = 1;
      pet.feed();
  
      expect(pet.hunger).toEqual(0);
    }); 

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.hunger = 15;
  
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});



describe('checkUp', () => {
    it('has a method called checkUp', () => {
        const pet = new Pet('Fido');

        expect(pet.checkUp).toBeInstanceOf(Function);
    });

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

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.fitness = 0;
  
        expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
    });
});

describe('isAlive', () => {
    it('returns false if pet hunger is 10 or more, fitness 0 or less or age is 30 or more', () => {
        const pet = new Pet('fido');
        pet.hunger = 11;
        pet.fitness = 0;
        pet.age = 31;

        expect(pet.isAlive).toEqual(false);
    });

    it('returns true if pet hunger is less than 10 and fitness is more than 0 and age is less than 30', () => {
        const pet = new Pet('fido');
        pet.hunger = 9;
        pet.fitness = 3;
        pet.age = 6;

        expect(pet.isAlive).toEqual(true);
    });

    it('returns false if pet hunger is 10 or more, fitness 0 or less or age is 30 or more', () => {
        const pet = new Pet('fido');
        pet.hunger = 4;
        pet.fitness = 9;
        pet.age = 30;

        expect(pet.isAlive).toEqual(false);
    });
});

describe('haveBaby', () => {
    it('has a method called haveBaby', () => {
        const pet = new Pet('Fido');

        expect(pet.haveBaby).toBeInstanceOf(Function);
    });

    it('check element in children is an object', () => {
        const pet = new Pet('Fido');

        pet.haveBaby('Amelia');
  
        expect(pet.children[0]).toBeInstanceOf(Object);
    });

    it('check baby has been added to array', () => {
        const pet = new Pet('Fido');
    
        pet.haveBaby('Amelia');
    
        expect(pet.children.length).toEqual(1);
      });
    
    it('check child name in children array', () => {
        const pet = new Pet('Fido');

        pet.haveBaby('Amelia');

        expect(pet.children[0].name).toEqual('Amelia');
    });

    it('check second child is added to array', () => {
        const pet = new Pet('Fido');
    
        pet.haveBaby('Amelia');
        pet.haveBaby('Benji')
    
        expect(pet.children.length).toEqual(2);
    });

    it('check second child name in children array', () => {
        const pet = new Pet('Fido');

        pet.haveBaby('Amelia');
        pet.haveBaby('Benji')

        expect(pet.children[1].name).toEqual('Benji');
    });
});