 //////////////////////Volume 1///////////////////////////

/* alert("Hello world!");
confirm("I love JavaScript!");
prompt("Do yoy want to learn JavaScript?"); */

/* console.log("Hello world");
console.warn("warning!!");
console.error("Error!!!"); */

/* console.log(typeof(300/2));
console.log("Hello" + "  World"); */

/* var a = 2;
var myName = "Marco";
alert(myName); */

/* var myFavoriteMovie = prompt("Waht is your favorite movie?");
alert("My favorite movie is" + " " + myFavoriteMovie ); */

/* var randNum = Math.random() * 5;
alert(randNum); */


/*var answer = prompt("What is the capital of New York?");
if (answer === "Albany"){
    alert("Yes, You are correct");
}  else if(answer === "New York city") {
   alert ("sorry," + " " + answer + " " + "is the old name of it" );
} else {
    alert ("No, sorry," + " " + answer + " " + "is completely not correct" );
} */


/* var rndNum = Math.round(Math.random()*15);
//var rndNum = 0;
if (rndNum%3 === 0 && rndNum != 0){
    alert("fizz");
} else if (rndNum%5 === 0 && rndNum != 0){
    alert("buzz");
} else if (rndNum%5 === 0 && rndNum%5 === 0){
    alert("fizzbuzz");
}
else {
    console.log(rndNum);
} */

/*






*/


/*






*/
//////////////////////Volume 2///////////////////////////

/* var sign = prompt("What is your astrological sign?").toLowerCase();
alert("Sensing.....sensing your future.");


switch(sign) {
    case "taurus":
      alert("The full hamburger moon crosses your ruling planet.");
      break;
    case "virgo":
      alert("Your emotiuons will make you feel things today.");
      break;
    case "leo":
      alert("Due to the energy of the changing moon there is a high likelyhood that ....");
      break;
    default:
      alert("Please enter a valid sign!");
      break;

}
 */


/* for (var i = 0; i <= 20; i++){
    if (i%3 === 0){
        if (i%5 === 0){
            console.log("fizzbuzz");
        } else {
            console.log("fizz");        
        } 
    }else if (i%5 === 0){
        console.log("buzz");
    }else {
        console.log(i);
    }
} */

/* var i = 0;
do { 
    console.log(i);
    i++;
} while (i<11);
 */

/* var i=0;
while (i<11){
    console.log(i);
    i++;
 } */


 //////Cheersup///////

/* var sad = confirm("would you like to be cheered up?");

while (sad){

    alert("What do you call a boomerang that doesn't come back?.... A stick!");
    var yes = confirm("Would you like to continue our session?");

    if (yes){

        var response = prompt("Tell me about your troubles:", "Type your feelingg here...");
        
        if (response){
            alert("I am sorry, you are feeling down about that!");
            sad = false;
        }

    } else {
        sad = false;
    }
} */




/* function sayHello(name){
    console.log("Hi " + name + ", How are you going?");
}
sayHello("Marco"); */



/* function calculateArea(side1,side2){
    console.log(side1 * side2);
}
calculateArea(10,40); */


/* function randomNumber () {
    console.log(Math.random());
}
randomNumber(); */


/* var friends = ["Marco", "Bahar", "Miro","Azadeh"];
friends.push("Saeb");
friends.push("Atieh");
function greetFriends(){
    for (var i = 0; i < friends.length; i++ ){
        console.log("Hi " + friends[i]); 
    }
}
greetFriends(); */


/* var beginninScenarios = ["You wake up in a hospital.",
"You are standing in an open field west of a white house.",
"You see a small convenience store up ahead and decide to loot it for goods."];
 */

/* function randomNumber(range){
    return Math.round(Math.random()* range);
}

alert(beginninScenarios[randomNumber(beginninScenarios.length-1)]);

var weaponList = ["shovel","crossbow","baseball bat","rubber chicken"];

var weapon = weaponList[ randomNumber(weaponList.length - 1)];

alert("Being that it is the zombie apocalypse, you decide to search for a weapon first. After surveying your surroundings you notice and grab a" + weapon + ".");

var survival = randomNumber(2);

if (survival === 0){
    alert("The zombie bites you, You lose!!!");
} else if (survival>0){
    alert("You kill the zombie with your" + " " + weapon + ". You win!!!" );
} */


