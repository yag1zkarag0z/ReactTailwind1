import React, { useEffect, useState } from "react";
import Image1 from "../../assets/hero/women (1).png"
import Image2 from "../../assets/hero/shopping.png"
import Image3 from "../../assets/hero/sale.png"

const ImageList = [
    
    {
    id: 1,    
    img: Image1,
    title: "Upto %50 off on all Men's Wear",
    description:"Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting,"
},
{
    id: 2,
    img: Image2,
    title: "300% off on all Women's Wear",
    description: " It has survived not only many decades, but also the leap into electronic typesetting,"
},
{
    id:3,
    img: Image3,
    title:"70% off on all Products Sale",
    description: "translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting,"
}

]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ImageList.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + ImageList.length) % ImageList.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % ImageList.length);
  };

  return (
    <div className="relative overflow-hidden min-h-[550px]
    sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
    <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-10"></div>
    {/* hero section */}
     <div className="container pb-8 sm:pb-0">
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {ImageList.map((data) => (
              <div key={data.id} className="min-w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      className="text-sm"
                    >
                      {data.description}
                    </p>
                    <button
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="300"
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full w-fit mx-auto sm:mx-0"
                    >
                      Order Now
                    </button>
                  </div>
                  <div className="relative order-1 sm:order-2">
                    <img
                      data-aos="zoom-in"
                      data-aos-once="true"
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/70 px-3 py-2 text-lg text-gray-800 shadow-md backdrop-blur dark:bg-gray-800/70 dark:text-white"
            aria-label="Previous slide"
          >
            {"<"}
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/70 px-3 py-2 text-lg text-gray-800 shadow-md backdrop-blur dark:bg-gray-800/70 dark:text-white"
            aria-label="Next slide"
          >
            {">"}
          </button>
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {ImageList.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "w-8 bg-primary" : "w-2.5 bg-gray-400/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
     </div>
    </div>
  )
}

export default Hero
 
