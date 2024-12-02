import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

function BrandDetail() {
  const { id } = useParams();
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    API.get(`/brands/${id}`).then((res) => setBrand(res.data));
  }, [id]);

  if (!brand) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">{brand.name}</h2>
      <p>{brand.description}</p>
      <img src={brand.logo} alt={brand.name} />
    </div>
  );
}

export default BrandDetail;
