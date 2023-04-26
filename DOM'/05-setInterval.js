
let count = 0;
function helloAdd()
{
    document.getElementById('hello').innerText = count;

    // stop on count = 3
    if(count == 3) {
        clearInterval(stopId);
    }

    count += 1;
}

// 1000ms = 1s
// calling 'helloAdd' function on every 1 second
// stopId is intervalId to stop the interval by clearInterval()
let stopId = setInterval(helloAdd, 1000);