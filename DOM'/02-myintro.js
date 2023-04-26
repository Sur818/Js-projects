
let person = {
    name: 'Abhinav', 
    age: 21, 
    gender: 'male'
};



function updateMe()
{
    // getting html elements
    let personName = document.getElementById("name");
    let personAge = document.getElementById("age");
    let personGen = document.getElementById("gender");

    // updating from person object data
    personName.innerText = person.name;
    personAge.innerText = person.age;
    personGen.innerText = person.gender;
}