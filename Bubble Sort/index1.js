// main data container
let values = [];

// function to built the data box
function makeBox() {
  let value = document.getElementById("input-box").value;
  document.getElementById("input-box").value = null;
  value = parseInt(value);
  if (!Number.isNaN(value)) {
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
  let outputContainer = document.getElementsByClassName("output-section")[0];
  outputContainer.innerHTML = "";
  let n = values.length;

  for (let i = 0; i < (n>1?n-1:n); i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (values[j] > values[j + 1]) {
        let temp = values[j];
        values[j] = values[j + 1];
        values[j + 1] = temp;
      }
    }
    printSortedSteps(i);
  }
}

function printSortedSteps(limit) {
  let outputContainer = document.getElementsByClassName("output-section")[0];
  let stepContainer = document.createElement("div");
  stepContainer.setAttribute("class", "step-container");

  for (let i = 0; i < values.length; i++) {
    let value = values[i];
    let dataBox = document.createElement("div");

    if (i >= values.length - (limit + 1) || limit == values.length - 2) {
      dataBox.setAttribute("class", "data-box green-box");
    } else {
      dataBox.setAttribute("class", "data-box blue-box");
    }

    // appending the 'value' inside the dataBox
    dataBox.appendChild(document.createTextNode(value));
    stepContainer.appendChild(dataBox);
  }
  outputContainer.appendChild(stepContainer);
}

function resetEverything() {
  let inputContainer = document.getElementsByClassName("output-section")[0];
  let outputContainer = document.getElementsByClassName("input-section")[0];
  inputContainer.innerHTML = "";
  outputContainer.innerHTML = "";

  values = [];
}

/*

i = 0 --> n-(limit+1) 
i = 1 --> n-(limit+1), n-1 
i = 2 --> n-i+1, n-2, n-1 
... 
i = n-1 --> n -n-1, ... n-1 



*/
