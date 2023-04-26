
function solveEquation()
{
    let coeffs = document.getElementsByClassName("input-box");

    let valA = Number(coeffs[0].value);
    let valB = Number(coeffs[1].value);
    let valC = Number(coeffs[2].value);

    let det, valueX, valueY, output;
    if(valB*valB - 4*valA*valC < 0){
        det = (valB*valB - 4*valA*valC) * -1;
        valueX = -(valB/(2*valA)).toPrecision(2) + " + (" + (det/(2*valA)).toPrecision(2) + ") i";
        valueY = -(valB/(2*valA)).toPrecision(2) + " - (" + (det/(2*valA)).toPrecision(2) + ") i";
    } else {
        det = Math.sqrt((valB*valB - 4*valA*valC));
        valueX = ((-valB + (det))/(2*valA)).toPrecision(2);
        valueY = ((-valB - (det))/(2*valA)).toPrecision(2);


    }

    
    

    console.log(valueX);

    let outputRoots = document.getElementById("output-solution");

    outputRoots.innerHTML = `Root1 = ${valueX} </br> Root2 = ${valueY}`;

}

/*
    x = (-b + (sqrt(b*b - 4*a*c)))/2*a
    y = (-b - (sqrt(b*b - 4*a*c)))/2*a

*/