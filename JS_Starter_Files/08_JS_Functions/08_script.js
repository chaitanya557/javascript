//creation of a simple function with no args and execute a function
function greet() {
    console.log('Iam from Greet Function');
}
greet();

//creation of a simple function with args
function greetArgs(name) {
    console.log('Hello ' + name + ' Iam from greetArgs fn');
}
greetArgs('John');

// executing a function with less number of params
function greetLessArgs(name,age) {
    console.log('Hello ' + name + ' You are ' + age + ' Yrs Old');
}
greetLessArgs('John');

//executing a function with more number of params
function greetMoreArgs(name,age) {
    console.log('Hello ' + name + ' You are ' + age + ' Yrs Old');
}
greetMoreArgs('Rajan',20,'Student');

//function overloading is not possible here
// functions with return values
function greetReturn(name) {
    var greetMsg = "Hello " + name + " Good Morning";
    return greetMsg;
}
var greeting = greetReturn('Williams');
console.log(greeting);

//function with empty return /no return
function greetEmptyReturn(name) {
    var greetMsg = "Hello " + name + " Good Morning";
    // return;
}
var greet1 = greetEmptyReturn('Rajan');
console.log(greet1);

// function Expressions with name and execution
var a = 10;
var greetFn = function() {
    console.log('Iam from Function Expression');
};
greetFn();

// Functions as arguments without args
function greetFn1(name) {
    console.log(name + ' Iam from GreetFn1 function');
}
function greetFn2(name){
    console.log( name + ' Iam from GreetFn2 function');
}
function greetEngine(fName,name) {
    fName(name);
}
greetEngine(greetFn2,'John');

// Function Expression
var greetEFn1 = function(name) {
    console.log(name + ' Iam from GreetEFn1 function');
};
var greetEFn2 = function(name) {
    console.log(name + ' Iam from GreetEFn2 function');
};
var greetEngineE = function(fName,name) {
    fName(name);
};
greetEngineE(greetEFn2,'John');

// Functions in Objects and Execution
var student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(student.fullName());

// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */
var employee = {
    name : 'John',
    age : 40,
    desg : 'Manager',
    address : {
        city : 'Hyderabad',
        state : 'Telangana',
        country : 'India'
    },
    isFromCity : function(city) {
        return city.toUpperCase() === this.address.city.toUpperCase();
    },
    isFromState : function(state) {
        return state.toUpperCase() === this.address.state.toUpperCase();
    }
};

console.log('is From Hyd ? ' + employee.isFromCity('HYDERABAD'));

console.log('is From TS ? ' + employee.isFromState('TELANGANA'));

// Default Function Arguments (arguments)
function defaultArgs() {
    for(var i=0; i<arguments.length; i++){
        console.log(arguments[i]);
    }
}
defaultArgs('John',40,'Manager');
