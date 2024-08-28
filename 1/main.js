// Hent elementerne ved deres ID
const snaps = document.getElementById("snaps");
const ol = document.getElementById("øl");
const faxe = document.getElementById("faxe");
const pepsi = document.getElementById("pepsi");

// Funktion der håndterer klik og tjekker for alkoholindhold
function checkAlcohol(drink) {
  if (drink.id === "øl" || drink.id === "snaps") {
    console.log("indeholder alkohol");
  } else if (drink.id === "faxe" || drink.id === "pepsi") {
    console.log("alkoholfri");
  }
}

// Tilføj event listeners til hvert billede
snaps.addEventListener("click", function () {
  checkAlcohol(snaps);
});
ol.addEventListener("click", function () {
  checkAlcohol(ol);
});
faxe.addEventListener("click", function () {
  checkAlcohol(faxe);
});
pepsi.addEventListener("click", function () {
  checkAlcohol(pepsi);
});
