import { Dispatch, SetStateAction } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { Product } from "../data/mockedData";

const Button = styled.button`
  background: #ede4dd;
  width: 70px;
  padding: 5px;
  font-family: "Quicksand", sans-serif;
  border: 1px solid grey;
  border-radius: 5px;
  text-transform: uppercase;
  transition-duration: 0.6s;
  &:hover {
    background: #dcc6b8;
  }
`;

/**
 * @param {Object} props - Properties of the component.
 * @param {Product} props.product - The product to be added to the shopping cart when the button is clicked.
 */
interface Props {
  product: Product;
}

/**
 * Add added to the shopping cart when the button is clicked.
 * @param {Product} product
 */
function BuyButton(props: Props) {
  const setCart = useOutletContext<Dispatch<SetStateAction<Product[]>>>();

  const addToCart = (product: Product) => {
    setCart((cart) => [...cart, product]);
  };

  return <Button onClick={() => addToCart(props.product)}>Köp</Button>;
}

export default BuyButton;
