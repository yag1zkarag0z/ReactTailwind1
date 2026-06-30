import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="py-14">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="mb-16 max-w-xl">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              data-aos-delay={data.id * 100}
              className="group relative w-full max-w-[320px] rounded-2xl bg-white shadow-xl duration-300 hover:-translate-y-1 hover:bg-black/80 dark:bg-gray-800 dark:hover:bg-primary dark:hover:text-white"
            >
              {/* image section */}
              <div className="flex h-[220px] items-center justify-center px-4 pt-6">
                <img
                  src={data.img}
                  alt=""
                  className="max-h-[200px] w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* details section */}
              <div className="space-y-3 p-5 text-center">
                {/* star rating */}
                <div className="flex items-center justify-center gap-1 text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-sm text-gray-500 duration-300 group-hover:text-white dark:text-gray-300">
                  {data.description}
                </p>
                <button
                  className="mt-2 rounded-full bg-primary px-4 py-2 text-white duration-300 hover:scale-105 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
