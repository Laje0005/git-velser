//Laver en playliste med 10 sange :)

     const playliste = document.querySelector("ul");

     const playListe = ["Noget med Danser med Drenge", "Noget med Gavin DeGraw", "Noget med MJ", "Noget med Biebs", "Noget med Destinys Child", "Noget med Backstreet Boys", "Noget med Alicia Keys", "Noget med Adele", "Noget med Osmo Ikonen"];

     playListe.forEach(putListe);

     function putListe(element) {
       console.log(element);
       playliste.innerHTML += "<li>" + element + "</li>";
     }