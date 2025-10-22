import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BannerSlider() {
  // ✅ Memoized slides (won't change every render)
  const slides = useMemo(
    () => [
     
      {
        id: 1,
        img: "/images/ortho2.jpg",
   
      },
      {
        id: 2,
        img: "/images/OIP.jpg",
        // title: "Future is Renewable",
        // subtitle: "Switch to solar today",
        // desc: "Sustainable solutions for all",
      },
    ],
    []
  );

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]); // ✅ No warning now

  // Preload next image
  useEffect(() => {
    const nextIndex = (current + 1) % slides.length;
    const img = new Image();
    img.src = slides[nextIndex].img;
  }, [current, slides]);

  return (
    <div className="relative w-screen h-[82vh]  overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].img})` }}
        >
          <div className="absolute inset-0  via-black/70 to-transparent"></div>

          {/* <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20 text-white">
            <motion.h2
              key={slides[current].title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold"
            >
              {slides[current].title}
            </motion.h2>

            <motion.p
              key={slides[current].subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-2xl mt-4"
            >
              {slides[current].subtitle}
            </motion.p>

            <motion.p
              key={slides[current].desc}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-6 text-base md:text-lg font-semibold text-yellow-300"
            >
              {slides[current].desc}
            </motion.p>
          </div> */}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-white scale-125" : "bg-gray-400 hover:bg-white/70"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
