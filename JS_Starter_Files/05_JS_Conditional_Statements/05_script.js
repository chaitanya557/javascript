// If Else condition Example
var courseCompleted = true;
var practiceCompleted = false;
if(courseCompleted && practiceCompleted){
    console.log('You will get the Job Soon');
}
else if(courseCompleted && !practiceCompleted){
    console.log('Please start practicing');
}
else{
    console.log('Please join any course');
}

// For loop Example to display from 1 - 10 values
var output = '';
for(var i = 1; i<= 10; i++){
    if(i <= 9){
        output += i + " , ";
    }
    else{
        output += i;
    }
}
console.log(output);
document.querySelector('#display').textContent = output;


// While loop Example to display from 1 - 10 values
output = '';
// initialization
i = 1;
// Condition
while(i <= 10){
    // statements
    if(i <= 9){
        output += i + " - ";
    }
    else{
        output += i;
    }
    // increment / decrement
    i++;
}
console.log(output);
document.querySelector('#display').textContent = output;


// Do while loop Example to display from 1 - 10 values
output = '';
i = 1;
do{
    // statements
    if(i <= 9){
        output += i + " * ";
    }
    else{
        output += i;
    }
    // increment / decrement
    i++;
}
while(i <= 10);
console.log(output);
document.querySelector('#display').textContent = output;


// Switch Statement Example
var today = new Date().getDay();
output = 'Today is : ';
switch(today){
    case 0:
        output += ' Sunday ';
        break;
    case 1:
        output += ' Monday ';
        break;
    case 2:
        output += ' Tuesday ';
        break;
    case 3:
        output += ' Wednesday ';
        break;
    case 4:
        output += ' Thursday ';
        break;
    case 5:
        output += ' Friday ';
        break;
    case 6:
        output += ' Saturday ';
        break;
    default:
        output += ' ';
        break;
}
console.log(output);
document.querySelector('#display').textContent = output;

// Print the numberString
var numberString = "787";
var tempString = '';
for(var i = 0; i<numberString.length; i++){
    var ch = parseInt(numberString.charAt(i));
    switch(ch){
        case 0:
            tempString += ' ZERO ';
            break;
        case 1:
            tempString += ' ONE ';
            break;
        case 2:
            tempString += ' TWO ';
            break;
        case 3:
            tempString += ' THREE ';
            break;
        case 4:
            tempString += ' FOUR ';
            break;
        case 5:
            tempString += ' FIVE ';
            break;
        case 6:
            tempString += ' SIX ';
            break;
        case 7:
            tempString += ' SEVEN ';
            break;
        case 8:
            tempString += ' EIGHT ';
            break;
        case 9:
            tempString += ' NINE ';
            break;
        default:
            tempString += ' ';
            break;
    }
}
console.log(tempString);
document.querySelector('#display').textContent = tempString;
