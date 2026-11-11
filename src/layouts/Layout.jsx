import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header.jsx";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <span>© 2025 Nova Store</span>
          <span>Công nghệ tốt, trải nghiệm tốt hơn.</span>
        </div>
      </footer>
    </>
  );
}
