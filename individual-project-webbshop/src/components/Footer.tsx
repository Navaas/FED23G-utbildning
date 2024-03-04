import styled from "styled-components";

const FooterContainer = styled.div`
  background: #ede4dd;
  font-family: "Quicksand", sans-serif;
  color: black;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  width: 100%;
  text-align: center;
  justify-content: center;
  align-content: center;
  z-index: 999;
  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const FooterContent = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;

const Item1 = styled.div`
  padding: 0;
`;

const Item2 = styled.div``;

const Item3 = styled.div``;

const ItemIcons = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 40px;
`;
function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <h3>Hjälp & Support</h3>
        <Item1>
          <p>Kundservice</p>
          <p>Leverans</p>
          <p>Return</p>
          <p>Betalning</p>
        </Item1>
      </FooterContent>
      <FooterContent>
        <Item2>
          <p style={{ margin: 0 }}>Copyright by: Michaela Andreasson 2024 ©</p>
        </Item2>
      </FooterContent>
      <FooterContent>
        <Item3>
          <span>Följ oss</span>
          <ItemIcons>
            <i className="ri-facebook-circle-fill"></i>
            <i className="ri-instagram-fill"></i>
            <i className="ri-tiktok-fill"></i>
          </ItemIcons>
        </Item3>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