/* var coffeeFlavor = "espresso";
var coffeeTemperature = "piping hot";
var coffeeOunces  = 100;
var coffeeMilk = true; */

//////////

/* var myCoffee = {
    flavor: "espresso",
    temperature: "piping hot",
    ounce: 100,
    milk: true,
    reheat: function(){
        if (myCoffee.temperature === "luckwarm") {
            myCoffee.temperature = "piping hot";
            alert("Your coffee has been reheated!");
         }
     }
};

//alert(myCoffee.ounce);

//myCoffee.temperature = "cold";
myCoffee["temperature"] = "luckwarm";
myCoffee.reheat(); */

///////////

/* var Mark = {
    name: "Mark",
    tshirtColor: "navy blue",
}

function Friend (name, tshirtColor){
    this.name = name;
    this.tshirtColor = tshirtColor;
}

var Lisa = new Friend("Lisa", "red");
var Denny = new Friend("Denny", "green");

alert(Denny.name);

 */


 /* function Friend(name){
     this.name = name;
 }

 alert(this); */



/* function sayHello(){
    alert("Hello");
}

window.sayHello();

function alert(){
    console.log("Hello");
}
alert(); */

/* var example = 2;
var example = "example";

alert(example); */

/////////////


/* alert("Hello Wrold!");
function lameJoke() {
    var randomNumber = Math.round(Math.random() * 2);
    if (randomNumber === 1) {
        alert("How many tickles does it take to make an octopus laugh? Ten tickles");
    } else if (randomNumber === 2) {
        alert("Why did the scarecrow win an award? Because he was outstanding in his field.");
    } else {
        alert("Why did the chicken cross the road? To get the other side");
    }
}
lameJoke(); */


