const kysymykset = [
    { kysymys: "Moikka ootko elukka?", vaihtoehdot: ["En", "Oon", "Joku muu"], oikeavastaus: 2 },
    { kysymys: "Mikä eläin on vedessä?", vaihtoehdot: ["Kala", "Makkara", "Mansikka"], oikeavastaus: 1 },
    { kysymys: "Mikä näistä ei kuulu joukkoon?", vaihtoehdot: ["Lepakko", "Patknki", "moi"], oikeavastaus: 3 },
    { kysymys: "Mikä fiilis?", vaihtoehdot: ["hyvä", "moi", "moi"], oikeavastaus: 1 },
    { kysymys: "Mikä fiilis?", vaihtoehdot: ["hyvä", "moi", "moi"], oikeavastaus: 1 },
    { kysymys: "Mikä fiilis?", vaihtoehdot: ["hyvä", "moi", "moi"], oikeavastaus: 1 }
];

let pisteet = 0, yritykset = 0, nykyinenkysymys = 0;

function aloitapeli()
 {
    document.getElementById("aloitus").style.display = "none";
    document.getElementById("kysymys").style.display = "block";
    document.getElementById("kysymysbox").style.display = "block"; 
    naytakysymys();
}

function naytakysymys() 
{
    if (nykyinenkysymys < kysymykset.length) {
        const { kysymys, vaihtoehdot } = kysymykset[nykyinenkysymys];
        document.getElementById("kysymys").innerText = kysymys;
        vaihtoehdot.forEach((vastaus, i) => {
            document.getElementById("vastaus" + (i + 1)).innerText = vastaus;
        });
    
        document.getElementById("kysymysbox").style.display = "block";
        document.getElementById("aloitus").style.display = "none"; 
    } else {
        loppupeli();
    }
}

function tarkistavastaus(vastaus)
 {
    yritykset++;
    if (vastaus === kysymykset[nykyinenkysymys].oikeavastaus) pisteet++;
    document.getElementById("pisteet").innerText = pisteet;
    document.getElementById("yritykset").innerText = yritykset;
    nykyinenkysymys++;
    naytakysymys();
}

function loppupeli() 
{
    if(pisteet < 2)
        {
            moikka = document.getElementById("pisteet");
            moikka.style.color = 'red';
            document.getElementById("pisteet").innerText = pisteet;
        }
        else
        {
            /*Älä tee mitää */
        }
    document.getElementById("aloitus").style.display = "block"; 
    document.getElementById("kysymys").style.display = "none"; 
    document.getElementById("kysymysbox").style.display = "none";
}
function nollaapeli()
{
    pisteet = yritykset = nykyinenkysymys = 0;
    moikka = document.getElementById("pisteet");
    moikka.style.color = 'black';
    document.getElementById("pisteet").innerText = pisteet;
    document.getElementById("yritykset").innerText = yritykset;
}