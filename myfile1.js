//           https://www.toptal.com/javascript/interview-questions

//------------------------------------------------------------------------------------------------------
//What is a potential pitfall with using typeof bar === "object"

//var bar = null; // null is also an object
//var bar = []; // array is also an object
//var bar = '';
// var bar = function(){
//     console.log('I am a function');
// };

// console.log((bar !== null) && ((typeof bar === 'object') || (typeof bar === 'function')));

// console.log('toString.call=', toString.call(bar))
// console.log('typeof=', typeof bar)
// console.log('constructor=', bar.constructor)
// console.log('Array.isArray=', Array.isArray(bar))

//-----------------------------------------------------------------------------------------------------
//Q. What will the code below oput to the console and why?

// (function(){
//  var a = b = 3;
// })();

// // But in fact, var a = b = 3; is actually shorthand for:
// // b = 3; // b becomes a global varialbe since there is no var keyword and the function is not in strict mode
//             //b would throw error in strict mode as undefined
// // var a = b;

// //console.log('a = ', a); // this would be undefined
// console.log('b = ', b);
// console.log('a defined? ' + (typeof a !== 'undefined' ));
// console.log('b defined? ' + (typeof b !== 'undefined' ));

//--------------------------------------------------------------------------------------------------

// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo); //this no longer reference myObject and would result in undefined
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();

//---------------------------------------------------------------------------------------------------

// function foo1(){
//     return {
//         bar: "hello"
//     };
// }


// function foo2(){
//     return {
//         bar: "hello"
//     };
// }
// console.log('foo1', foo1());
// console.log('foo2', foo2());
// console.log('foo1 & foo2 are same?', foo1() === foo2())

//----------------------------------------------------

// // For one thing, although NaN means “not a number”, its type is, believe it or not, Number:
// console.log(typeof NaN === "number");  // logs "true"

// // Additionally, NaN compared to anything – even itself! – is false:
// console.log(NaN === NaN);  // logs "false"

// //ES6 offers a new Number.isNaN() function, which is a different and more reliable than the 
// //old global isNaN() function.

//----------------------------------------------
// console.log(0.1 + 0.2); //numbers in javascript are float and not precise by default
// console.log((0.1 + 0.2) === 0.3) //this will would be false

// //A typical solution is to compare the absolute difference between two numbers with 
// //the special constant Number.EPSILON:

// function areTheNumbersAlmostEqual(num1, num2) {
//  return Math.abs(num1 - num2) < Number.EPSILON;
// }
// console.log('using special constant Number.EPSILON:')
// console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3))
// console.log(areTheNumbersAlmostEqual(2.50, 2.5))


//-------------------------------------------------------------------
// //Discuss possible ways to write a function isInteger(x) that determines if x is an integer.
// function isInteger(x){
//     return (x^0) === x;
// }
// console.log(isInteger(44)) //true
// console.log(isInteger(4.4)) //false

// // ECMAScript 6,
// console.log(Number.isInteger(3))

//-------------------------------------------------------------------------
//Write a simple function (less than 160 characters) that returns a boolean indicating whether 
//or not a string is a palindrome.
// function isPalindrome(str){
//     str = str.replace(/\W/g, '').toLowerCase();
//     console.log('str:', str);
//     console.log(str.split('').reverse().join(''));
//     return (str == str.split('').reverse().join(''));
// }

// // console.log(isPalindrome("level"));                   // logs 'true'
// // console.log(isPalindrome("levels"));                  // logs 'false'
//  console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'

//-------------------------------------------------------------------------------
// Write a sum method which will work properly when invoked using either syntax below.

// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

// //METHOD 1
// function sum(x) {
//     if(arguments.length == 2) {
//         return arguments[0] + arguments[1];
//     }else {
//         return function(y) { return y + x};
//     }
// }

// //METHOD 2
// function sum(x, y){
//  if(y !== undefined){
//     return x + y;
//  } else {
//      return function(y){ return y + x};
//  }
// }

// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5


//--------------------------------------------------------------------
// Assuming d is an “empty” object in scope, say:

// var d = {};
// // …what is accomplished using the following code?

// [ 'zebra', 'horse' ].forEach(function(k) {
// 	d[k] = undefined;
// });

// console.log(d)

