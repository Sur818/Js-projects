
let counter = document.getElementById("data");
let count = 0;

function addValue()
{
    count += 1;
    counter.innerText = count;
}

function subValue()
{
    count -= 1;
    counter.innerText = count;
}

function multiByTwo()
{
    count = count * 2;
    counter.innerText = count;
}

function resetValue()
{
    count = 0;
    counter.innerText = count;
}