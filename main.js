// tady je místo pro náš program

// domácí úkol

// nastavit font-size 16px
let odstavec = document.querySelector(".odstavec")
odstavec.classList.add("mojetrida")

function ztucniText() {
    let odstavec = document.querySelector (".odstavec")
    odstavec.classList.add("tucny")
}

// červená po kliknutí - toggle

function cerveneKouzlo() {
    let redtlacitko = document.querySelector (".cerveneTlacitko");
    redtlacitko.classList.toggle("cerveny");
}


// zvětšování textu
let tlacitko = document.querySelector(".zvetseni");
let text = document.querySelector (".odstavec");
let fontSize = parseFloat(getComputedStyle(text).fontSize)

tlacitko.addEventListener("click", function () {
    fontSize += 1;
    text.style.fontSize = fontSize + "px";
})


//ovládání audio souboru
let prehravac = document.querySelector (".mujPrehravac")

function startAudio() {
    prehravac.play();
}

function stopAudio() {
    prehravac.pause();
}

function resetAudio() {
    prehravac.currentTime = 0;
}

function ticho() {
    prehravac.volume = 0;
}

function zmenaHlasitosti() {
    prehravac.volume = 0.5;
}

function normalniHlasitost() {
    prehravac.volume = 1;
}





// poznámky z hodiny
let nadpis = document.querySelector ("h1")

nadpis.classList.add("csstrida")

// ukázka odstranění css třídy 
/*
let ctverecek = document.querySelector ("#ctverecek1")
ctverecek.classList.remove("zluty")
ctverecek.classList.remove("ctverecek")
*/

function zmenBarvu () {
    let ctverecek = document.querySelector ("#ctverecek1")
    ctverecek.classList.toggle("zluty")
}

