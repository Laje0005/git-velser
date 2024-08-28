// Math.random() skaber et tilfældigt decimaltal mellem 0 og 1 (som 0.236 eller 0.874).
// Math.random() * 11 ganger det tal med 11, så vi får et decimaltal mellem 0 og 10.999...
// Math.floor() afrunder nedad til det nærmeste heltal, så vi får et heltal mellem 0 og 10.

let tilfældigtTal = Math.floor(Math.random() * 11);

let antalGæt = 0;



document.querySelector("#gætKnap").addEventListener("click", function () {

  // AntalGæt++ øger antallet af gæt med 1, hver gang brugeren gætter.
  // ParseInt() sørger for, at det indtastede tal bliver behandlet som et heltal (et helt tal uden decimaler).
  let brugerGæt = parseInt(document.querySelector("#tal").value);

  // AntalGæt++ øger antallet af gæt med 1, hver gang brugeren gætter.
  antalGæt++;


  // Hvis det tilfældigt gættede tal er lavere end det rigtige svar, så kommer beskeden: "For lavt, søster! Prøv igen."
  if (brugerGæt < tilfældigtTal) {
    document.querySelector("#besked").innerText = "For lavt, søster! Prøv igen.";

    // Hvis det tilfældigt gættede tal er højere end det rigtige svar, så kommer beskeden: "For højt, kammerat! Prøv igen."
  } else if (brugerGæt > tilfældigtTal) {
    document.querySelector("#besked").innerText = "For højt, kammerat! Prøv igen.";


  } else {
    document.querySelector("#besked").innerText = "Tillykke! Du har gættet det rigtige tal. Du brugte " + antalGæt + " gæt. Vil du prøve igen?";
    resetSpillet();
  }
});

function resetSpillet() {
  if (confirm("Vil du prøve igen med et nyt tal?")) {
    tilfældigtTal = Math.floor(Math.random() * 11);
    antalGæt = 0;

    // Tømmer beskedfeltet, så det er klar til næste spil.
    document.querySelector("#besked").innerText = "";

    // Tømmer input-feltet, så brugeren kan indtaste et nyt gæt.
    document.querySelector("#tal").value = "";
  }
}
