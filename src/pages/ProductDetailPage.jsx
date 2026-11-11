import React from "react";
import { useNavigate, useParams } from "react-router";
import { categoryLabels, products } from "../data/products.js";

const formatPrice = (price) =>
  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(price);

export default function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <section className="message-page">
        <span className="eyebrow">Không tìm thấy</span>
        <h1>Sản phẩm không tồn tại</h1>
        <p>Sản phẩm bạn đang tìm có thể đã được gỡ khỏi danh sách.</p>
        <button
          className="button button-primary"
          onClick={() => navigate("/products")}
          type="button"
        >
          Quay lại danh sách
        </button>
      </section>
    );
  }

  return (
    <section className="detail-page">
      <button
        className="back-link"
        onClick={() => navigate("/products")}
        type="button"
      >
        <span aria-hidden="true">←</span> Quay lại danh sách
      </button>
      <div className="detail-layout">
        <div className="detail-image-frame">
          <img alt={product.name} src={product.image} />
        </div>
        <div className="detail-copy">
          <span className="category-label">
            {categoryLabels[product.category]}
          </span>
          <h1>{product.name}</h1>
          <p className="detail-price">{formatPrice(product.price)}</p>
          <div className="detail-divider" />
          <h2>Mô tả sản phẩm</h2>
          <p className="detail-description">{product.description}</p>
          <p className="detail-note">
            Sản phẩm được tuyển chọn để mang đến trải nghiệm công nghệ đáng tin
            cậy mỗi ngày.
          </p>
        </div>
      </div>
    </section>
  );
}
