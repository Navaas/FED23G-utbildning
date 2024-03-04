import styled from "styled-components";
import BuyButton from "../components/BuyButton";
import LikeButton from "../components/LikeButton";
import type { Product } from "../data/mockedData";

/* Interface berättar hur en produkt ser ut. */
interface Props {
  product: Product;
}

const Container = styled.div`
  background: #f1edea;
  font-family: "Quicksand", sans-serif;
  display: flex;
  justify-content: center;
  padding: 30px;
  height: 110vh;
  @media (max-width: 768px) {
    height: 80vh;
  }
  @media (max-width: 480px) {
    height: 90vh;
  }
`;

const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
  @media (max-width: 768px) {
    height: 70vh;
    margin-top: 50px;
  }
  @media (max-width: 480px) {
    width: 60vh;
  }
`;

const SingleProduct = styled.div`
  border: lightgrey solid 1px;
  background: white;
  border-radius: 10px;
  width: 75vh;
  height: 100vh;
  text-align: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 55vh;
    height: 80vh;
  }
  @media (max-width: 480px) {
    width: 50vh;
    height: 90vh;
    margin-top: 30px;
  }
`;

const SingleProductImage = styled.img`
  padding-top: 20px;
  padding-bottom: 20px;
  height: 65%;
  @media (max-width: 480px) {
    height: 45%;
  }
`;

const Text = styled.p`
  margin: 0;
`;

const Description = styled.p`
  text-align: left;
  margin: 0;
`;

const Title = styled.p`
  text-align: left;
  margin: 0;
  font-weight: bold;
`;

const LikeAndBuyDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`;

function ProductView(props: Props) {
  /* Sätter title, price och image till en variabel */
  const { price, description } = props.product;

  /* TVÅ OLIKA SÄTT ATT FÅ UT PRODUKTEN. */
  /* Använd antingen props.product.image */
  /* Bara {title}, {price} {image} */

  return (
    <Container>
      <Product>
        <SingleProduct>
          <SingleProductImage src={props.product.image} alt="Product" />
          {/* Bara props */}
          <Text>{props.product.title}</Text>
          <Text>{price} :-</Text>
          <div style={{ padding: "20px" }}>
            <Title>Beskrivning:</Title>
            <Description> {description}</Description>
          </div>
          {/* Med variabel */}
          <LikeAndBuyDiv>
            <LikeButton />
            <BuyButton product={props.product} />
          </LikeAndBuyDiv>
        </SingleProduct>
      </Product>
    </Container>
  );
}

export default ProductView;
