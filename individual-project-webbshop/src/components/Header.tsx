import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Product } from "../data/mockedData";
import Cart from "./Cart";
import HamburgerMenu from "./HamburgerMenu";
import NavigationBar from "./NavigationBar";

const HeaderDiv = styled.header`
  font-family: "Quicksand", sans-serif;
  background: #ede4dd;
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const Button = styled.button`
  background: #ede4dd;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 9999px;
  border: solid grey 1px;
  font-size: 30px;
  &:hover {
    background: #dcc6b8;
  }
`;

const CartIcon = styled.span`
  font-size: 40px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 20px;
  cursor: pointer;
`;

function Header({ cart }: { cart: Product[] }) {
  const [cartOpen, setCartOpen] = useState(false);

  const toogle = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <HeaderDiv>
      {/* Hemknappen */}
      <ButtonWrapper>
        <Link to="/">
          <Button>🏠</Button>
        </Link>
      </ButtonWrapper>
      {/* Navigationbar */}
      <NavigationBar />
      {/* Kundvagn */}
      <CartWrapper>
        <Cart isOpen={cartOpen} toggle={toogle} cart={cart} />
        <CartIcon onClick={toogle} className="material-symbols-outlined">
          shopping_cart
        </CartIcon>
        {/* HamburgerMenu */}
        <HamburgerMenu />
      </CartWrapper>
    </HeaderDiv>
  );
}

export default Header;
