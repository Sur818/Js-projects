
let person = {
    name: 'Abhinav', 
    age: 21, 
    gender: 'male'
};

let lastName = '', lastAge = '', lastGen = '';
let isUpdated = false;

function updateMe()
{
    // getting html elements
    let personName = document.getElementById("name");
    let personAge = document.getElementById("age");
    let personGen = document.getElementById("gender");

    // stored last values in variable
    lastName = personName.innerText;
    lastAge = personAge.innerText;
    lastGen = personGen.innerText;

    // updating from person object data
    personName.innerText = person.name;
    personAge.innerText = person.age;
    personGen.innerText = person.gender;

    isUpdated = true;
}

function getBack()
{
    // getting html elements
    let personName = document.getElementById("name");
    let personAge = document.getElementById("age");
    let personGen = document.getElementById("gender");

    // if the document is updated then only get the previous data
    if(isUpdated) {
        // updating from person object data
        personName.innerText = lastName;
        personAge.innerText = lastAge;
        personGen.innerText = lastGen;
        isUpdated = false;
    }
}