let d = new Date();
let b = d.getHours();


console.log(b);

if (b > 5 && b < 10) {
  console.log("Godmorgen, bæløjede");

} else if (b > 10 && b < 18) {
  console.log("Goddag, fister");

} else if (b >= 18 && b < 24) {
  console.log("Godaften, hr");

} else {
  console.log("Godnat, trætte");
}
