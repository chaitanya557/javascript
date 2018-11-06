// Create an Object in JavaScript
var employee = {};

// add properties to an object
employee.name = 'John';
employee.age = 40;
employee.designation = 'Manager';

// access an object
console.log(employee);

// access the properties of an object
console.log('Name : ' + employee.name);

// Access using dot notation & [] notation
console.log('Desg : ' + employee.designation);
console.log('Desg : ' + employee['designation']);

// Create Object Literal
var mobile = {
  brand : 'Lenovo',
  color : 'black',
  RAM : '4GB',
  storage : '32GB',
  hasInsurance : false
};

// access the object
console.log(mobile);

// Create a nested Object
var student = {
    name : 'Rajan',
    age : 20,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        state : 'Telangana',
        country : 'India'
    }
};

// access the nested Object
console.log(student.address);

// add a property to nested object
student.address.street = 'Ameerpet';
console.log(student.address);

// Access the Nested Object properties using mix dot , []
console.log(student.address.street); // Ameerpet
console.log(student.address['street']); // Ameerpet

// === Operator for Objects
var obj1 = {
    name : 'Williams',
    age : 30
};
var obj2 = obj1;
if(obj1 === obj2){
    console.log('Both are Equal');
}
else{
    console.log('both are NOT Equal');
}