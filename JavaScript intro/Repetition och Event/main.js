// Det som står i query ska tas bort från listan

const query = "Pear";

let fruits = ["Apple", "Pear", "Banana"];

// Lösning 1 indexOF & splice
 const indexToDelete = fruits.indexOf(query);
 fruits.splice(indexToDelete, 1);

 console.log(fruits);

// Lösning 2 - filter
 fruits = fruits.filter((fruit) => fruit !== query);
 console.log(fruits);

 // Lösning 3 - for loop
 // Hittar den äpple läggs det till i den nya listan, hittar den päron gör den ingenting

 const filteredFruits = [];

 for (const fruit of fruits) {
   if (fruit === query) {
     filteredFruits.push(fruit);
   }
 }

// console.log(filteredFruits);

/**
 * Returns the elements of an array that meet the condition specified on a callback function
 * @param {*} list  är en array som vi vill filtrera
 * @param {*} predicate är en funktion som säger vad som ska behållar
 */
function filter(list, predicate) {
  const filteredList = [];
  for (const item of list) {
    if (predicate(item)) {
      filteredList.push(item);
    }
  }
  return filteredList;
}

const result = filter(fruits, (fruit) => fruit !== query);
console.log(result);
