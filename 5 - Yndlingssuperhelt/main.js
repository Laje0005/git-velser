const superhelte = [
  {
    navn: "Hagemand",
    fjender: ["Skurk1" , "skurk2" , "skurk3"],
    styrker: ["Hage" , "muller"],
    dragtfarve: "Rød",
    billede: "billeder/hagemand.jpg",
  },
  {
    navn: "Supermand",
    fjender: ["Skurk4" , "skurk5" , "skurk6"],
    styrker: ["Superstyrke", "flyvning", "laserblik"],
    dragtfarve: "Blå og rød",
    billede: "billeder/supermand.jpg", 
  },
  {
    navn: "Batman",
    fjender: ["Skurk7" , "skurk8" , "skurk9"],
    styrker: ["Snedig", "kamptræning"],
    dragtfarve: "sort",
    billede: "billeder/batman.jpg",
  },
];

const skabelon = document.querySelector("#superhelt-template").content;
const superhelteliste = document.querySelector("#superhelteliste");

superhelte.forEach((superhelt) => {
  const kopi = skabelon.cloneNode(true);

  // Udfyld skabelonen med superheltens data
  kopi.querySelector("h2").textContent = superhelt.navn;
  kopi.querySelector("h3").textContent = `Styrker: ${superhelt.styrker.join(", ")}`;
  kopi.querySelector("p").textContent = `Fjender: ${superhelt.fjender.join(", ")}`;
  kopi.querySelector("div").textContent = `Dragtfarve: ${superhelt.dragtfarve}`;
  kopi.querySelector("img").src = superhelt.billede;

  // Tilføj den klonede og udfyldte artikel til superhelteliste-sektionen
  superhelteliste.appendChild(kopi);
});
