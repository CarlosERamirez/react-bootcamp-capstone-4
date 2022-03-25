import React from "react";
import productCategories from "./product-categories.json";
import Slider from "./common/Slider";

export default function ProductCategories() {
  return <Slider data={productCategories} />;
}
