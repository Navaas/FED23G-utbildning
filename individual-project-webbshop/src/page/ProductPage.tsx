import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import BuyButton from "../components/BuyButton";
import LikeButton from "../components/LikeButton";
import { Product, mockedProducts } from "../data/mockedData";
import ProductView from "./ProductDetailsPage";

const Container = styled.div`
  background: #f1edea;
  display: flex;
  justify-content: center;
  padding: 30px;
`;

const ProductContainer = styled.div`
  border-radius: 10px;
  padding: 50px;
  background: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProductCard = styled.div`
  border: lightgrey solid 1px;
  border-radius: 10px;
  width: 25vh;
  height: 35vh;
  text-align: center;

  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 480px) {
    width: 35vh;
    height: 50vh;
  }
`;

const ProductImage = styled.img`
  padding: 10px;
  height: 60%;
`;

const LikeAndBuyButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`;

const TitleAndPrice = styled.p`
  font-family: "Quicksand", sans-serif;
  margin: 0;
`;

function ProductPage() {
  const params = useParams();
  const product = mockedProducts.find((product) => product.id === params.id) as
    | Product
    | undefined;

  if (!product) {
    return (
      <Container>
        <ProductContainer>
          {/* Här mappas alla produkter ut. */}
          {mockedProducts.map((product) => (
            <ProductCard key={product.id}>
              <Link to={"/products/" + product.id}>
                <ProductImage src={product.image} alt="productImage" />
                <TitleAndPrice>{product.title}</TitleAndPrice>
                <TitleAndPrice>{product.price} :-</TitleAndPrice>
              </Link>
              {/* Här hämtas LikeButton och Buyutton */}
              <LikeAndBuyButtonContainer>
                <LikeButton />
                <BuyButton product={product} />
              </LikeAndBuyButtonContainer>
            </ProductCard>
          ))}
        </ProductContainer>
      </Container>
    );
  }
  return (
    <div>
      <ProductView product={product}></ProductView>
    </div>
  );
}

export default ProductPage;
