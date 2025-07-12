import React, { use, useState, useEffect } from "react";
import type { Product } from "../../types/Product.type";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getProductBYId } from "../../services/ProductService";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProducts] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fletchProduct = async () => {
      try {
        if (id) {
          const data = await getProductBYId(id);
          setProducts(data);
        }
      } catch (error) {
        setError("Khong the tai san pham " + error);
      } finally {
        setLoading(false);
      }
    };
    fletchProduct();
  },
    [id]);

    if(loading) return <p>Loading ...</p>
    if(error) return <p>{error}</p>
    if(!product) return <p>Product does not exist</p>

  return (
    <div>
      <h2>Chi tiết sản phẩm</h2>
      <ul>
        <li>
          <strong>ID:</strong> {product.id}
        </li>
        <li>
          <strong>Tên:</strong> {product.name}
        </li>
        <li>
          <strong>Giá:</strong> {product.price}
        </li>
        <li>
          <strong>Mô tả:</strong> {product.description}
        </li>
      </ul>
      <button onClick={() => navigate("/")} className="btn-back">
        Quay về
      </button>
    </div>
  );
};

export default ProductDetail;
