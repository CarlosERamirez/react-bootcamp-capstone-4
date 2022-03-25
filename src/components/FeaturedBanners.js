import React, { useState } from "react";
import { useFeaturedBanners } from "../utils/hooks/useFeaturedBanners";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function FeaturedBanners() {
  const [currImage, setCurrImage] = useState(0);
  // const { data: { results = [] } = {}, isLoading } = useFeaturedBanners(); // CERS
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  const prevSlide = () => {
    setCurrImage(currImage === 0 ? data?.results.length - 1 : currImage - 1);
  };

  const nextSlide = () => {
    setCurrImage(currImage === data?.results.length - 1 ? 0 : currImage + 1);
  };

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <ul className="slider">
        {data?.results?.map((banner, index) => {
          return (
            <li
              className={index === currImage ? "cell active" : "cell inactive"}
              key={index}
            >
              <h1>{banner.data.title}</h1>
              {index === currImage && (
                <img
                  className="imageSlider"
                  key={banner.id}
                  src={banner.data.main_image.url}
                  alt={banner.data.main_image.alt}
                />
              )}
              <p>{banner.data.description[0].text}</p>
            </li>
          );
        })}
      </ul>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    </section>
  );
}
