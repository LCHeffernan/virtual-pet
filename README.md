# Virtual Pet.
___
## Description.
This was my first JavaScript project, which was tested using Jest, the tests can be found in the \_\_tests__ folder. I created a GUI for this project which is in a different repo [here](https://github.com/LCHeffernan/virtual-pet-gui)

A virtual pet is created and needs to be kept alive with interactions from the user, namely by being fed and exercised. The pet can also have children.
___

## Download and setup.
This project has the following dependencies: JavaScript, Jest and Node. To download the project:
* Fork the repository.
* Clone down your fork using ```git clone```
* Change directory into your cloned folder and run ``` npm install ```
* You can run the program in node REPL using the command ```node```
* To make the program available in REPL type ```const Pet = require('./src/pet');```
* Firstly create a pet using ```const myPetName = new Pet('myPetName');```, you can choose any name for your pet just replace myPetName with your choice of name. For example, if you wanted to call you pet rex, type ```const rex = new Pet('rex');``` (I will refer to my pet as rex throughout the instructions). At any point if you want to see your pet's stats type ```rex;```

## Using virtual pet
The aim is to keep your pet alive. Your pet will die under the following conditions:
* your pet's hunger reaches 10. 
* your pet's fitness reaches 0. 
* your pet's age reaches 30. 

Every time your pet has a birthday they will become hungry and start to become unfit. Their hunger will increase by 5 and their fitness decrease by 3. Feeding them will decrease hunger by 3 and walking them will increase fitness by 4.
To check on your pet's status, type ```rex.checkUp();```. This will tell you if you need to feed your pet, walk your pet or if you can give your pet a birthday without the risk of it dying (if the message "I feel great!" appears).
* To feed your pet, type ```rex.feed();```
* To walk your pet, type ```rex.walk();```
* To age your pet, type ```rex.growUp();```

Your pet can also have children, to do this, type ```rex.haveBaby('babyName');```. Again you can choose a name for the baby by replacing babyName. Your pet can have as many children as you want. You can interact with any children in a similar way to your original pet. For example:
* to see your pet's children, type ```rex.children;```
* to feed a child, type ```rex.children[0].feed();```
* to walk a child, type ```rex.children[0].feed();```
* to age a child, type ```rex.children[0].growUp();```
```children[0]``` refers to the first child in the ```rex.children``` array. To interact with a different child just change the number in the square brackets (0 refers to the first child, 1 refers to the second child etc).
___
## Author.
Lisa Heffernan

* Twitter [@Iisaheffernan](https://twitter.com/Iisaheffernan)
* GitHub [@LCHeffernan](https://github.com/LCHeffernan)
* LinkedIn [Lisa Heffernan](https://www.linkedin.com/in/lisa-heffernan-54b61312a)