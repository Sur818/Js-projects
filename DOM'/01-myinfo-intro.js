
let personName = document.getElementById("name");
let personAge = document.getElementById("age");
let personGen = document.getElementById("gender");

// printing the elements that we have selected from html
console.log(personName, personAge, personGen)

// Updation on data
personName.innerText = 'Abhinav';
personAge.innerText = 21;

// updation for female : overriding the last data
personName.innerText = 'Priya';
personAge.innerText = 24;
personGen.innerText = 'Female';