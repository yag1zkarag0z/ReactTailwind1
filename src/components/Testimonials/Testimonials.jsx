import React, { useEffect, useState } from "react";
import Img1 from "../../assets/341-101x101.jpg";
import Img2 from "../../assets/393-101x101.jpg";
import Img3 from "../../assets/82-104x104.jpg";
import Img4 from "../../assets/818-103x103.jpg";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: Img1,
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: Img2,
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: Img3,
  },
  {
    id: 4,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: Img4,
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TestimonialData.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="relative overflow-hidden py-16 mb-10">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900" />
      <div className="absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20" />
      <div className="absolute -right-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-secondary/10 blur-3xl dark:bg-secondary/10" />

      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span
            data-aos="fade-up"
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            What our customers are saying
          </span>
          <h1
            data-aos="fade-up"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Testimonials
          </h1>
          <p
            data-aos="fade-up"
            className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        <div
          data-aos="zoom-in"
          className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-4 shadow-[0_20px_80px_-20px_rgba(249,115,22,0.25)] backdrop-blur dark:border-gray-800 dark:bg-gray-900/70"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {TestimonialData.map((data) => (
              <div key={data.id} className="w-full shrink-0 px-3 sm:px-4">
                <div className="relative flex min-h-[320px] flex-col gap-5 overflow-hidden rounded-[1.5rem] border border-orange-100 bg-gradient-to-br from-white via-orange-50 to-amber-50 px-6 py-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(249,115,22,0.45)] dark:border-gray-700 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
                  <div className="absolute right-4 top-4 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Verified
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="h-16 w-16 rounded-full border-4 border-white object-cover shadow-md dark:border-gray-700"
                    />
                    <div>
                      <h1 className="text-lg font-bold text-slate-900 dark:text-white">
                        {data.name}
                      </h1>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Happy customer
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <FaQuoteLeft className="absolute -top-2 left-0 text-2xl text-primary/20" />
                    <p className="pl-8 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {data.text}
                    </p>
                  </div>
                  <p className="absolute bottom-0 right-3 select-none text-8xl font-serif leading-none text-primary/10 dark:text-white/10">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {TestimonialData.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-10 bg-primary shadow-[0_0_0_4px_rgba(249,115,22,0.15)]"
                    : "w-2.5 bg-slate-400/70 dark:bg-slate-500/70"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
