import React from "react";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow"><span className="status-dot" /> Chào mừng đến với Nova Store</span>
        <h1>
          Công nghệ tốt
          <br />
          <span>bắt đầu từ đây.</span>
        </h1>
        <p>
          Khám phá những thiết bị công nghệ được tuyển chọn cho công việc, học
          tập và những khoảnh khắc bạn yêu thích.
        </p>
        <Link className="button button-primary" to="/products">
          Khám phá sản phẩm <span aria-hidden="true">→</span>
        </Link>
        <div className="hero-highlights">
          <div>
            <strong>8+</strong>
            <span>Sản phẩm chọn lọc</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Danh mục công nghệ</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Trải nghiệm tận tâm</span>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-frame">
          <img
            alt="Không gian làm việc hiện đại với thiết bị công nghệ"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=90"
          />
        </div>
        <div className="floating-note">
          <span className="floating-icon" aria-hidden="true">✦</span>
          <span>
            <strong>Chọn chất lượng</strong>
            <small>Đón đầu xu hướng mới</small>
          </span>
        </div>
        <div className="visual-decoration" aria-hidden="true" />
      </div>
    </section>
  );
}
