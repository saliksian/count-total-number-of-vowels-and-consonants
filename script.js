let string = "Nothing is impossible";
var reg = /[aeiou]/gi; // this is regular expression which has vowels where g represents to global flag and i represents the case insensitive

var regu = /\W+/; // regular expression which take metacharacters from A-Z && a-z && 0-9 and eleminates others
string = string.trim(); // trim eliminate wihtespaces from start and end
let str = string.split(regu); // split method returns array spit by regualr expression "regu"
string = str.join(""); //join method used to join array to string

let vowels = string.match(reg); // match methods returns the array match from given string

console.log("number of vowels: " + vowels.length);

let consonant = parseInt(string.length) - parseInt(vowels.length); // I got consonant by subtracting vowels from total charcters

console.log("number of consonant: " + consonant);
