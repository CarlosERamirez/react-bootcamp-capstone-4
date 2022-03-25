import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import productCategories from "./product-categories.json";

export default function ProductCategories() {
  const [currImage, setCurrImage] = useState(0);

  const prevSlide = () => {
    setCurrImage(
      currImage === 0 ? productCategories?.results.length - 1 : currImage - 1
    );
  };

  const nextSlide = () => {
    setCurrImage(
      currImage === productCategories?.results.length - 1 ? 0 : currImage + 1
    );
  };

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      {productCategories?.results?.map((categorie, index) => {
        return (
          <div
            className={index === currImage ? "cell active" : "cell inactive"}
            key={index}
          >
            <h1>{categorie.data.name}</h1>
            {index === currImage && (
              <img
                className="imageSlider"
                key={categorie.id}
                src={categorie.data.main_image.url}
                alt={categorie.data.main_image.alt}
              />
            )}
          </div>
        );
      })}
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    </section>
  );
}
