import React,  { use, useState, useEffect } from 'react'
import type { Product } from '../../types/Product.type'
import { Navigate, useNavigate } from 'react-router-dom';
import { getAllProducts, deleteProduct } from '../../services/ProductService';

const ProductList = () => {
    const [product, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        try{
            const data = await getAllProducts();
            setProducts(data);
            console.log(data)
        } catch (error) {
            setError("Không thể tải sản phẩm, lỗi: "+error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const handleDelete = async (id: string) => {
        if(window.confirm("Bạn có muốn xóa sản phẩm không?"))
            try{
                await deleteProduct(id);
                alert("Xóa sản phẩm thành công");
                fetchProducts();
            } catch (error) {
                alert("Lỗi khi xóa sản phẩm, Lỗi: " + error)
            }
    }
  return (
    <table border={1} cellPadding={8} style={{ marginTop: 16 }}>
        <thead>
          <tr>
            <th>Mã số</th>
            <th>Tên</th>
            <th>Mô tả</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Hình ảnh</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {product?.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>{prod.description}</td>
              <td>{prod.price}</td>
              <td>{prod.quantity}</td>
              <td>
                <img src={prod.imgUrl} height={100} width={100} />
              </td>
              <td>
                <button
                  onClick={() => navigate(`/products/${prod.id}`)}
                  style={{
                    backgroundColor: "#3498db",
                    color: "#fff",
                    marginRight: 8,
                  }}
                >
                  Xem
                </button>
                <button
                  onClick={() => navigate(`/products/${prod.id}/edit`)}
                  style={{
                    backgroundColor: "#f1c40f",
                    color: "#000",
                    marginRight: 8,
                  }}
                >
                  Sửa
                </button>
                <button
                  onClick={() => handleDelete(prod.id)}
                  style={{ backgroundColor: "#e74c3c", color: "#fff" }}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default ProductList