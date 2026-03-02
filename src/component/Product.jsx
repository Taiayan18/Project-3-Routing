import { useState } from "react";

const Product = ({ products, deleteProduct, updateProduct, user }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleEdit = (item) => {
    const newName = prompt("Enter Product Name", item.name);
    const newPrice = prompt("Enter Product Price", item.price);

    if (newName && newPrice) {
      updateProduct(item.id, {
        name: newName,
        price: newPrice
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        🛒 Product Page
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {currentProducts.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >

            <img
              src={item.image}
              alt={item.name}
              className="h-44 w-full object-cover"
            />

            <div className="p-4">

              <h3 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h3>

              <p className="text-green-600 font-bold mt-2 text-lg">
                ₹ {item.price}
              </p>

     
              {user && (
                <div className="flex gap-3 mt-4">

                  <button
                    onClick={() => handleEdit(item)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
                  >
                    ✏ Edit
                  </button>

                  <button
                    onClick={() => deleteProduct(item.id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
                  >
                    🗑 Delete
                  </button>

                </div>
              )}

            </div>
          </div>
        ))}

      </div>

      <div className="flex justify-center gap-3 mt-12">

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-5 py-2 rounded-xl font-semibold transition ${
              currentPage === index + 1
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}

      </div>

    </div>
  );
};

export default Product;