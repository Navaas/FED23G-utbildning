import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    display: none;
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

const List = styled.li`
  float: left;
  padding: 15px;
  margin: 5px;
  &:hover {
    text-decoration: underline;
    color: grey;
  }
`;

function NavigationBar() {
  return (
    <NavbarContainer>
      <Ul>
        <List>Nyheter</List>
        <List>Posters</List>
        <List>Canvas</List>
        <List>Topplistan</List>
      </Ul>
    </NavbarContainer>
  );
}

export default NavigationBar;
