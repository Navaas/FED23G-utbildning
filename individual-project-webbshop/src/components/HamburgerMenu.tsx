import { useState } from "react";
import styled from "styled-components";

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  transition: opacity 0.4s ease-in-out;
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  cursor: default;
`;

const HamburgerContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-350px")};
  background: white;
  width: 350px;
  height: 93vh;
  border-radius: 10px;
  margin-top: 30px;
  transition: right 0.4s ease-in-out;
  z-index: 999;
  color: white;
  overflow-y: auto;
  @media (max-width: 480px) {
    width: 300px;
  }
`;

const HamburgerMenuIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const ListMobile = styled.li`
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    padding: 15px;
  }
`;

const Ul = styled.ul`
  padding: 0;
  list-style: none;
  text-transform: uppercase;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    color: black;
  }
`;

const Icon = styled.span`
  font-size: 36px;
`;

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <HamburgerMenuIcon>
        <Icon
          className="material-symbols-outlined"
          onClick={() => setIsOpen(!isOpen)}
        >
          menu
        </Icon>
      </HamburgerMenuIcon>
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <HamburgerContainer isOpen={isOpen}>
        <Ul>
          <ListMobile>Nyheter</ListMobile>
          <ListMobile>Posters</ListMobile>
          <ListMobile>Canvas</ListMobile>
          <ListMobile>Topplistan</ListMobile>
        </Ul>
      </HamburgerContainer>
    </div>
  );
}

export default HamburgerMenu;
