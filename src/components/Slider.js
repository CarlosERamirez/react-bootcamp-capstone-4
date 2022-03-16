import React, { useState } from "react";
import { useFeaturedBanners } from "../utils/hooks/useFeaturedBanners";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function Slider() {
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
      {data?.results?.map((banner, index) => {
        return (
          <div className={index === currImage ? 'slide active' : 'slide'} key={index} >
            {index === currImage && (
              <img
                className="imageSlider"
                key={banner.id}
                src={banner.data.main_image.url}
                alt={banner.data.main_image.alt}
              />
            )}
          </div>
        );
      })}
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    </section>
  );
}
