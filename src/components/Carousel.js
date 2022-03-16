import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function Carousel() {
  const [currImage, setCurrImage] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
      const feat_bann = getData()
      console.log(feat_bann)
  }, [])

  const getData = async () => {
      const response = await fetch("./mocks/en-us/featured-banners.json")
      const resp = await response.json()
      setData(resp)
  }

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