//---------------------------------------------------------------------

//What will the code below output to the console and why?

// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

//What will the code below output to the console and why ?
//-----------------------------------------------------------------------------------
// console.log(1 +  "2" + "2");
// console.log(1 +  +"2" + "2");
// console.log(1 +  -"1" + "2");
// console.log(+"1" +  "1" + "2");
// console.log( "A" - "B" + "2");
// console.log( "A" - "B" + 2);


// The following recursive code will cause a stack overflow if the array list is too large. 
// How can you fix this and still retain the recursive pattern?
// -----------------------------------------------------------------------------------------------------------
/*
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};

*/

//The potential stack overflow can be avoided by modifying the nextListItem function as follows:

// var list = readHugeList();

// var nextListItem = function() {
//     var item = list.pop();

//     if (item) {
//         // process the list item...
//         setTimeout( nextListItem, 0);
//     }
// };

/*
The stack overflow is eliminated because the event loop handles the recursion, not the call stack. 
When nextListItem runs, if item is not null, the timeout function (nextListItem) is pushed to the 
event queue and the function exits, thereby leaving the call stack clear. When the event queue runs 
its timed-out event, the next item is processed and a timer is set to again invoke nextListItem. 
Accordingly, the method is processed from start to finish without a direct recursive call, so the 
call stack remains clear, regardless of the number of iterations.
*/
//-----------------------------------------------------------------------------------------------------
//What is a “closure” in JavaScript? Provide an example.

//A closure is an inner function that has access to the variables in the outer (enclosing) function’s scope chain.

//Example
// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';
      
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//     console.log(
//         "outerArg = " + outerArg + "\n" +
//         "innerArg = " + innerArg + "\n" +
//         "outerVar = " + outerVar + "\n" +
//         "innerVar = " + innerVar + "\n" +
//         "globalVar = " + globalVar);
    
//     })(456);
// })(123);


//-----------------------------------------------------------------------
// for (var i = 0; i < 5; i++) {
// 	setTimeout(function() { console.log(i); }, i * 1000 );
// }
// it will display 5, 5, 5, 5, and 5
// The reason for this is that each function executed within the loop will be executed after 
// the entire loop has completed and all will therefore reference the last value stored in i, which was 5.


// Closures can be used to prevent this problem by creating a unique scope for each iteration, 
// storing each unique value of the variable within its scope, as follows:
// for(var i= 0; i < 5; i++){
//     (function(x){
//        setTimeout(function(){ console.log(x)}, i * 1000);
//     })(i);
// }

// In an ES2015 context, you can simply use let instead of var in the original code:
// for (let i = 0; i < 5; i++) {
// 	setTimeout(function() { console.log(i); }, i * 1000 );
// }

//----------------------------------------------------------------------------------
//What would the following lines of code output to the console?

// console.log("0 || 1 = "+(0 || 1));
// console.log("1 || 2 = "+(1 || 2));
// console.log("0 && 1 = "+(0 && 1));
// console.log("1 && 2 = "+(1 && 2));
//------------------------------------------------------------------------------------
//What will be the output when the following code is executed? Explain.

// console.log(false == '0') // true
// console.log(false === '0') //false

//------------------------------------------------------------------------------------
//What is the output out of the following code? Explain your answer.

// var a={},
//     b={key:'b'},
//     c={key:'c'};

// a[b]=123;
// a[c]=456;

// console.log(a[b]);

//-----------------------------------------------------------------------------------
//What will the following code output to the console:
// console.log(
//     (function f(x){ 
//        return (x > 1) ? x * f(x-1) : x 
//     })(10)
//     );
//The code will output the value of 10 factorial (i.e., 10!, or 3,628,800).
//-------------------------------------------------------------------------------------
// What will the following code output to the console and why:

// var hero = {
//     _name: 'John Doe',
//     getSecretIdentity: function (){
//         return this._name;
//     }
// };

// var stoleSecretIdentity = hero.getSecretIdentity;

// console.log(stoleSecretIdentity());
// console.log(hero.getSecretIdentity());

// //The first console.log prints undefined because we are extracting the method from the hero object, 
// //so stoleSecretIdentity() is being invoked in the global context (i.e., the window object) where the _name property does not exist.
// //One way to fix the stoleSecretIdentity() function is as follows:

