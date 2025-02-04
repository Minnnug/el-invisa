const kysymykset = 
[
    { kysymys: "Millä eläimellä sanotaan olevan yhdeksän elämää", vaihtoehdot: ["kettu", "kissa", "koira"], oikeavastaus: 2 },
    { kysymys: "Minkä värinen on kirahvin kieli?", vaihtoehdot: ["sininen", "vihreä", "violetti"], oikeavastaus: 3 },
    { kysymys: "Miksi sammakot kurnuttavat?", vaihtoehdot: ["merkatakseen reviirin", "etsiäkseen kumppania", "kommunikoidakseen"], oikeavastaus: 2 },
    { kysymys: "Kuinka monta silmää perhosentoukalla on?", vaihtoehdot: ["8", "12", "6"], oikeavastaus: 2 },
    { kysymys: "Kuinka monta vuotta etana voi nukkua?", vaihtoehdot: ["8", "1", "3"], oikeavastaus: 3 },
    { kysymys: "Mikä on nopein eläin maalla?", vaihtoehdot: ["leijona", "pantteri", "gepardi"], oikeavastaus: 3 }
];

let pisteet = 0, yritykset = 3, nykyinenkysymys = 0;

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
    
    if (vastaus === kysymykset[nykyinenkysymys].oikeavastaus){
        pisteet++;
        document.getElementById("pisteet").innerText = pisteet;
        
        nykyinenkysymys++;
        naytakysymys();
    } 
    else
    {
        yritykset --;
    }
    if(yritykset < 1){
        loppupeli();
    }
    if(yritykset == 2)
    {
        document.getElementById("elama3").style.display = "none"; 
    }
    if(yritykset == 1)
    {
            document.getElementById("elama2").style.display = "none"; 
    }
    if(yritykset == 0)
    {
                document.getElementById("elama1").style.display = "none"; 
    }
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
    moikka.style.color = 'white';
    document.getElementById("pisteet").innerText = pisteet;
    document.getElementById("elama1").style.display = "block"; 
    document.getElementById("elama2").style.display = "block"; 
    document.getElementById("elama3").style.display = "block"; 
    yritykset = 3;
}