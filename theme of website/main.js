var themeOfWebsite = document.querySelector('select');
var html = document.querySelector("html");

function themeWeb(color, backgroundcolor) {
    html.style.backgroundColor = backgroundcolor;
    html.style.color = color;
}

themeOfWebsite.onchange = function () {
    (themeOfWebsite.value === 'black')? themeWeb('white','black') : themeWeb('black','white');
}