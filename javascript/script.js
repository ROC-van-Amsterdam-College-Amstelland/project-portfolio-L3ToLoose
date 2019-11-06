var strNaam = prompt("voorbeeld van een javascript.vul uw naam in")
            alert("jouw naam is " + strNaam) ;

            var clicks = 0;
            function clickME() {
                clicks += 1;
                document.getElementById("clicks").innerHTML = clicks;
         }