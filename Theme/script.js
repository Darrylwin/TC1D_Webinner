const choix = document.getElementById("theme");
const page = document.body;

choix.addEventListener("click", f_theme);

function f_theme() {
    if (choix.value == 1){
        page.setAttribute("class","theme1");
    } else  if (choix.value==2){
        page.setAttribute("class","theme2");
    }else {
        page.removeAttribute("class");
    }
}
