

function isPrime()
{
    let inputTag = document.getElementById('number');
    let number = inputTag.value;

    let prime = true;
    for(let i=2; i<Math.sqrt(number); i++) {
        if(number%i == 0) {
            prime = false;
            break;
        }
    }

    if(prime) {
        // alert("number is prime");
        inputTag.style.backgroundColor = 'green';
    } else {
        // alert('number is not prime');
        inputTag.style.backgroundColor = 'red';
    }
}