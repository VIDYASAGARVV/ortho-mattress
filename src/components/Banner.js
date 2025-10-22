import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BannerSlider() {
  const slides = useMemo(
    () => [
      {
        id: 1,
        video: "/videos/video.mp4", // 🎥 Your video file
        poster: "/images/ortho2.jpg", // 🖼️ Fallback image
      },
    ],
    []
  );

  const [current, setCurrent] = useState(0);
  const videoRefs = useRef([]);

  // Auto-slide every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Restart next video on slide change
  useEffect(() => {
    const video = videoRefs.current[current];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }, [current]);

  return (
    <div
      className="
        relative w-screen overflow-hidden bg-black
        h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[750px]
      "
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <video
            ref={(el) => (videoRefs.current[current] = el)}
            src={slides[current].video}
            poster={slides[current].poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="
              absolute top-0 left-0 w-full h-full
              object-cover sm:object-cover md:object-cover
            "
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
