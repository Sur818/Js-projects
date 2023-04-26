let isDay = true;

function dayNight(id)
{

    let body = document.getElementsByTagName("body")[0];

    if(isDay) {
        body.classList.remove("day");
        body.classList.add("night");
        document.getElementById(id).innerText = "Day";
        isDay = false;
    } else {
        body.classList.remove("night");
        body.classList.add("day");
        document.getElementById(id).innerText = "Night";
        isDay = true;
    }
}