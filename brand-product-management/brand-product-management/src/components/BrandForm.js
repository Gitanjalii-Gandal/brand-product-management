import { useState, useEffect } from "react";
import API from "../api";

function BrandForm({ brand, onSave }) {
  const [name, setName] = useState(brand?.name || "");
  const [description, setDescription] = useState(brand?.description || "");
  const [logo, setLogo] = useState(brand?.logo || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, description, logo };
    if (brand) {
      await API.put(`/brands/${brand.id}`, data);
    } else {
      await API.post("/brands", data);
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
        type="text"
        placeholder="Logo URL"
        value={logo}
        onChange={(e) => setLogo(e.target.value)}
        className="block mb-2 p-2 border"
      />
      <button type="submit" className="bg-green-500 text-white p-2">
        Save
      </button>
    </form>
  );
}

export default BrandForm;
