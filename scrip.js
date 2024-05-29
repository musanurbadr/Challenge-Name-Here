const theme = document.getElementById("theme-toggle");
const body = document.querySelector('body');
theme.onclick = function (){
    theme.classList.toggle("active");
    body.classList.toggle("active");
}