// var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
// console.log(stoleSecretIdentity());

//---------------------------------------------------------------------------------------
//Consider the following code. What will the output be, and why?

// (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1, y = 2;
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();

//----------------------------------------------------------------------------------------
//What will be the output of this code?

// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl (); //undefined...It’s because JavaScript initialization is not hoisted.
//(Why doesn’t it show the global value of 21? The reason is that when the function is executed, 
//it checks that there’s a local x variable present but doesn’t yet declare it, so it won’t look for global one.)

//--------------------------------------------------------------------------------------
//How do you clone an object?
// var obj = {a: 1 ,b: 2, c: { age: 30}}
// var objclone = Object.assign({},obj);
// console.log('objclone: ', objclone);
// obj.c.age = 45;
// console.log('After Change - obj: ', obj);  
// console.log('After Change - objclone: ', objclone);

//---------------------------------------------------------------------------------------
//What do the following lines output, and why?

// console.log(1 < 2 < 3); //true => 1< 2=true(1), 1<3=true
// console.log(3 > 2 > 1); //false => 3 > 2 = true(1), 1>1=false

//---------------------------------------------------------------------------------------
//Imagine you have this code:
// var a = [1, 2, 3];
// a[10] = 99;
// console.log(a);
// console.log(a[6]);
//--------------------------------------------------------------------------------------
// console.log(typeof null) //object
// console.log(typeof NULL) //undefined
// ------------------------------------------------------------------------------------
//What would following code return?

//console.log(typeof typeof 1); //string => typeof 'number' = string



////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('--------------------------------IS UNIQUE--------------------------------------------------------------');
/*
1.
IS UNIQUE
Implement an algorithm to determine if a sting has all unique characters. what if you cannot use additional data strutures?
---------------------------------------------------------------------------------------------------------------------------

I = String
O = boolean
C = no additional data struture. optimize
E = empty string
*/

//time complexity: linear - O(n)
//space complexity: linear - O(n)

let isUnique = (s) => {
	// check each character and store in a hash table
	// if we find that the character already there, return false
	// when done checking return true
	const hash = {};
	
	for(let i=0; i<s.length; i++){
		if(hash[i]){
			return false;
		}else{
			hash[i] = true;
		}
	}
	
	return true;
};

console.log(isUnique('s') === true,
isUnique('') === true,
isUnique('ss') === false,
isUnique('stoies') === false,
isUnique('rainbow') === true,
isUnique('crmaidhirpingm') === false);





console.log('-----------------------------CHECK PERMUTATION------------------------------------------------------');


/*
1.
CHECK PERMUTATION
Given two strings, write a method to decide of one is a permutation of the other.
---------------------------------------------------------------------------------------------------------------------------

I = 2 Strings
O = boolean
C = optimize
E = empty string, diff length
*/

//time complexity: O(2n) - linear
//space complexity: O(n) - linear

let checkPerm = (s1, s2) => {
	// if two strings have diff length, automatically return false
	// one way: sort both strings and compare -- O(n log n)
	// to optimize, we can make a map of one string, and check the second string
	
	if(s1.length !== s2.length){
		return false;
	}
	
	const hash = {};
	for(let i =0; i < s1.length; i++){
		const s = s1[i];
		if(hash[s]){
			hash[s]++;
		}else{
			hash[s] = 1;
		}	
	}
	
	for(let i =0; i < s2.length; i++){
		const s = s2[i];
		if(hash[s] && hash[s] !== 0){
			hash[s]--;
		}else{
			return false
		}	
	}
	
	return true;
};

console.log(
checkPerm('','')===true,
checkPerm('so','os')===true,
checkPerm('sos','os')===false,
checkPerm('abc','abz')===false,
checkPerm('restful','fluster')===true,
checkPerm('baab','bbba')===false
);

console.log('------------------------------------URLify------------------------------------------------------------');
/*
URLify

Write a method to replace all spaces in a string with '%20'.
You may assume that the string has sufficient space at the end to hold the addtional characters,
and that you are given the 'true' length of the string.

EXAMPLE
Input: 'Mr John Smith', 13
Output: 'Mr%20John%20Smith'

I: string, number
O: string
C: optimize
E: spaces before, middle and after characters

time complexity: linear
space complexity: constant
*/

