function changeFunc() {
  let selectBox = document.getElementById("colors");
  //   console.log(selectBox); // prints: <select> </select>
  //   console.log(selectBox.options); // prints: array of options
  //   console.log(selectBox.selectedIndex); // print the index of selected option
  //   console.log(selectBox.options[selectBox.selectedIndex]); // print the selected element

  // getting the value of selected option
  let selectedValue = selectBox.options[selectBox.selectedIndex].value;

  // select tags
  let headings = document.getElementsByTagName("h1");

  // let headings = document.querySelectorAll("h1");
  // console.log(headings)

  if (selectedValue === "No Color") {
    for (let i = 0; i < 3; i++) {
      headings[i].style.color = "black";
    }
  } else if (selectedValue === "all") {
    for (let i = 0; i < 3; i++) {
      headings[i].style.color = "red";
    }
  } else {
    let indexValue = parseInt(selectedValue);

    for (let i = 0; i < 3; i++) {
      if (i === indexValue) {
        headings[i].style.color = "red";
      } else {
        headings[i].style.color = "black";
      }
    }
  }
}
