"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clientData, pricedeta } from "@/app/api/data";
import Image from "next/image";
import { getImagePrefix } from "@/utils/utils";

const CardSlider = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <div className="mt-16">
      <Slider {...settings}>
        {clientData.map((item, index) => (
          <div key={index} className="pr-6">
            <div className="w-70 h-36 relative flex items-center justify-center bg-opacity-100 rounded-xl">
              <Image
                src={`${getImagePrefix()}${item.icon}`}
                alt="icon"
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
