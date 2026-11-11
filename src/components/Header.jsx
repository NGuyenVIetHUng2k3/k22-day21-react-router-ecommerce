import React from "react";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink aria-label="Nova Store - Trang chủ" className="brand" to="/">
          <span aria-hidden="true" className="brand-mark">
            N
          </span>
          <span>nova<span className="brand-accent">store</span></span>
        </NavLink>

        <nav aria-label="Điều hướng chính" className="main-nav">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            end
            to="/"
          >
            Trang chủ
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/products"
          >
            Sản phẩm
          </NavLink>
        </nav>

        <span className="header-note">Công nghệ, theo cách của bạn</span>
      </div>
    </header>
  );
}
