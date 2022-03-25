import React from "react";
import FeaturedBanners from "../components/FeaturedBanners";
import ProductCategories from "../components/ProductCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import Content from "../components/common/Content";

export default function HomePage() {
  return (
    <Content>
      <FeaturedBanners />
      <ProductCategories />
      <FeaturedProducts />
    </Content>
  );
}
