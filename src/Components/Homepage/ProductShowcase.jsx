import React from 'react';
import Slider from 'react-slick';
import indianwear from './images/indianwear.jpg';
import partywear from './images/partywear.jpg';
import casuals from './images/casuals.jpg';  
import jewellery from './images/jewellery.jpg';  
import footwear from './images/footwear.jpg';  
import kids from './images/kids.jpg';  
import officewear from './images/officewear.jpg';  
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductShowcase = () => {
  const data = [
    {
      img: indianwear,
      name: "Indian Wear",
    },
    {
      img: partywear,
      name: "Party Wear",
    },
    {
      img: casuals,
      name: "Casual Wear",
    },
    {
      img: jewellery,
      name: "Jewellery",
    },
    {
      img: footwear,
      name: "Footwear",
    },
    {
      img: kids,
      name: "Kids Wear",
    },
    {
      img: officewear,
      name: "Office Wear",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '60px',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-11/12 mx-auto py-4">
      <h2 className="text-center text-2xl font-bold mb-4">Categories</h2>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-4" style={{ height: '300px', width: '250px' }}>
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-3/4 object-cover rounded-lg shadow-lg"
              style={{ height: '400px', width: '400px' }} // Fixed height for the image
            />
            <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// Custom Arrow Component for the slider
const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow bg-black rounded-full p-2 shadow-md`}
      onClick={onClick}
    >
      <span className="text-lg font-bold">&gt;</span>
    </div>
  );
}

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow bg-black rounded-full p-2 shadow-md`}
      onClick={onClick}
    >
      <span className="text-lg font-bold text-white">&lt;</span>
    </div>
  );
}

export default ProductShowcase;
