import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Navbar from "./navbar/Navbar";
import Product from "./component/Product";
import AddProduct from "./component/Addproduct";
import Login from "./component/Login";

function App() {

  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null); 

 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };


  const updateProduct = (id, updatedData) => {
    setProducts(
      products.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item
      )
    );
  };

  return (
    <>
      <Navbar user={user} />

      <Routes>
        <Route
          path="/product"
          element={
            <Product
              products={products}
              deleteProduct={deleteProduct}
              updateProduct={updateProduct}
              user={user}   
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