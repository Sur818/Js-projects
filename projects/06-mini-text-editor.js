
let textBox = document.getElementById("text");

function makeLower()
{
    let text = textBox.value;
    text = text.toLowerCase();

    textBox.value = text;
}

function makeUpper()
{
    let text = textBox.value;
    text = text.toUpperCase();

    textBox.value = text;
}

function removeText() 
{
    let text = textBox.value;
    let removeWord = document.getElementById("remove-word").value;

    let allWords = text.split(' ');

    text  = "";
    for(let i=0; i<allWords.length; i++) {
        if(allWords[i] != removeWord) {
            text += allWords[i] + " ";
        }
    }
    textBox.value = text;
}

function countWords() 
{
    let text = textBox.value;
    let allWords = text.split(' ');
    alert("Number of words are: " + allWords.length);
}