import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BannerSlider() {
  // ✅ Slides
  const slides = useMemo(
    () => [
      {
        id: 1,
        img: "/images/ortho2.jpg",
        // title: "Advanced Orthopedic Care",
        // subtitle: "Bringing Mobility Back to Life",
        // desc: "Compassionate care for every step you take.",
      },
      {
        id: 2,
        img: "/images/OIP.jpg",
        // title: "Your Health, Our Priority",
        // subtitle: "Modern facilities with trusted doctors",
        // desc: "Delivering excellence in patient care.",
      },
    ],
    []
  );

  const [current, setCurrent] = useState(0);

  // ✅ Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // ✅ Preload next image
  useEffect(() => {
    const nextIndex = (current + 1) % slides.length;
    const img = new Image();
    img.src = slides[nextIndex].img;
  }, [current, slides]);

  return (
    <div className="relative w-full h-[80vh] md:h-[90vh] sm:h-[70vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].img})` }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0  via-black/30 to-black/70"></div>

          {/* Text Overlay */}
       
        </motion.div>
      </AnimatePresence>

      {/* ✅ Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
