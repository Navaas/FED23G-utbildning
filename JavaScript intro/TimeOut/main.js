// Kollar så du får ut "Hello World i consolen"
// console.log("Hello world");

// Funkar bra om man vill fördröja något
/*setTimeout(printHello, 2000);*/

// Nu kommer den loopa tills man stänger om det
//setInterval(printHello, 2000);
function printHello() {
  console.log("Hello world");
}

let count = 0;
while (count < 1_000_000_000) {
  // Alla tre raderna med count är likadana
  count += 1;
  // count ++;
  // count = count + 1;
}
console.log(count);
// console.time("count")
// console.timeEnd("count") Får du ut hur lång tid det har att skriva ut svaret i consolen. Om man vill tima sin kod.
