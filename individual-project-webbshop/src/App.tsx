import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Product } from "./data/mockedData";

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  // console.log(cart);

  return (
    <div>
      <Header cart={cart} />
      <main>
        <Outlet context={setCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
