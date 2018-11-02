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