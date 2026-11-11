import React from "react";
import { useMemo } from "react";
import { useSearchParams } from "react-router";
import ProductCard from "../components/ProductCard.jsx";
import { categoryLabels, products } from "../data/products.js";

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") ?? "";
  const category = searchParams.get("category") ?? "";

  const filteredProducts = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLocaleLowerCase();

    return products.filter((product) => {
      const matchesKeyword = product.name
        .toLocaleLowerCase()
        .includes(normalizedKeyword);
      const matchesCategory = !category || product.category === category;
      return matchesKeyword && matchesCategory;
    });
  }, [category, keyword]);

  function updateFilter(key, value) {
    const nextParams = new URLSearchParams(searchParams);
    if (value) {
      nextParams.set(key, value);
    } else {
      nextParams.delete(key);
    }
    setSearchParams(nextParams, { replace: true });
  }

  function clearFilters() {
    setSearchParams({}, { replace: true });
  }

  return (
    <section className="catalog">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Bộ sưu tập Nova</span>
          <h1>Sản phẩm công nghệ</h1>
          <p>Thiết bị hữu ích, thiết kế tinh tế, sẵn sàng cho mỗi ngày.</p>
        </div>
        <span className="result-count">{filteredProducts.length} sản phẩm</span>
      </div>

      <div aria-label="Lọc sản phẩm" className="filter-bar">
        <label className="search-field">
          <span aria-hidden="true" className="search-icon">⌕</span>
          <span className="visually-hidden">Tìm theo tên sản phẩm</span>
          <input
            onChange={(event) => updateFilter("keyword", event.target.value)}
            placeholder="Tìm sản phẩm..."
            type="search"
            value={keyword}
          />
        </label>
        <label className="category-select-label">
          <span className="visually-hidden">Lọc theo danh mục</span>
          <select
            onChange={(event) => updateFilter("category", event.target.value)}
            value={category}
          >
            <option value="">Tất cả danh mục</option>
            {Object.entries(categoryLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span aria-hidden="true" className="empty-icon">⌕</span>
          <h2>Chưa tìm thấy sản phẩm phù hợp</h2>
          <p>Thử một từ khóa khác hoặc xóa bộ lọc để xem toàn bộ sản phẩm.</p>
          <button className="button button-secondary" onClick={clearFilters} type="button">
            Xóa bộ lọc
          </button>
        </div>
      )}
    </section>
  );
}
