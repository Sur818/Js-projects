
let body = document.getElementsByTagName("body");

function changeColor(color)
{
    // why body[0]
    // because 'body' variable having an array

    body[0].style.backgroundColor = color;
}


// body = ['<body></body>'];
// body[0] 