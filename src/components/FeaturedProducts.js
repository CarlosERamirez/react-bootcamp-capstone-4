import React from "react";
import featuredProducts from "./featured-products.json";

export default function FeaturedProducts() {
  return (
    <section className="products">
      {featuredProducts?.results?.map((product, index) => {
        return (
          <div className="cell" key={index}>
            <h1>{product.data.name}</h1>
            <h2>${product.data.price}USD</h2>
            <img
              className="imageGrid"
              key={product.id}
              src={product.data.mainimage.url}
              alt={product.data.mainimage.alt}
            />
            <p className="product-description">{product.data.description[0].text}</p>
          </div>
        );
      })}
    </section>
  );
}
