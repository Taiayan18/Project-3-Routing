import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addproduct = ({ setProducts }) => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      price,
      image
    };

    setProducts((prev) => [...prev, newProduct]);

    alert("Product Added Successfully ✅");

    navigate("/product");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 text-white shadow-2xl p-8 rounded-2xl w-96 space-y-5"
      >
        <h1 className="text-2xl font-bold text-center">
          Add Product
        </h1>

        <input
          type="text"
          placeholder="Product Name"
          required
          onChange={(e) => setName(e.target.value)}
          className="text-black font-bold w-full border p-3 rounded-lg"
        />

        <input
          type="number"
          placeholder="Price"
          required
          onChange={(e) => setPrice(e.target.value)}
          className="text-black font-bold w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Image URL"
          required
          onChange={(e) => setImage(e.target.value)}
          className="text-black w-full border p-3 rounded-lg"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Add Product
        </button>
      </form>

    </div>
  );
};

export default Addproduct;