let URLify = (s, n = s.length) => {
	//first pass: count the number of non space characters in the string
	//substract chars from the true length n to see how many spaces we are allowed to replace with %20
	
	//second pass:
	//If we see a space and tere are still spaces left, append '%20' to output string
	//otherwise copy current character
	//when run out of spaces, append the empty string instead
	
	let result = '';
	let totalChars =0;
	
	for(let i=0; i<s.length; i++){
		const c = s[i];
		if(c !== ' '){
			totalChars ++;
		}
	}
	 let totalSpaces = n - totalChars;
	 
	 for(let i=0; i<s.length; i++){
		const c = s[i];
		if(c === ' ' && totalSpaces>0){
			result +='%20'
			totalSpaces --;
		} else if( c !==' '){ //check against spaces with totalSpaces===0 and skip
			result += c;
		}
	}
	
	// check to make sure that there is no more spaces left; if yes then add them
	while(totalSpaces>0){
		result +='%20'
		totalSpaces --;
	}
	 
	 
	return result;
};

console.log(
URLify('Mr John Smith', 13)==='Mr%20John%20Smith',
URLify('Mr John Smith', 14)==='Mr%20John%20Smith%20',
URLify('   hi', 7)==='%20%20%20hi%20%20',
URLify('   hi', 3)==='%20hi',
URLify('', 0)==='',
URLify('', 2)==='%20%20',
URLify('hel lo', 5)==='hello'
);	
	
console.log('----------------------------------------Palindrome Permutation------------------------------------------');

/*
Palindrome Permutation

Given a string, write a function to check if it is a permutation of a palindrome
A palindrome is a word or phrase that is the same forwards and backwards.
A permutation is a rearrangement of letters.
The palindrome does not need to be limited to just dictionary words

EXAMPLE
Input: Tact Coa
Output: True (permutation: 'taco cat', 'atco cat, etc.')

I: string
O: boolean
C: optimize
E: empty string, spaces between and in front and at end, more than 2 of the same char, even and odd chars
*/

//time complexity: linear
//space complexity: linear

let palPerm = (s) => {
 //if even: there must be two of every char
//if odd: there must be only one unique char

//use hash table to store letters
//if we see the same letter again, delete from hash table
//check hash table at the end: 0dd -> 1 key left, even -> no keys left 
 const htable = {};
 let charCount = 0;
 
 for(let i=0; i < s.length; i++){
	 const c = s[i];
	 if(c === ' '){
		 continue;
	 }
	 
	 if(htable[c]){
		delete htable[c];
	 } else {
		 htable[c] = true;
	 }
	 
	 charCount ++;
 }
 
 if(charCount % 2 === 0){
	 return Object.keys(htable).length === 0;
 } else {
	 return Object.keys(htable).length === 1;
 }
	
};

console.log(
palPerm('taco cat')===true,
palPerm('atco cat')===true,
palPerm('rac ecar rara ')===true,
palPerm('chirpingmermaid')===false,
palPerm('aabbc')===true,
palPerm('aaaabbbbcc')===true,
palPerm('aabc')===false,
palPerm('')===true
);


console.log('----------------------------------------Trailing Zeror Factorial------------------------------------------');

//Write a JavaScript program to find the number of trailing zeros in the decimal 
//representation of the factorial of a given number.



const trailing_zeros_factorial = n => {
    let result = 0;
    for (let i = 5; i <= n; i += 5) {
        let num = i;
        while (num % 5 === 0) {
            num /= 5;
            result++;
        }
    }
    return result;
}

console.log(
trailing_zeros_factorial(1),
trailing_zeros_factorial(8),
trailing_zeros_factorial(9),
trailing_zeros_factorial(10))


//https://www.toptal.com/javascript#hiring-guide
console.log('----------------------------------------Inheritance and the prototype chain in JavaScript------------------------------------------');
/*
JavaScript is an prototype-based object-oriented language.
JavaScript does not implement a traditional class-based inheritance system.

In JavaScript, each object internally references another object, called its prototype. 
Prototypal inheritance is achieved in JavaScript through prototype chain.

When a reference is made to a property that an object does not itself contain, 
the prototype chain is traversed until the referenced property is found 
(or until the end of the chain is reached, in which case the property is undefined).
*/

