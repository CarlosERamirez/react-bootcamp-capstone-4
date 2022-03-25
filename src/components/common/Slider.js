import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function Slider({ data }) {
  const [currImage, setCurrImage] = useState(0);

  const prevSlide = () => {
    setCurrImage(
      currImage === 0 ? data?.results.length - 1 : currImage - 1
    );
  };

  const nextSlide = () => {
    setCurrImage(
      currImage === data?.results.length - 1 ? 0 : currImage + 1
    );
  };

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      {data?.results?.map((item, index) => {
        return (
          <div
            className={index === currImage ? "cell active" : "cell inactive"}
            key={index}
          >
            <h1>{item.data.name}</h1>
            {index === currImage && (
              <img
                className="imageSlider"
                key={item.id}
                src={item.data.main_image.url}
                alt={item.data.main_image.alt}
              />
            )}
          </div>
        );
      })}
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    </section>
  );
}
