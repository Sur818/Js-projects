
let output = document.getElementById("output");

function repeatWord()
{
    let word = document.getElementById("my-text").value;
    let num = document.getElementById("num").value;

    word += " ";

    word = word.repeat(num);
    output.innerText = word;

    // clear input sections
    document.getElementById("my-text").value = "";
    document.getElementById("num").value = '';
    
}