function Animal(){
	this.eatsVeggies = true;
	this.eatsMeat =false;
}

function Herbivore(){
}
Herbivore.prototype = new Animal();

function Carnivore(){
	this.eatsMeat = true;
	this.eatsVeggies = false;
}
Carnivore.prototype = new Animal();

var rabbit = new Herbivore();
var bear = new Carnivore();

console.log(rabbit.eatsVeggies, rabbit.eatsMeat, bear.eatsMeat, bear.eatsVeggies);


console.log('----------------------------------------Understanding Object/Hastable in JavaScript------------------------------------------');
/*
JavaScript object is essentially a hashtable of name-value pairs where the names (i.e., keys) are always strings.

when an object other than a string is used as a key in JavaScript, no error occurs; rather, 
JavaScript silently converts it to a string and uses that value as the key instead using toString() method
*/

var foo = new Object();
var bar = new Object();
var map = new Object();

map[foo] = "foo";    // --> map["[Object object]"] = "foo";
map[bar] = "bar";    // --> map["[Object object]"] = "bar";
                     // NOTE: second mapping REPLACES first mapping!

console.log(map[foo]);     // --> alert(map["[Object object]"]);
                     // and since map["[Object object]"] = "bar",
                     // this will alert "bar", not "foo"!!
                     //    SURPRISE! ;-)


//https://medium.com/dev-bits/a-perfect-guide-for-cracking-a-javascript-interview-a-developers-perspective-23a5c0fa4d0d
console.log('----------------------------------------Understand JavaScript scope well ------------------------------------------');
/*
1. Global scope
2. Local Scope/Function scope
3. Block scope(Introduced in ES6)
*/

//Global scope is what we usually do
x = 10;
function Foo() {
  console.log(x); // Prints 10
}
Foo();

//Function scope comes into picture when you define a variable locally.
pi = 3.14;
function circumference(radius) {    
     pi = 3.14159;
     console.log(2 * pi * radius); // Prints "12.56636" not "12.56"
}
circumference(2);

//ES16 standard had introduced new block scope which limits a variable’s scope to a given parenthesis block.
var a = 10;

function Foo() {
  if (true) {
    let a = 4;
  }

  console.log(a); // alerts '10' because the 'let' keyword
}
Foo();

/*
If someone asks you this question. Write a design that takes a string and returns a character at a time. 
If the new string is given, it should replace old one. It is simply called a generator.
*/
function generator(input) {
	var index = 0;
	return {
		 next: function() {
				 if (index < input.length) {
					  index += 1;
					  return input[index - 1];
				 }
				 return "";
		 } 
	}
}

var mygenerator = generator("boomerang");
console.log(
mygenerator.next(), // returns "b"
mygenerator.next() // returns "o"
)
mygenerator = generator("toon");
console.log(
mygenerator.next() // returns "t"
)

console.log('---------------------- Understand this keyword well(global, function and object scopes) --------------------------------');
/*
When the context and scope of program changes, this at that particular point changes accordingly. 
Now see this in a local context is:
*/
function Foo(){
	console.log(this.a);
  }
  var food = {a: "Magical this"};
  Foo.call(food); // food is this

  // this in object scope
  var person = {
    name: "Stranger",
    age: 24,
    get identity() {
        return {who: this.name, howOld: this.age};
    }
}

//I just used getter syntax which is a function that can be called as a variable.
console.log(
person.identity // returns {who: "Stranger", howOld: 24}
)


console.log('-------------------------- Understand objects well (Object.freeze, Object.seal) ---------------------------------');
/*
You can create an object in these ways:

var marks = {};
var marks = new Object();

*/

var marks = {physics: 98, maths:95, chemistry: 91};

//You can easily convert a given object into a JSON string and also reverse it back 
//using JSON object’s stringify and parse methods respectively.

// returns "{"physics":98,"maths":95,"chemistry":91}"
JSON.stringify(marks);

// Get object from string
JSON.parse('{"physics":98,"maths":95,"chemistry":91}');


//Iterating over the object is easy, using Object.keys
var highScore = 0; 
for (i of Object.keys(marks)) {
   if (marks[i] > highScore)
      highScore = marks[i];
}
console.log(highScore)

