
let body = document.getElementsByClassName('body');

function changeBg()
{
    let hex = prompt("Enter the hex value");

    if(hex.length == 6) { 
        body[0].style.backgroundColor = hex[0] == '#' ? hex : '#' + hex;
    } else {
        alert("Invalid Hex code\n\nLenght should be 6 characters");
    }
}