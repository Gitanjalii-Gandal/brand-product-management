import { useState, useEffect } from "react";
import API from "../api";

function ProductForm({ product, brands, onSave }) {
  const [name, setName] = useState(product?.name || "");
  const [description, setDescription] = useState(product?.description || "");
  const [price, setPrice] = useState(product?.price || "");
  const [category, setCategory] = useState(product?.category || "");
  const [image, setImage] = useState(product?.image || "");
  const [brandId, setBrandId] = useState(product?.brandId || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, description, price, category, image, brandId };
    if (product) {
      await API.put(`/products/${product.id}`, data);
    } else {
      await API.post("/products", data);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block mb-2 p-2 border"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block mb-2 p-2 border"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="block mb-2 p-2 border"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="block mb-2 p-2 border"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="block mb-2 p-2 border"
      />
      <select
        value={brandId}
        onChange={(e) => setBrandId(e.target.value)}
        className="block mb-2 p-2 border"
      >
        <option value="">Select Brand</option>
        {brands.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>
      <button type="submit" className="bg-green-500 text-white p-2">
        Save
      </button>
    </form>
  );
}

export default ProductForm;
