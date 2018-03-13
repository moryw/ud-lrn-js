//This is a doc from sitepoint JS beginners course, code is written newest to oldest


// 
//Sp L2 S5 Strings

// var sentence = "a sentence is a string.";
// var sentence2 = sentence;
//
// console.log(sentence);
// console.log(sentence2);
//
// sentence2 = "this is a different sentence."
//
// console.log(sentence);
// console.log(sentence2);

//methods

// var sentence = "A sentence is a string.";
//
// console.log(sentence.length); //23 - includes spaces
//
// console.log(sentence.toUpperCase); //error - need () at the end of some methods
// console.log(sentence.toUpperCase());
// console.log(sentence.toLowerCase());
// console.log(sentence.charAt(0));

//S3 L16 Type Juggling

// console.log(Number("99")); //99 - convert string to number to be usable by math methods
// console.log("99"-0); //99 - when it see the '-' sign it knows it need to be a number
// console.log("99"*1); //99 - same
// console.log("99"/1); //99 - same
// console.log("99"+0); //990 - '+' just adds to the existing string

// console.log(String(99)); //"99"
// console.log(99 + ""); //"99" JS knows that adding an empty string means converting to a string

// console.log(Boolean(99)); //true

//S3 L15 Boolean

// console.log(true);
// console.log(2>1);
// console.log(2<1);
// console.log("abc" < "xyz");
// console.log("abc" > "xyz");

// console.log(2 === 2);
// console.log(2 == 2);
// console.log(2 === "2"); // false because three === is more strict so it compares value and string type
// console.log(2 == "2"); // true because two == is less strict so it just compares value
// console.log(2 != 2);
// console.log(2 !== 2);
// console.log(2 != "2"); //false
// console.log(2 !== "2"); //true because it is more strict and compares both value and sting type

// console.log(true && true); //true
// console.log(true && false); //false
// console.log(true || false); //true - if either is tru return true
// console.log(false || false); //false - if both are false return false
// console.log(((2 > 1) || ('a' > 'z')) && (3 > 2)); //true

//S3 L14 Strings

// console.log("Hello");
// console.log('JavaScript says "Hello".'); //if you need to use quotes inside of quotes use single and then double
// console.log("JavaScript's saying \"Hello\""); // better is to use the back slash to tell js that it is seperate
// console.log("one\ntwo"); // \n is the new line
// console.log("I'm " + "three " + "strings."); // add strings together with the  + sign

//S3 L13 Number types
// console.log(2+2);
// console.log(2+2.7);
// console.log(2.76*7.65);
// console.log(15/7);
// console.log(14%4); // remainder
// console.log(1+2*3); // * and / and % have presidence of + and - | so this equals 7 not 9
// console.log((1+2)*3); //use () to make it nine
// console.log(((1+2)*(3+4)/7));

//S2 L4 Statments

//S2 L3 variables

// console.log(2+2);
//
// var first = 1;
// var second = 2;
//
// console.log(first + second);
//
// second = 3;
//
// console.log(first + second);

/*
variables have:
name - unique way to reference the data
type - the data type stored in it
value - the info stored
memory location - stored somewhere
scope - where this var can be accessed
lifespan - weather is exists, you can create it or destroy it

all vars:

declare
set value
read value
etc.


*/


// Lesson 1
/*
console.log("This is my first JavaScript program!");

var example = "coffee";
console.log(example + 's - ' + (3*3));

var first = 1;

// var hold any single data type, check  with typeof
console.log(typeof(example));

console.log(typeof(1));

// variables are case sensetive
var test = "coffee";
var Test = "tea";

console.log(test);
console.log(Test);

*/

// this is a simple comment

/*
this is multi line comments
hah
*/


//name of var only letters, numbers, $, or _
// not begin with number
// not reserved keyword
