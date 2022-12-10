function toggleDark() {
    let back = document.body;
    back.style.background ='linear-gradient(to bottom right, rgb(224, 86, 253), black) center center fixed';
    let image = document.getElementById('light');
            if (image.src.match("assets/img/lightmode.png")) {
                image.src = "assets/img/nightmode.png";
                image.style.transform = "translate(-100, -100)";
            }else {
                image.src = "assets/img/lightmode.png";
                image.style.transform = "translate(-100, -100)";
                back.style.background ='linear-gradient(to bottom right, rgb(251,123,162), rgb(252,224,67)) center center fixed';
            }
        }

document.getElementById('light').onclick = toggleDark;

/* function toggleDarks() {
    let back = document.body;
    back.style.background ='linear-gradient(to bottom right, rgb(224, 86, 253), black) center center fixed';
    let imagenew = document.getElementById('light-two');
            if (imagenew.src.match("assets/img/lightmode.png")) {
                imagenew.src = "assets/img/nightmode.png";
                imagenew.style.transform = "translate(-100, -100)";
            }else {
                imagenew.src = "assets/img/lightmode.png";
                imagenew.style.transform = "translate(-100, -100)";
                back.style.background ='linear-gradient(to bottom right, rgb(251,123,162), rgb(252,224,67)) center center fixed';
            }
        }

document.getElementById('light-two').onclick = toggleDarks; */