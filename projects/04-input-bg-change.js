
function changeColor()
{
    let inputTag = document.getElementById("color");
    let language = document.getElementById("lang");

    let hexColor = inputTag.value;

    language.style.color = hexColor;

}