/*
Object.values returns the list of values of an object.

Other important functions on an object are:

Object.prototype(object)
Object.freeze(function)
Object.seal(function)
Object.prototype provides more important functions that have many applications. Some of them are:

Object.prototype.hasOwnProperty is useful to find out whether a given property/key exists in an object.
*/
console.log(
marks.hasOwnProperty("physics"), // returns true
marks.hasOwnProperty("greek") // returns false
)

// Object.prototype.instanceof evaluates whether a given object is the type of a particular prototype
function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
  }
  var newCar = new Car('Honda', 'City', 2007);
  console.log(newCar instanceof Car); // returns true

  // Object.freeze allows us to freeze an object so that existing properties cannot be modified.
var marks = {physics: 98, maths:95, chemistry: 91};
finalizedMarks = Object.freeze(marks);
finalizedMarks["physics"] = 86; // throws error in strict mode

console.log(marks); // {physics: 98, maths: 95, chemistry: 91}

//We can find whether a given object is frozen or not like this.
console.log(
Object.isFrozen(finalizedMarks) // returns true
)

//Object.seal allows configurable properties but won’t allow new property addition or deletion of properties.

var marks = {physics: 98, maths:95, chemistry: 91};
Object.seal(marks);
delete marks.chemistry; // returns false as operation failed
marks.physics = 95; // Works!
marks.greek = 86; // Will not add a new property

console.log(marks);

//We can also check whether a given object is sealed using this
console.log(
Object.isSealed(marks) // returns true
)


console.log('-------------------------- Understand Prototypical Inheritance well ---------------------------------');
//Creating a class is done using a function in JavaScript.
var animalGroups = {
	MAMMAL: 1,
	REPTILE: 2,
	AMPHIBIAN: 3,
	INVERTEBRATE: 4
  };

  function Animal(name, type) {
	this.name = name;
	this.type = type;
  }

  var dog = new Animal("dog", animalGroups.MAMMAL);
  var crocodile = new Animal("crocodile", animalGroups.REPTILE);

/*
Here we are creating objects for the class (using new keyword). 
We can add methods for a given class(function) like this. 
Attach a class method like this.
*/
Animal.prototype.shout = function() {
    console.log(this.name + ' is ' + this.sound  + 'ing...');
}

//In JavaScript, inheritance is achieved like this.

function Dog(name, type) {
   Animal.call(this, name, type);
   this.sound = "bow";
}

//We can instantiate a German Shepard like this. 
var pet =new Dog("germanShepard", animalGroups.MAMMAL); //shout method is not inherited along bcos we did not ask
console.log(pet); // returns Dog {name: "germanShepard", type: 1, sound: "bow"}
//pet.shout(); // Throws error

// Link prototype chains to inherit animal class and its methods
Dog.prototype = Object.create(Animal.prototype);
var pet = new Dog("germanShepard", animalGroups.MAMMAL);
// Now shout method is available
pet.shout(); // germanShepard is bowing...

//We can check what is the class of given object in JavaScript using the object.constructor function. 
//Let us check what is the class of our pet.
console.log(
	pet.constructor // returns Animal
)
Dog.prototype.constructor; // returns Animal
//It is Animal. We should set it to Dog class itself so that all instances(objects) of the 
//class should give correct class name where it belongs to.
Dog.prototype.constructor = Dog;

/*
These four things you should remember about prototypical inheritance.

Class properties are bound using this
Class methods are bound using prototype object
To inherit properties, use call function passing this object
To inherit methods, use Object.create to link prototypes of parent and child
Always set child class constructor to itself for getting the right identity of its objects
*/

console.log('-------------------------- Understand the callbacks and promises well ---------------------------------');
/*
Callbacks are the functions that are executed after an I/O operation is done.
function reqListener () {
	console.log(this.responseText);
  }
  
  var req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "http://www.example.org/example.txt");
  req.send();
  Here reqListener is the callback which will be executed when a GET request to is successfully responded back.
  */

  /*

	Promises are neat wrappers for callbacks which allows us to asynchronous code elegantly.
	new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('result')
	}, 100)
	})
	.then(console.log)
	.catch(console.error)

  */



  console.log('-------------------------- Understand the regular expressions well ---------------------------------');

