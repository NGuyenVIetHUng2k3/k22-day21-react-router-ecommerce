import React from "react";
import { Link } from "react-router";
import { categoryLabels } from "../data/products.js";

const formatPrice = (price) =>
  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(price);

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link
        aria-label={`Xem chi tiết ${product.name}`}
        className="product-image-link"
        to={`/products/${product.id}`}
      >
        <img alt={product.name} className="product-image" src={product.image} />
      </Link>
      <div className="product-card-content">
        <span className="category-label">
          {categoryLabels[product.category]}
        </span>
        <h2>
          <Link className="product-title" to={`/products/${product.id}`}>
            {product.name}
          </Link>
        </h2>
        <div className="product-card-footer">
          <span className="product-price">{formatPrice(product.price)}</span>
          <Link className="text-link" to={`/products/${product.id}`}>
            Chi tiết <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
