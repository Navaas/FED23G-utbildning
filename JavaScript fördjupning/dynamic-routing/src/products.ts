export interface Product {
  id: string;
  title: string;
  price: number;
}

export const mockedProducts: Product[] = [
  {
    id: "1",
    title: "Vita strumpor",
    price: 99,
  },
  {
    id: "2",
    title: "Gula byxor",
    price: 999,
  },
  {
    id: "3",
    title: "Svart jacka",
    price: 1999,
  },
];
