const kysymykset = [
    {
        kysymys: "Millä eläimellä sanotaan olevan yhdeksän elämää?",
        vaihtoehdot: ["kettu","kissa", "koira"],
        oikein: 1
    },
    {
        kysymys: "Minkä värinen on kirahvin kieli?",
        vaihtoehdot: ["sininen", "vihreä", "violetti"],
        oikein: 2
    },
    {
        kysymys: "Miksi sammakot kurnuttavat",
        vaihtoehdot: ["kommunikoidakseen", "etsiäkseen kumppania", "merkatakseen reviirin"],
        oikein: 1
    },
    {
        kysymys: "Kuinka monta silmää perhosentoukalla on?",
        vaihtoehdot: ["8", "12", "6"],
        oikein: 1
    },
    {
        kysymys: "Kuinka monta vuotta etana voi nukkua?",
        vaihtoehdot: ["8", "1", "3"],
        oikein: 2
    },
    {
        kysymys: "Mikä on nopein eläin maalla?",
        vaihtoehdot: ["leijona", "gepardi", "pantteri"],
        oikein: 1
    }
];

let kysymysindeksi = 0;
let yritykset = 3;
let pisteet = 0;

function elämät() {
    if (yritykset == 3) {
        document.getElementById("yritykset").textContent = "\u2764\u2764\u2764"
    }
}

function restart() {
    location.reload();
}

function lataakysymys() {
    if (kysymysindeksi >= kysymykset.length) {
        document.getElementById("viesti").innerHTML = "Jee! Läpäisit visan!&#127881; &#127881; &#127881;";
        document.getElementById("viesti").style.color = "green";
        document.getElementById("container").style.display = "none";
        document.getElementById("alertbox").style.visibility = "visible";
        document.getElementById("btn").style.visibility = "visible";
    }

    const kysymysdata = kysymykset[kysymysindeksi];
    document.getElementById("kysymys").textContent = kysymysdata.kysymys;
    document.getElementById("valinta0").textContent = kysymysdata.vaihtoehdot[0];
    document.getElementById("valinta1").textContent = kysymysdata.vaihtoehdot[1];
    document.getElementById("valinta2").textContent = kysymysdata.vaihtoehdot[2];

    document.getElementById("yritykset").textContent = yritykset;
    document.getElementById("pisteet").textContent = pisteet;
    document.getElementById("viesti").textContent = "";
}

function tarkista(valinta) {
    const kysymysdata = kysymykset[kysymysindeksi];

    if (valinta === kysymysdata.oikein) {
        yritykset = 3;
        pisteet++;
        document.getElementById("pisteet").textContent = pisteet;

        kysymysindeksi++;
        lataakysymys();
        elämät();
    }
    else {yritykset--;}

    if (yritykset == 0) {
        document.getElementById("viesti").innerHTML = "Voi voi, elämäsi loppuivat \uD83D\uDC94\uD83D\uDC94\uD83D\uDC94";
        document.getElementById("viesti").style.color = "red";
        document.getElementById("yritykset").textContent = "\uD83D\uDC94\uD83D\uDC94\uD83D\uDC94";
        document.getElementById("container").style.display = "none";
        document.getElementById("restart").style.visibility = "visible";
        document.getElementById("alertbox").style.visibility = "visible";
    }

    if (yritykset == 2) {
        document.getElementById("yritykset").textContent = "\u2764\u2764\uD83D\uDC94";
    }

    if (yritykset == 1) {
        document.getElementById("yritykset").textContent = "\u2764\uD83D\uDC94\uD83D\uDC94";
    }
}

lataakysymys();