function display() {
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'object') 
        displayObject(arguments[i])
      else
        displayValue(arguments[i], true)
    }
  }
  
  function displayObject(object) {
    if (object === null)
      displayValue('null')
    displayValue(getTypeName(object) + ' {')
    for(var propertyName in object) {
      if (propertyName != 'constructor') {
        displayValue(propertyName + ': ' + object[propertyName], false, true);
      }
    }
    displayValue('}', true)
  }
  
  function displayValue(value, addMargin, addPadding) {
    var div = document.createElement('div');
    div.style.fontSize='32px'
    if (addMargin)
      div.style.marginBottom='30px'
    if (addPadding)
      div.style.paddingLeft='30px'
    div.innerText = value;
    document.body.appendChild(div)
  }
  
  function getTypeName(object) {
     var funcNameRegex = /function (.{1,})\(/;
     var results = (funcNameRegex).exec(object.constructor.toString());
     return (results && results.length > 1) ? results[1] : "";
  }


///////////////////////////

//'use strict';

/* var cat = {
    name: 'Fluffy',
    color: 'White',
    speak: function(){
        display("Meeeoooww");
    }

    }

cat.age = 3;
/* cat.speak = {
    function(){
        display("Meeeoooww");
    }
} */

/* display(cat.name);
display(cat.color);
display(cat.age);
cat.speak();
 */


///////////////////////////
/* 'use strict';

 function Cat(name, color){
     this.name = name;
     this.color = color;
 }

 var myCat = new Cat("Fluffy","White");
 var myCat1 = new Cat("foo","Red");
 

 display(myCat);
 display(myCat1); */


 ///////////////////////////


 /* 'use strict';
 var cat = Object.create(Object.prototype,
    {
        name: {
            value: 'Fluffy',
            enumerable: true,
            writable: true,
            onfigurable: true
        },
        color: {
            value: 'White',
            enumerable: true,
            writable: true,
            onfigurable: true
        }
    });
    display(cat); */

/*'use strict';

 class Cat {
    constructor (name, color) {
        this.name = name;
        this.color = color;
        }

    speak(){
        display("Meeowww");
    }
}

var myCat = new Cat("Fluffy","White");

display(myCat);
myCat.speak();
 */



////////////////////////////////////

/* 'use strict';

var cat = {
    name: {first: 'Fluffy', last: 'Jalili'},
    color: 'White'
} */

/* cat['age'] = 13;
display(cat);
display(cat['color']);
 */

/* Object.defineProperty(cat, 'name' , {writable: false});
Object.freeze(cat.name);
cat.name.first = 'Scratchy';
display(cat.name);
display(Object.getOwnPropertyDescriptor(cat, 'name')); */


//Object.defineProperty(cat, 'name', {configurable: false});
//Object.defineProperty(cat, 'name', {enumerable: false});

/* for (var propertyName in cat){
    display(propertyName + ':' + cat[propertyName]);
} */

//display(Object.keys(cat));
//display(JSON.stringify(cat));
//display(cat['name']);
//delete cat.name;
//display(cat.name);




//////Get and Set/////////////////////////

/* 'use strict';

var cat = {
    name: {first: 'Fluffy', last: 'Jalili'},
    color: 'White'
}


Object.defineProperty(cat, 'fullName', 
  {
      get: function() {
        return this.name.first + ' ' +this.name.last;
      },
      set: function(value){
        var nameParts = value.split(' ');
        this.name.first = nameParts[0];
        this.name.last = nameParts[1];
      }
  })
cat.fullName = 'Muffin Top';
display(cat.fullName);
display(cat.name.first);
display(cat.name.last);
 */



///////////////////////////////

/* var arr = new Array('red','blue','green');
//var last = arr[arr.length-1];
Object.defineProperty(Array.prototype,'last',{get: function(){
    return this[this.length-1];
}});

var last = arr.last;
display(last);

var arr2 = ['yellow','brown','black'];
display(arr2.last);

display(Array); */


/* var myFunc = function() {}
display(myFunc.prototype);

var cat = {name: 'Fluffy'};
//display(cat.prototype);
display(cat.__proto__); */

//-------------
/* 'use strict';

function cat(name,color){
    this.name = name;
    this.color = color;
} 
var fluffy = new cat('Fluffy','White');
//display(cat.prototype);
cat.prototype.age = 4;

//display(myCat);
//display(cat.prototype);
//display(myCat.__proto__);
//display(cat.prototype === myCat.__proto__);

var muffin = new cat('Muffin','Yellow');

//display(urCat.__proto__);
fluffy.age = 5;
display(fluffy.age);
//display(muffin.age);
display(fluffy.__proto__.age);
display(Object.keys(fluffy));
display(fluffy.hasOwnProperty('age')); */
//---------------

/* 'use strict';


function Animal(voice){
    this.voice = voice || 'grant';
}

// Animal has a speak function
Animal.prototype.speak = function (){
    display(this.voice);
}

function Cat(name,color){
    Animal.call(this, 'Meow');
    this.name = name;
    this.color = color;
}

// Assign Animal as the prototype for the Cat function 
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

var fluffy = new Cat('Fluffy','White');

//fluffy.speak();
//display(fluffy.hasOwnProperty('speak()'));
//display(fluffy instanceof Animal);
display(fluffy.__proto__.__proto__); */


///////////////////////////////

/* 'use strict';

class Animal {

    constructor(voice){
        this.voice = voice || 'grunt';
    }

    speak(){
        display(this.voice);
    }
}

class Cat extends Animal{
    constructor(name,color){
        super('Meow');
        this.name = name;
        this.color = color;
    }
}

var fluffy = new Cat('Fluffy', 'White');
//fluffy.speak();
//display(fluffy);
display(Object.keys(fluffy.__proto__.__proto__));
display(fluffy.__proto__.__proto__.hasOwnProperty('speak'));

*/


///////////////////////////////
