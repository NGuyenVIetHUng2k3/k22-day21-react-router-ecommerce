import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./layouts/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:productId" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
