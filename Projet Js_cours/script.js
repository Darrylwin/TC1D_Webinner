// document.body.bgColor = "red";
function f_red(){
    document.body.bgColor = "red";
}
function f_green(){
    document.body.bgColor = "green";
}

function f_color(color){
    document.body.bgColor = color;
}

function bg_img1(){
    document.body.style.backgroundImage = "url('images/꒰𝙰𝚒 𝙰𝚛𝚝꒱ Madara.jpeg')";
}

function bg_img2(){
    document.body.style.backgroundImage = "url('images/Agatsuma Zenitsu By Muztnafi.jpeg')";
}
function f_zoom(z) {
    const i = document.getElementById("images")
    if (z == '-'){
        i.width -= 10;
    }
    else if (z == '+'){
        i.width += 10;
    }
    else {
        i.width = 640;
    }

}
