// main data container
let values = [];

// function to built the data box
function makeBox() {
  let value = document.getElementById("input-box").value;
  document.getElementById("input-box").value = '';
  if (value !== "") {
    let dataBox = document.createElement("div");
    dataBox.setAttribute("class", "data-box red-box");

    // appending the 'value' inside the dataBox
    dataBox.appendChild(document.createTextNode(value));

    // array storing
    values.push(value);

    let inputContainer = document.getElementsByClassName("input-section")[0];
    inputContainer.appendChild(dataBox);
  }
}

function bubbleSort() {
  values.sort(function(a, b){return a - b});
  
  let outputContainer = document.getElementsByClassName("output-section")[0];
  outputContainer.innerHTML = "";

  for (let i = 0; i < values.length; i++) {
    let value = values[i];
    let dataBox = document.createElement("div");
    dataBox.setAttribute("class", "data-box green-box");

    // appending the 'value' inside the dataBox
    dataBox.appendChild(document.createTextNode(value));

    outputContainer.appendChild(dataBox);
  }
}

function resetEverything()
{
    let inputContainer = document.getElementsByClassName("output-section")[0];
    let outputContainer = document.getElementsByClassName("input-section")[0];
    inputContainer.innerHTML = "";
    outputContainer.innerHTML = "";

    values = [];
}
