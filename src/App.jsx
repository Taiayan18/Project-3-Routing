import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Product from "./component/Product";
import AddProduct from "./component/Addproduct";
import Login from "./component/Login";

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // ✅ Delete Product
  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  // ✅ Update Product
  const updateProduct = (id, updatedData) => {
    setProducts(
      products.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item
      )
    );
  };

  return (
    <>
      <Navbar cart={cart} />

      <Routes>
        <Route
          path="/product"
          element={
            <Product
              products={products}
              deleteProduct={deleteProduct}
              updateProduct={updateProduct}
            />
          }
        />

        <Route
          path="/addproduct"
          element={<AddProduct setProducts={setProducts} />}
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;