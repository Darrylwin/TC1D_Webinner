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

function f_envoyer() {
    const b = document.getElementById('msg');
    const b2 = document.getElementById('entrer');
    b.innerHTML += '<br>' + b2.value;
    b2.value = '';
}

function f_envoyer2() {
    const b = document.getElementById('msg_2');
    const b2 = document.getElementById('entrer_2');
    let para = document.createElement('p');
    para.innerHTML = b2.value;
    b.innerHTML += '<br>' + b2.value;
    b.appendChild(para);
    b2.value = '';
}

// affectation d'un évenement à un élément
const btnsend = document.getElementById('btn');
btnsend.onclick = f_envoyer2;

function showdate(){
    const p_date = document.getElementById('date_heure');
    p_date.innerHTML = new Date();
}
//document.body.onload = showdate;
document.body.onload = setInterval(showdate,1000);
