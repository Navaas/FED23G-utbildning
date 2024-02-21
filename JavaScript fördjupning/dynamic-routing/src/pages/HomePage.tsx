import { Link } from "react-router-dom";
import { mockedProducts } from "../products";

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      {mockedProducts.map((product) => (
        <Link key={product.id} to={"/products/" + product.id}>
          {product.title}
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
