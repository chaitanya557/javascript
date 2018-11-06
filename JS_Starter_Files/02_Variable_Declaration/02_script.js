// Create two variables and display their sum
var num1 = 100;
var num2 = 200;
var sum = num1 + num2;
console.log(" The Sum of " + num1 + " , " +  num2 + " is " + sum);

// Find the biggest value between 2 numbers
var a = 40;
var b = 30;
if(a > b){
    console.log('The big value is : ' + a);
}
else{
    console.log('The Big value is : ' + b);
}

// Find the biggest value among 3 numbers
var x = 1000;
var y = 200;
var z = 30;
if(x > y && x > z){
    console.log('The Bigger value is ' + x);
}
else if(y > z){
    console.log('The Bigger value is ' + y);
}
else{
    console.log('The Bigger value is ' + z);
}

// Count the number of 'o' in the given string
var str = "Good Morning";
function countZero(str) {
    var count = 0;
    for(var i = 0; i<str.length; i++){
        if(str.charAt(i) === 'o'){
            count++;
        }
    }
    return count;
}
console.log('The count of Zeros is : ' + countZero(str));

// Reverse the String
function reverseString(str) {
    var tempStr = '';
    for(var i = str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
}
console.log('The Reverse String is : ' + reverseString(str));

// Palindrome Program
function isPalindrome(str) {
    return str === reverseString(str);
}
var theStr = "ABCBAC";
console.log(theStr + ' is Palindrome ? ' + isPalindrome(theStr));
