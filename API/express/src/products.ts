// Våra produkter
export interface Product {
  id: string;
  title: string;
  price: number;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Banankaka",
    price: 85,
  },
  {
    id: "2",
    title: "Prinsesstårta",
    price: 499,
  },
];
