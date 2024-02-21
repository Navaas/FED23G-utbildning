import { useParams } from "react-router-dom";
import { mockedProducts } from "../products";

function ProductPage() {
  const params = useParams();
  const product = mockedProducts.find((product) => product.id === params.id);

  if (!product) {
    return (
      <div>
        <h1>Den här produkten finns inte...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>ProductPage</h1>
      {product.title}
      {product.price}
    </div>
  );
}

export default ProductPage;
