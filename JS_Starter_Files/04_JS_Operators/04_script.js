// Assignment operator =
var jsVersion = 'ES5';
console.log('jsVersion is : ' + jsVersion);

// Arithmetic operators + - * /
var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
console.log('The Sum of ' + num1 + ' , ' + num2 + ' is : ' + sum);

// Short hand math += , -= , *= , /=
var a = 10;
var b = 20;
var add = 0;
add = add + (a + b);
add += a + b;
console.log('The add value is  : ' + add);

// Conditional operators < , > , <= , >= , !==
var age = 25;
if(age < 18){
    console.log('You are Minor');
}
else{
    console.log('You are Major');
}

// Unary Operator ++ , -- (pre , post)
var i = 10;
i = i + 1;
i += 1;
i++;
console.log('i value is : ' + i); // 13

// Logical operators AND , OR
var inRelation = true;
var parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait until parents Agreed');
}

// String Concatenation Operator
var str = 10 + 20 + "10" + 20 + 10;
console.log('Str value is : ' + str);

// Ternary operator (? :)
(age > 18) ? console.log('You are Major') : console.log('You are Minor');

// Type of operator
var abc;
abc = 10;
abc = true;
abc = 'test';
abc = null;
console.log('value is : ' + abc + ' type is : ' + typeof abc);

// == operator
var x = 10;
var y = "10";
if(x == y){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}

// === operator
x = 10;
y = "10";
if(x === y){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}