const phrases = ["a cas project", "a passion project", "a desperate effort to get a 7", "a rookie html, css and javascript site", "a hub of independently developed, open source, free tools", "shoutout to the reader", "alexa, play aphex twin", "merci beacoup", "si einstein fuera sabio: dense de baja del ib", "hola profe marcelo", "hosted on github", "an effort of over 8 hours of coding", "all source code is on github", "viva los femboys", "read nietzsche"];
let current = 0;
const flipper = document.getElementById("flipper");

function flipText() {
flipper.classList.add("flip-out");

setTimeout(() => {
    current = (current + 1) % phrases.length;
    flipper.textContent = phrases[current];
    flipper.classList.remove("flip-out");
    flipper.classList.add("flip-in");
}, 300);

setTimeout(() => {
    flipper.classList.remove("flip-in");
}, 600);
}

setInterval(flipText, 3000);