let orders = [
  {
    id: 12,
    created: "2023-09-12",
    price: 2999,
    products: ["Julgran", "Soffa", "Hatt"],
    customer: "Mysan",
    deliveryAdress: {
      street: "Vägen 1",
      zip: 48733,
      city: "Gothenburg",
    },
  },
  {
    id: 28,
    created: "2023-12-20",
    price: 12999,
    products: ["Dator"],
    customer: "David",
    deliveryAdress: {
      street: "Vägen 1",
      zip: 48733,
      city: "Gothenburg",
    },
  },
];

// CRUD = Skapa, Läsa, Uppdatera, Ta bort - Create, Read, Update, Delete

// Create (Write)
// Read (read)
// Update (write)
// Delete (write)

function findOrder(id) {
  for (const order of orders) {
    if (order.id === id) {
      return order;
    }
  }
}

// Predicate är sant eller falskt

function deleteOrder(id) {
  const newOrdersArray = [];
  for (const order of orders) {
    if (order.id !== id) {
      newOrdersArray.push(order);
    }
  }
  orders = newOrdersArray;
  // Dessa två rader gör samma sak som for loopen ovan. Bara mindre rader kod.
  // orders = orders.filter((order) => order.id !== id) // Ta bort om id:t matchar, annars behåll ordern.
}

function createOrder(order) {
  orders.push({
    id: Math.random().toString().slice(2),
    created: new Date().toISOString(),
    ...order,
  });
}

function main() {
  console.log(findOrder(28));
  deleteOrder(28);
  console.log(findOrder(28));

  createOrder({
    price: 449,
    products: ["Glitter", "Strumpor"],
    customer: "Malin",
    deliveryAdress: {
      street: "Vägen 2",
      zip: 48733,
      city: "Gothenburg",
    },
  });
  console.log(orders);
}

main();
